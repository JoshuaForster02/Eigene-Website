# ENCOM OS — web edition

A TRON/ENCOM-style operating system that runs entirely in the browser (desktop + mobile). Framework-free window manager, animated grid, and a set of **legal, defensive** tools. The **METAL** app boots the real native ENCOM kernel (`antigravity-kernel`) via the [v86](https://github.com/copy/v86) WebAssembly x86 emulator.

Open at `/encom/`.

## Apps
- **Terminal** — command shell (`help`, `dns`, `pw`, `hash`, `b64`, `neofetch`, …)
- **Network Recon** — DNS-over-HTTPS lookups (Cloudflare) + your connection info
- **Passwort-Check** — HaveIBeenPwned k-anonymity leak check + entropy meter (password never leaves the browser)
- **Encoder** — Base64/Hex/URL/Binary/JWT + SHA-256/1
- **Cipher Lab** — Caesar/ROT, Atbash, Vigenère, XOR, Morse — for CTFs
- **Token Forge** — cryptographically secure UUIDs, keys, passwords (`crypto.getRandomValues`)
- **Subnet Calc** — IPv4 CIDR
- **System** — host info + live FPS
- **METAL** — the real x86 kernel, booted in-browser

Only CORS-enabled public endpoints are used; everything is read-only OSINT / defensive. No attack tooling.

## Vendored
`vendor/v86.wasm`, `libv86.js`, `seabios.bin`, `vgabios.bin` from the v86 project (BSD-2-Clause, see `vendor/v86-LICENSE`). `vendor/encom-kernel.bin` is built from `antigravity-kernel`.
