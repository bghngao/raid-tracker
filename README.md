# ⚔️ Guild Wars 2 — Weekly Raid Completion Report

> Comparing all available raid bosses (`/v2/raids`) against two account clears (`/v2/account/raids`)

---

## 📊 Summary

| Stat | 🟦 Main | 🟧 Alt |
|------|---------|--------|
| ✅ Cleared This Week | 9 | 9 |
| ❌ Not Yet Cleared | 11 | 11 |
| 📈 Weekly Progress | 45% | 45% |

---

## 🗺️ Wing 1 — Spirit Vale (`forsaken_thicket`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Vale Guardian | `vale_guardian` | ✅ | ❌ |
| Spirit Woods | `spirit_woods` | ❌ | ❌ |
| Gorseval the Multifarious | `gorseval` | ✅ | ✅ |
| Sabetha the Saboteur | `sabetha` | ✅ | ❌ |

---

## 🗺️ Wing 2 — Salvation Pass (`forsaken_thicket`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Slothasor | `slothasor` | ❌ | ✅ |
| Bandit Trio | `bandit_trio` | ❌ | ❌ |
| Matthias Gabrel | `matthias` | ❌ | ✅ |

---

## 🗺️ Wing 3 — Stronghold of the Faithful (`forsaken_thicket`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Siege the Stronghold (Escort) | `escort` | ❌ | ❌ |
| Keep Construct | `keep_construct` | ✅ | ✅ |
| Twisted Castle | `twisted_castle` | ❌ | ❌ |
| Xera | `xera` | ✅ | ❌ |

---

## 🗺️ Wing 4 — Bastion of the Penitent (`bastion_of_the_penitent`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Cairn the Indomitable | `cairn` | ✅ | ✅ |
| Mursaat Overseer | `mursaat_overseer` | ❌ | ✅ |
| Samarog | `samarog` | ❌ | ✅ |
| Deimos | `deimos` | ❌ | ✅ |

---

## 🗺️ Wing 5 — Hall of Chains (`hall_of_chains`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Soulless Horror | `soulless_horror` | ❌ | ✅ |
| River of Souls | `river_of_souls` | ❌ | ❌ |
| Statues of Grenth | `statues_of_grenth` | ❌ | ❌ |
| Dhuum | `dhuum` / `voice_in_the_void` | ✅ | ❌ |

---

## 🗺️ Wing 6 — Mythwright Gambit (`mythwright_gambit`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Conjured Amalgamate | `conjured_amalgamate` | ❌ | ❌ |
| Twin Largos | `twin_largos` | ❌ | ❌ |
| Qadim | `qadim` | ❌ | ❌ |

---

## 🗺️ Wing 7 — The Key of Ahdashim (`the_key_of_ahdashim`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Cardinal Adina | `adina` | ❌ | ❌ |
| Cardinal Sabir | `sabir` | ❌ | ❌ |
| Qadim the Peerless | `qadim_the_peerless` | ✅ | ❌ |

---

## 🗺️ Wing 8 — Mount Balrior (`mount_balrior`)

| Boss / Event | API ID | 🟦 Main | 🟧 Alt |
|---|---|---|---|
| Greer | `greer` | ❌ | ❌ |
| Decima | `decima` | ❌ | ❌ |
| Ura | `ura` | ❌ | ❌ |

---

## 🔀 Cross-Account Comparison

| Category | Bosses |
|---|---|
| ✅ Both cleared | `gorseval`, `keep_construct`, `cairn` |
| 🟦 Main only | `vale_guardian`, `sabetha`, `xera`, `voice_in_the_void`, `qadim_the_peerless` |
| 🟧 Alt only | `slothasor`, `matthias`, `mursaat_overseer`, `samarog`, `deimos`, `soulless_horror` |
| ❌ Neither cleared | `spirit_woods`, `bandit_trio`, `escort`, `twisted_castle`, `river_of_souls`, `statues_of_grenth`, `conjured_amalgamate`, `twin_largos`, `qadim`, `adina`, `sabir`, `greer`, `decima`, `ura` |

---

## 🔗 API Sources

| Endpoint | Account | Description |
|---|---|---|
| [`GET /v2/raids`](https://api.guildwars2.com/v2/raids) | — | All raids and their bosses/events |
| `GET /v2/account/raids` | 🟦 Main | Weekly clears for Main account |
| `GET /v2/account/raids` | 🟧 Alt | Weekly clears for Alt account |

---

*Report generated using the [Guild Wars 2 Official API](https://api.guildwars2.com/v2). Raid clears reset weekly on Monday 07:30 UTC.*
