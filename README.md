YMal
============================

_**YMal —** The command line utility for modifiying **YAML** files_

[![Build Status](https://travis-ci.org/ziyasal/ymal.svg?branch=master)](https://travis-ci.org/ziyasal/ymal)
[![npm version](https://badge.fury.io/js/ymal.svg)](https://npmjs.com/ymal)

## Usage

```
  Usage: ymal [options] [command]

  Commands:

    help  Display help

  Options:

    -C, --classes-to-remove          List of classes to remove
    -f, --file                       YAML file path
    -h, --help                       Output usage information
    -P, --pattern-to-remove-classes  Remove classes by pattern o_O!
    -s, --set-value                  Set property value form: `property=value`
    -v, --version                    Output the version number
```

## Sample
```sh
# Removes classes starts with `tst_` and 
# sets `classes.languages::list.perl` property value to `Silver`

# Short form
ymal -f sample.yaml  -s 'classes.languages::list.perl=Silver' -P '^tst_'

# Long form
ymal --file=sample.yaml  --set-value='classes.languages::list.perl=Silver' \
                         --pattern-to-remove-classes='^tst_'
```


## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall now-serve if it's already installed: `npm uninstall -g ymal`
3. Link it to the global module directory: `npm link`
4. Transpile the source code and watch for changes: `npm start`

## Credits
- Licensed under MIT.
