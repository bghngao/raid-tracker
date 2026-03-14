// ============================================================
//  GW2 Raid Tracker — tracker.js
//  All raid structure and API keys are defined here.
//  Update ACCOUNTS to change tokens, RAIDS to add new content.
// ============================================================

const ACCOUNTS = {
  main: { label: "Main", token: "9BB0CF18-9082-B44D-8B0F-5A755478BCB694B9FEED-FBB4-4E45-A128-F61C01299E0A" },
  alt:  { label: "Alt",  token: "11E0C93E-94C5-1146-B4E1-16203F83416F42EBAA79-1641-4670-AA6A-685EEBE095D3" }
};

const RAIDS = [
  {
    id: "forsaken_thicket",
    wings: [
      {
        name: "Wing 1 — Spirit Vale",
        bosses: [
          { name: "Vale Guardian",            id: "vale_guardian",  type: "Boss" },
          { name: "Spirit Woods",             id: "spirit_woods",   type: "Checkpoint" },
          { name: "Gorseval the Multifarious",id: "gorseval",       type: "Boss" },
          { name: "Sabetha the Saboteur",     id: "sabetha",        type: "Boss" }
        ]
      },
      {
        name: "Wing 2 — Salvation Pass",
        bosses: [
          { name: "Slothasor",     id: "slothasor",   type: "Boss" },
          { name: "Bandit Trio",   id: "bandit_trio", type: "Boss" },
          { name: "Matthias Gabrel", id: "matthias",  type: "Boss" }
        ]
      },
      {
        name: "Wing 3 — Stronghold of the Faithful",
        bosses: [
          { name: "Siege the Stronghold", id: "escort",         type: "Checkpoint" },
          { name: "Keep Construct",       id: "keep_construct", type: "Boss" },
          { name: "Twisted Castle",       id: "twisted_castle", type: "Checkpoint" },
          { name: "Xera",                 id: "xera",           type: "Boss" }
        ]
      }
    ]
  },
  {
    id: "bastion_of_the_penitent",
    wings: [
      {
        name: "Wing 4 — Bastion of the Penitent",
        bosses: [
          { name: "Cairn the Indomitable", id: "cairn",            type: "Boss" },
          { name: "Mursaat Overseer",      id: "mursaat_overseer", type: "Boss" },
          { name: "Samarog",               id: "samarog",          type: "Boss" },
          { name: "Deimos",                id: "deimos",           type: "Boss" }
        ]
      }
    ]
  },
  {
    id: "hall_of_chains",
    wings: [
      {
        name: "Wing 5 — Hall of Chains",
        bosses: [
          { name: "Soulless Horror",   id: "soulless_horror",   type: "Boss" },
          { name: "River of Souls",    id: "river_of_souls",    type: "Checkpoint" },
          { name: "Statues of Grenth", id: "statues_of_grenth", type: "Checkpoint" },
          { name: "Dhuum",             id: "voice_in_the_void", type: "Boss" }
        ]
      }
    ]
  },
  {
    id: "mythwright_gambit",
    wings: [
      {
        name: "Wing 6 — Mythwright Gambit",
        bosses: [
          { name: "Conjured Amalgamate", id: "conjured_amalgamate", type: "Boss" },
          { name: "Twin Largos",         id: "twin_largos",         type: "Boss" },
          { name: "Qadim",               id: "qadim",               type: "Boss" }
        ]
      }
    ]
  },
  {
    id: "the_key_of_ahdashim",
    wings: [
      {
        name: "Wing 7 — The Key of Ahdashim",
        bosses: [
          { name: "Cardinal Adina",    id: "adina",            type: "Boss" },
          { name: "Cardinal Sabir",    id: "sabir",            type: "Boss" },
          { name: "Qadim the Peerless",id: "qadim_the_peerless", type: "Boss" }
        ]
      }
    ]
  },
  {
    id: "mount_balrior",
    wings: [
      {
        name: "Wing 8 — Mount Balrior",
        bosses: [
          { name: "Greer",  id: "greer",  type: "Boss" },
          { name: "Decima", id: "decima", type: "Boss" },
          { name: "Ura",    id: "ura",    type: "Boss" }
        ]
      }
    ]
  }
];

// ── Helpers ──────────────────────────────────────────────────

function totalBosses() {
  return RAIDS.reduce((sum, r) => sum + r.wings.reduce((s, w) => s + w.bosses.length, 0), 0);
}

function pct(n, total) {
  return Math.round(n * 100 / total);
}

async function fetchClears(token) {
  const res = await fetch(`https://api.guildwars2.com/v2/account/raids?access_token=${token}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

// ── Render ───────────────────────────────────────────────────

function updateSummary(mainCleared, altCleared) {
  const total = totalBosses();
  const mc = mainCleared.length;
  const ac = altCleared.length;
  const bc = mainCleared.filter(id => altCleared.includes(id)).length;

  document.getElementById("total-bosses").textContent    = total;

  document.getElementById("main-cleared").textContent    = mc;
  document.getElementById("main-remaining").textContent  = total - mc;
  document.getElementById("main-bar").style.width        = pct(mc, total) + "%";
  document.getElementById("main-pct").textContent        = pct(mc, total) + "% complete";

  document.getElementById("alt-cleared").textContent     = ac;
  document.getElementById("alt-remaining").textContent   = total - ac;
  document.getElementById("alt-bar").style.width         = pct(ac, total) + "%";
  document.getElementById("alt-pct").textContent         = pct(ac, total) + "% complete";

  document.getElementById("both-cleared").textContent    = bc;
  document.getElementById("both-bar").style.width        = pct(bc, total) + "%";
  document.getElementById("both-pct").textContent        = pct(bc, total) + "% overlap";
}

function buildWings(mainCleared, altCleared) {
  const container = document.getElementById("wings-container");
  container.innerHTML = "";

  RAIDS.forEach(raid => {
    raid.wings.forEach(wing => {
      const rows = wing.bosses.map(boss => {
        const mc = mainCleared.includes(boss.id);
        const ac = altCleared.includes(boss.id);
        const rowClass = mc && ac ? "row-both" : mc ? "row-main" : ac ? "row-alt" : "row-none";
        return `
          <tr class="${rowClass}">
            <td class="boss-name">${boss.name}</td>
            <td><span class="type-badge type-${boss.type.toLowerCase()}">${boss.type}</span></td>
            <td class="status-cell">${mc ? "✅" : "❌"}</td>
            <td class="status-cell">${ac ? "✅" : "❌"}</td>
          </tr>`;
      }).join("");

      const block = document.createElement("div");
      block.className = "wing-block";
      block.innerHTML = `
        <h3 class="wing-title">${wing.name}</h3>
        <table class="boss-table">
          <thead>
            <tr>
              <th class="col-boss">Boss / Event</th>
              <th class="col-type">Type</th>
              <th class="col-account">🟦 ${ACCOUNTS.main.label}</th>
              <th class="col-account">🟧 ${ACCOUNTS.alt.label}</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>`;
      container.appendChild(block);
    });
  });
}

// ── Boot ─────────────────────────────────────────────────────

(async function init() {
  try {
    const [mainCleared, altCleared] = await Promise.all([
      fetchClears(ACCOUNTS.main.token),
      fetchClears(ACCOUNTS.alt.token)
    ]);

    updateSummary(mainCleared, altCleared);
    buildWings(mainCleared, altCleared);

    document.getElementById("loading-state").style.display = "none";
    document.getElementById("main-content").style.display  = "block";
  } catch (err) {
    console.error(err);
    document.getElementById("loading-state").style.display = "none";
    document.getElementById("error-state").style.display   = "block";
  }
})();
