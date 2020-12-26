# <p align="center"><img width="40%" src="https://dev.kweeksnews.com/assets/images/kweeksdev.svg"></p>

### Parameter JSON

#### assets/json/tech.json

| Parameter | Deskripsi      | Wajib |
| --------- | -------------- | ----- |
| name      | Nama teknologi | Ya    |
| image     | Logo teknologi | Ya    |

- Logo teknologi harus berukuran `1024 x 1024 pixel` dengan format `svg`.

#### assets/json/webmaster.json

| Parameter | Deskripsi                        | Wajib |
| --------- | -------------------------------- | ----- |
| name      | Nama (atau nama alias)           | Ya    |
| start     | Waktu mulai bertugas             | Ya    |
| finish    | Waktu selesai bertugas           | Tidak |
| link      | Tautan ke halaman web portofolio | Ya    |
| email     | Alamat email                     | Ya    |
| github    | Nama pengguna GitHub             | Ya    |
| telegram  | Nama pengguna Telegram           | Ya    |

- Apabila nama tersusun lebih dari dua kata, maka tampilkan dua kata saja dan sisanya disingkat.
- Parameter `finish` diisi apabila telah selesai bertugas. Selain itu, dapat dikosongkan saja.
