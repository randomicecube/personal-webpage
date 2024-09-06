{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    utils.url = "github:numtide/flake-utils";
    hugo-PaperMod = {
      url = "github:adityatelange/hugo-PaperMod";
      flake = false;
    };
  };

  outputs = inputs@{ self, nixpkgs, utils, ... }:
    utils.lib.eachSystem [
      utils.lib.system.x86_64-darwin
      utils.lib.system.x86_64-linux
      utils.lib.system.aarch64-darwin
      utils.lib.system.aarch64-linux
    ]
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        rec {

          packages.website = pkgs.stdenv.mkDerivation {
            name = "website";
            src = self;
            buildInputs = [ pkgs.git pkgs.nodePackages.prettier ];
            buildPhase = ''
              mkdir -p themes
              ln -s ${inputs.hugo-PaperMod} themes/hugo-PaperMod
              sed -i -e 's/enableGitInfo = true/enableGitInfo = false/' config.toml
              ${pkgs.hugo}/bin/hugo
              ${pkgs.nodePackages.prettier}/bin/prettier -w public '!**/*.{js,css}'
            '';
            installPhase = "cp -r public $out";
          };

          defaultPackage = self.packages.${system}.website;

          apps = rec {
            hugo = utils.lib.mkApp { drv = pkgs.hugo; };
            default = hugo;
          };

          devShell =
            pkgs.mkShell { buildInputs = [ pkgs.nixpkgs-fmt pkgs.hugo ]; };
        });
}