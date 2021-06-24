# <p align="center"><img width="40%" src="https://developers.kweeksnews.com/assets/images/kweeksdev.svg"></p>

## Introduction

KweeksDev uses the [GitHub Pages](https://pages.github.com/) service to display a list of the technology behind the KweeksNews Network sites and the sites administrators from period to period.

### JSON Parameters

#### assets/json/tech.json

| Parameters | Description | Type   | Required |
| ---------- | ----------- | ------ | -------- |
| name       | Name        | string | Yes      |
| image      | Logo        | string | Yes      |

- Logo must be `1024 x 1024` pixels in `svg` format.

#### assets/json/webmaster.json

| Parameters | Description                     | Type    | Required |
| ---------- | ------------------------------- | ------- | -------- |
| name       | Name (or alias)                 | string  | Yes      |
| start      | Start of duty period            | number  | Yes      |
| finish     | End of duty period              | number  | No       |
| link       | Direct link to portfolio page   | string  | Yes      |
| email      | Email address                   | string  | Yes      |
| github     | Direct link to GitHub profile   | string  | Yes      |
| telegram   | Direct link to Telegram profile | string  | Yes      |
| ltw        | Long-Term Webmaster status      | boolean | No       |

- If the name consists of more than two words, then write only the first two words and abbreviate the rest.
- Only fill the `finish` parameter when the duty period has ended. Otherwise, just leave it blank.

#### assets/json/editor.json

| Parameters | Description              | Type   | Required |
| ---------- | ------------------------ | ------ | -------- |
| start      | Start of duty period     | number | Yes      |
| finish     | End of duty period       | number | No       |
| head       | Head's name (or alias)   | string | Yes      |
| member     | Member's name (or alias) | array  | Yes      |

- If the name consists of more than two words, then write only the first two words and abbreviate the rest.
- Only fill the `finish` parameter when the duty period has ended. Otherwise, just leave it blank.

#### assets/json/illustrator.json

| Parameters | Description              | Type   | Required |
| ---------- | ------------------------ | ------ | -------- |
| start      | Start of duty period     | number | Yes      |
| finish     | End of duty period       | number | No       |
| head       | Head's name (or alias)   | string | Yes      |
| member     | Member's name (or alias) | array  | Yes      |

- If the name consists of more than two words, then write only the first two words and abbreviate the rest.
- Only fill the `finish` parameter when the duty period has ended. Otherwise, just leave it blank.

### License

```
Copyright (C) 2020  KweeksNews Network

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
