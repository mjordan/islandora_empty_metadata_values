# Islandora Empty Metadata Values

## Introduction

Simple utility module that hides Islandora metadata elements that are empty or that consist only of puncutation. Works with default Dublin Core metadata displays as well as metadata displays managed by Islandora Solr Metadata.

Note that this module works independently of the "Omit Empty Values" option in Islandora Solr's General Configuration settings. It doesn't omit metadata elements based on any logic determined by the underlying MODS or DC data. Instead, it uses JavaScript to inspect the rendered metadata display and if it finds HTML markup for metadata values that is empty or that contains only punctuation, the JavaScript hides the entire metadata element (including its label). The markup remains in the raw HTML source for the page, but it is invisible to the end user.

## Requirements

* [Islandora](https://github.com/Islandora/islandora)

## Installation

Install as usual, see [this](https://drupal.org/documentation/install/modules-themes/modules-7) for further information.

## Configuration

There are no admin settings for this module. All you have to do is enable it.

## Maintainer

* [Mark Jordan](https://github.com/mjordan)

## Development and feedback

Pull requests are welcome, as are suggestions and use cases. In particular, if you have this module enabled and you are still seeing "empty" metadata elements, open a Github issue and include a URL to the object.

## License

* [GPLv3](http://www.gnu.org/licenses/gpl-3.0.txt)
