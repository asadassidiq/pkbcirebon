let
  nixpkgs-commit = "b95255df2360a45ddbb03817a68869d5cb01bf96";
  nixpkgs-nodejs_17-commit = "d1c3fea7ecbed758168787fe4e4a3157e52bc808";
  # sha256 = "1w2i388q1c8sqf4g683kflz8s92n4ws9i2nrrq7wgd52qj9ifjzw";

  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/${nixpkgs-commit}.tar.gz") {};
  node_pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/${nixpkgs-nodejs_17-commit}.tar.gz") {};

  php = pkgs.php83.withExtensions ({ enabled, all }: [
    all.imagick
    all.iconv

    all.filter
    all.session
    all.pdo
    all.pdo_mysql
    all.pdo_sqlite
    # all.pdo_pgsql # For PostgreSQL. Uncomment if you use it.
    all.bcmath   # For arbitrary precision mathematics
    all.ctype    # For character type checking
    all.fileinfo # For detecting file mime types
    all.mbstring # For handling multi-byte strings (UTF-8, etc.)
    all.openssl  # For cryptographic functions
    all.tokenizer# Required by many parsing libraries
    # all.xml      # For XML manipulation
    all.dom      # For DOM manipulation (often used with XML)
    all.zip      # For handling .zip archives
    all.curl     # For HTTP requests
    all.gd          # For phpoffice/phpspreadsheet
    all.simplexml   # For phpoffice/phpspreadsheet
    all.xmlreader   # For phpoffice/phpspreadsheet
    all.xmlwriter   # For phar-io/manifest
    all.zlib        # For maennchen/zipstream-php
  ]);

  composer-phar = pkgs.fetchurl {
    url = "https://getcomposer.org/download/2.7.2/composer.phar";
    # Use the new, correct hash provided by the error message
    sha256 = "sha256-BJuODtnyZNdwoFEIWM/7w1QBUQdZ7cmnhLOlxuAgvKw=";
  };

  composer = pkgs.writeShellScriptBin "composer" ''
    #!${pkgs.stdenv.shell}
    ${php}/bin/php ${composer-phar} "$@"
  '';

in
# 4. Now use this specific 'pkgs' set to build your shell
pkgs.mkShell {
  nativeBuildInputs = [
    php
    composer
    node_pkgs.nodejs-17_x

    pkgs.autoconf
    pkgs.re2c
  ];
  buildInputs = with pkgs; [
    imagemagick
    pcre2
  ];

  FONTCONFIG_FILE = "${pkgs.fontconfig.out}/etc/fonts/fonts.conf";
  # MAGICK_CONFIGURE_PATH = "${pkgs.imagemagick.dev}/lib/ImageMagick-7.0.11/config-Q16HDRI";
}

