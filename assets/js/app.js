const dados = {
  sets: [
    {
      id: 1,
      nome: "Prismatic Evolutions",
      ano: 2025,
      totalCartas: 180,
      descricao: "Set especial focado nas queridíssimas eeveelutions. Primeira expansão em inglês a trazer o padrão Master Ball Holo.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: true,
      imagemPrincipal: "https://images.pokemontcg.io/sv8pt5/logo.png"
    },
    {
      id: 2,
      nome: "Destined Rivals",
      ano: 2025,
      totalCartas: 244,
      descricao: "Expansão que celebra as duplas rivais icônicas da franquia Pokémon. Destaque para Team Rocket's Mewtwo ex, uma das cartas mais valiosas da era Scarlet & Violet.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: true,
      imagemPrincipal: "https://images.pokemontcg.io/sv10/logo.png"
    },
    {
      id: 3,
      nome: "Obsidian Flames",
      ano: 2023,
      totalCartas: 197,
      descricao: "Terceira expansão Scarlet & Violet, famosa pelo icônico Charizard ex Tera Dragon. O Charizard ex SIR tornou-se uma das cartas mais desejadas de todo o Pokemon TCG",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: false,
      imagemPrincipal: "https://images.pokemontcg.io/sv3/logo.png"
    },
    {
      id: 4,
      nome: "Stellar Crown",
      ano: 2024,
      totalCartas: 175,
      descricao: "Sétima expansão Scarlet & Violet, introduzindo os Stellar Tera Pokémon. Destaque para Terapagos ex e os belíssimos Special Illustration Rares da série.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: true,
      imagemPrincipal: "https://images.pokemontcg.io/sv7/logo.png"
    },
    {
      id: 5,
      nome: "Surging Sparks",
      ano: 2024,
      totalCartas: 252,
      descricao: "Uma das maiores expansões da era Scarlet & Violet, trazendo uma das cartas mais icônicas do Pikachu da história da franquia",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: true,
      imagemPrincipal: "https://images.pokemontcg.io/sv8/logo.png"
    },
    {
      id: 6,
      nome: "Journey Together",
      ano: 2025,
      totalCartas: 190,
      descricao: "Nona expansão Scarlet & Violet, celebrando a parceria entre treinadores e seus Pokémon's.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: false,
      imagemPrincipal: "https://images.pokemontcg.io/sv9/logo.png"
    },
    {
      id: 7,
      nome: "Pokémon 151",
      ano: 2023,
      totalCartas: 207,
      descricao: "Set especial celebrando os 151 Pokémon's de Kanto, trazendo diversar ilustrações raras dos precursores da franquia.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: true,
      imagemPrincipal: "https://images.pokemontcg.io/sv3pt5/logo.png"
    },
    {
      id: 8,
      nome: "Paldea Evolved",
      ano: 2023,
      totalCartas: 193,
      descricao: "Segunda expansão Scarlet & Violet, com estreia dos Pokémon's da região de Paldea.",
      serie: "Scarlet & Violet",
      idioma: "Inglês",
      editora: "The Pokémon Company",
      destaque: false,
      imagemPrincipal: "https://images.pokemontcg.io/sv2/logo.png"
    }
  ],

  cartas: [
    // ── Prismatic Evolutions (sv8pt5) ──────────────────────────
    { id: 1,  setId: 1, nome: "Kieran",      numero: "174/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/174.png", titulo: "Kieran — sv8pt5 174/191" },
    { id: 2,  setId: 1, nome: "Sylveon ex",      numero: "156/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/156.png", titulo: "Sylveon ex — sv8pt5 156/191" },
    { id: 3,  setId: 1, nome: "Espeon ex",       numero: "155/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/155.png", titulo: "Espeon ex — sv8pt5 155/191" },
    { id: 4,  setId: 1, nome: "Wellpring Mask Ogerpon ex",      numero: "152/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/152.png", titulo: "Wellpring Mask Ogerpon ex — sv8pt5 152/191" },
    { id: 5,  setId: 1, nome: "Iron Hands",      numero: "154/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/154.png", titulo: "Iron Hands — sv8pt5 154/191" },
    { id: 6,  setId: 1, nome: "Vaporeon ex",     numero: "150/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/150.png", titulo: "Vaporeon ex — sv8pt5 150/191" },
    { id: 7,  setId: 1, nome: "Hearthflame Mask Ogerpon ex",      numero: "148/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/148.png", titulo: "Hearthflame Mask Ogerpon ex — sv8pt5 148/191" },
    { id: 8,  setId: 1, nome: "Jolteon ex",      numero: "153/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/153.png", titulo: "Jolteon ex — sv8pt5 153/191" },
    { id: 9,  setId: 1, nome: "Roaring Moon ex", numero: "162/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/162.png", titulo: "Roaring Moon ex — sv8pt5 162/191" },
    { id: 10, setId: 1, nome: "Binding Mochi",  numero: "95/191",  raridade: "Master Ball Holo",          imagem: "https://images.pokemontcg.io/sv8pt5/95.png",  titulo: "Binding Mochi — sv8pt5 95/191" },
    { id: 11, setId: 1, nome: "Teal Mask Ogerpon ex",      numero: "145/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/145.png", titulo: "Teal Mask Ogerpon ex — sv8pt5 145/191" },
    { id: 12, setId: 1, nome: "Sandy Shocks ex",    numero: "159/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/159.png", titulo: "Sandy Shocks ex — sv8pt5 159/191" },
    { id: 13, setId: 1, nome: "Leafeon ex",        numero: "144/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/144.png", titulo: "Leafeon ex — sv8pt5 144/191" },
    { id: 14, setId: 1, nome: "Cornerstone Mask Ogerpon ex",    numero: "160/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/160.png", titulo: "Cornerstone Mask Ogerpon ex — sv8pt5 160/191" },
    { id: 15, setId: 1, nome: "Pecharunt ex",      numero: "163/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8pt5/163.png", titulo: "Pecharunt ex — sv8pt5 163/191" },

    // ── Destined Rivals (sv10) ─────────────────────────────────
    { id: 16, setId: 2, nome: "Team Rocket's Mewtwo ex", numero: "231/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/231.png", titulo: "Team Rocket's Mewtwo ex — sv10 231/182" },
    { id: 17, setId: 2, nome: "Cynthia's Garchomp ex",   numero: "232/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/232.png", titulo: "Cynthia's Garchomp ex — sv10 232/182" },
    { id: 18, setId: 2, nome: "Ethan's Ho-Oh ex",        numero: "230/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/230.png", titulo: "Ethan's Ho-Oh ex — sv10 230/182" },
    { id: 19, setId: 2, nome: "Team Rocket's Nidoking ex", numero: "233/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/233.png", titulo: "Team Rocket's Nidoking ex — sv10 233/182" },
    { id: 20, setId: 2, nome: "Misty's Psyduck",          numero: "193/182", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv10/193.png", titulo: "Misty's Psyduck — sv10 193/182" },
    { id: 21, setId: 2, nome: "Team Rocket's Moltres ex",      numero: "229/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/229.png", titulo: "Team Rocket's Moltres ex — sv10 229/182" },
    { id: 22, setId: 2, nome: "Team Rocket's Crobat ex",   numero: "234/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/234.png", titulo: "Team Rocket's Crobat ex — sv10 234/182" },
    { id: 23, setId: 2, nome: "Ethan's Typhlosion",       numero: "190/182", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv10/190.png", titulo: "Ethan's Typhlosion — sv10 190/182" },
    { id: 24, setId: 2, nome: "Ethan's Adventure", numero: "236/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/236.png", titulo: "Ethan's Adventure — sv10 236/182" },
    { id: 25, setId: 2, nome: "Team Rocket's Giovanni",   numero: "238/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/238.png", titulo: "Team Rocket's Giovanni — sv10 238/182" },
    { id: 26, setId: 2, nome: "Team Rocket's Mewtwo ex",        numero: "240/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/240.png", titulo: "Team Rocket's Mewtwo ex — sv10 240/182" },
    { id: 27, setId: 2, nome: "Electrike",           numero: "196/182", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv10/196.png", titulo: "Electrike — sv10 196/182" },
    { id: 28, setId: 2, nome: "Arven's Mabosstiff ex",     numero: "235/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/235.png", titulo: "Arven's Mabosstiff ex — sv10 235/182" },
    { id: 29, setId: 2, nome: "Cynthia's Garchomp ex",        numero: "241/182", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv10/241.png", titulo: "Cynthia's Garchomp ex — sv10 241/182" },
    { id: 30, setId: 2, nome: "Jamming Tower",        numero: "243/182", raridade: "Hyper Rare",                imagem: "https://images.pokemontcg.io/sv10/243.png", titulo: "Jamming Tower — sv10 243/182" },

    // ── Obsidian Flames (sv3) ──────────────────────────────────
    { id: 31, setId: 3, nome: "Charizard ex",    numero: "223/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/223.png", titulo: "Charizard ex — sv3 223/197" },
    { id: 32, setId: 3, nome: "Eiscue ex",       numero: "222/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/222.png", titulo: "Eiscue ex — sv3 222/197" },
    { id: 33, setId: 3, nome: "Revavroom ex",    numero: "224/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/224.png", titulo: "Revavroom ex — sv3 224/197" },
    { id: 34, setId: 3, nome: "Pidgeot ex",      numero: "225/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/225.png", titulo: "Pidgeot ex — sv3 225/197" },
    { id: 35, setId: 3, nome: "Geeta",           numero: "226/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/226.png", titulo: "Geeta — sv3 226/197" },
    { id: 36, setId: 3, nome: "Poppy",           numero: "227/197", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3/227.png", titulo: "Poppy — sv3 227/197" },
    { id: 37, setId: 3, nome: "Charizard ex",     numero: "228/197", raridade: "Hyper Rare",                imagem: "https://images.pokemontcg.io/sv3/228.png", titulo: "Charizard ex — sv3 228/197" },
    { id: 38, setId: 3, nome: "Charizard ex",     numero: "215/197", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3/215.png", titulo: "Charizard ex — sv3 215/197" },
    { id: 39, setId: 3, nome: "Tyranitar ex",     numero: "211/197", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3/211.png", titulo: "Tyranitar ex — sv3 211/197" },
    { id: 40, setId: 3, nome: "Vespiquen ex",     numero: "212/197", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3/212.png", titulo: "Vespiquen ex — sv3 212/197" },
    { id: 41, setId: 3, nome: "Glimmora ex",      numero: "213/197", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3/213.png", titulo: "Glimmora ex — sv3 213/197" },
    { id: 42, setId: 3, nome: "Pidgeot ex",       numero: "217/197", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3/217.png", titulo: "Pidgeot ex — sv3 217/197" },
    { id: 43, setId: 3, nome: "Ninetales",        numero: "199/197", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv3/199.png", titulo: "Ninetales — sv3 199/197" },
    { id: 44, setId: 3, nome: "Cleffa",           numero: "202/197", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv3/202.png", titulo: "Cleffa — sv3 202/197" },
    { id: 45, setId: 3, nome: "Scizor",           numero: "205/197", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv3/205.png", titulo: "Scizor — sv3 205/197" },

    // ── Stellar Crown (sv7) ───────────────────────────────────
    { id: 46, setId: 4, nome: "Orhworm ex",     numero: "162/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/162.png", titulo: "Orhworm ex — sv7 162/142" },
    { id: 47, setId: 4, nome: "Medicham ex",     numero: "161/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/161.png", titulo: "Medicham ex — sv7 161/142" },
    { id: 48, setId: 4, nome: "Lapras ex",     numero: "158/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/158.png", titulo: "Lapras ex — sv7 158/142" },
    { id: 49, setId: 4, nome: "Lacey",          numero: "166/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/166.png", titulo: "Lacey — sv7 166/142" },
    { id: 50, setId: 4, nome: "Hydrapple ex",            numero: "167/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/167.png", titulo: "Hydrapple ex — sv7 167/142" },
    { id: 51, setId: 4, nome: "Kofu",          numero: "165/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/165.png", titulo: "Kofu — sv7 165/142" },
    { id: 52, setId: 4, nome: "Cinderace ex",     numero: "157/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/157.png", titulo: "Cinderace ex — sv7 157/142" },
    { id: 53, setId: 4, nome: "Archaludon",        numero: "155/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/155.png", titulo: "Archaludon — sv7 155/142" },
    { id: 54, setId: 4, nome: "Bulbasaur",      numero: "143/142", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv7/143.png", titulo: "Bulbasaur — sv7 143/142" },
    { id: 55, setId: 4, nome: "Ledian",      numero: "144/142", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv7/144.png", titulo: "Ledian — sv7 144/142" },
    { id: 56, setId: 4, nome: "Hydrapple ex",        numero: "156/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/156.png", titulo: "Hydrapple ex — sv7 156/142" },
    { id: 57, setId: 4, nome: "Galvantula ex",       numero: "159/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/159.png", titulo: "Galvantula ex — sv7 159/142" },
    { id: 58, setId: 4, nome: "Dachsbun ex",      numero: "160/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/160.png", titulo: "Dachsbun ex — sv7 160/142" },
    { id: 59, setId: 4, nome: "Briar",           numero: "163/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/163.png", titulo: "Briar — sv7 163/142" },
    { id: 60, setId: 4, nome: "Crispin",numero: "164/142", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv7/164.png", titulo: "Crispin — sv7 164/142" },

    // ── Surging Sparks (sv8) ───────────────────────────────────
    { id: 61, setId: 5, nome: "Pikachu ex",       numero: "238/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/238.png", titulo: "Pikachu ex — sv8 238/191" },
    { id: 62, setId: 5, nome: "Hydreigon ex",      numero: "240/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/240.png", titulo: "Hydreigon ex — sv8 240/191" },
    { id: 63, setId: 5, nome: "Milotic ex",     numero: "237/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/237.png", titulo: "Milotic ex — sv8 237/191" },
    { id: 64, setId: 5, nome: "Surfer",       numero: "235/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/235.png", titulo: "Surfer — sv8 235/191" },
    { id: 65, setId: 5, nome: "Pikachu ex", numero: "219/191", raridade: "Ultra Rare",               imagem: "https://images.pokemontcg.io/sv8/219.png", titulo: "Pikachu ex — sv8 219/191" },
    { id: 66, setId: 5, nome: "Pikachu ex", numero: "247/191", raridade: "Hyper Rare",                imagem: "https://images.pokemontcg.io/sv8/247.png", titulo: "Pikachu ex — sv8 247/191" },
    { id: 67, setId: 5, nome: "Latias ex",  numero: "239/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/239.png", titulo: "Latias ex — sv8 239/191" },
    { id: 68, setId: 5, nome: "Lisia's Appeal",          numero: "234/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/234.png", titulo: "Lisia's Appeal — sv8 234/191" },
    { id: 69, setId: 5, nome: "Durant ex",  numero: "236/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/236.png", titulo: "Durant ex — sv8 236/191" },
    { id: 70, setId: 5, nome: "Alolan Exeggutor ex",  numero: "242/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/242.png", titulo: "Alolan Exeggutor ex — sv8 242/191" },
    { id: 71, setId: 5, nome: "Latios",          numero: "203/191", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv8/203.png", titulo: "Latios — sv8 203/191" },
    { id: 72, setId: 5, nome: "Archaludon ex",  numero: "241/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/241.png", titulo: "Archaludon ex — sv8 241/191" },
    { id: 73, setId: 5, nome: "Jasmine's Gaze",        numero: "233/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/233.png", titulo: "Jasmine's Gaze — sv8 233/191" },
    { id: 74, setId: 5, nome: "Drayton",         numero: "232/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/232.png", titulo: "Drayton — sv8 232/191" },
    { id: 75, setId: 5, nome: "Drasna",          numero: "231/191", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv8/231.png", titulo: "Drasna — sv8 231/191" },

    // ── Journey Together (sv9) ─────────────────────────────────
    { id: 76, setId: 6, nome: "Lillie's Clefairy ex", numero: "184/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/184.png", titulo: "Lillie's Clefairy ex — sv9 184/159" },
    { id: 77, setId: 6, nome: "N's Zoroark ex",       numero: "189/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/189.png", titulo: "N's Zoroark ex — sv9 189/159" },
    { id: 78, setId: 6, nome: "Salamence ex",         numero: "187/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/187.png", titulo: "Salamence ex — sv9 187/159" },
    { id: 79, setId: 6, nome: "Iono's Bellibolt ex",   numero: "188/159", raridade: "Hyper Rare",                imagem: "https://images.pokemontcg.io/sv9/188.png", titulo: "Iono's Bellibolt ex — sv9 188/159" },
    { id: 80, setId: 6, nome: "Hop's Zacian ex",      numero: "186/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/186.png", titulo: "Hop's Zacian ex — sv9 186/159" },
    { id: 81, setId: 6, nome: "Iono's Bellibolt ex",  numero: "183/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/183.png", titulo: "Iono's Bellibolt ex — sv9 183/159" },
    { id: 82, setId: 6, nome: "Spiky Energy",        numero: "190/159", raridade: "Hyper Rare",                imagem: "https://images.pokemontcg.io/sv9/190.png", titulo: "Spiky Energy — sv9 190/159" },
    { id: 83, setId: 6, nome: "Volcanion ex",         numero: "182/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/182.png", titulo: "Volcanion ex — sv9 182/159" },
    { id: 84, setId: 6, nome: "Articuno",              numero: "161/159", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv9/161.png", titulo: "Articuno — sv9 161/159" },
    { id: 85, setId: 6, nome: "Salamence ex",          numero: "177/159", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv9/177.png", titulo: "Salamence ex — sv9 177/159" },
    { id: 86, setId: 6, nome: "Iri's Fighting Spirit",  numero: "180/159", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv9/180.png", titulo: "Iri's Fighting Spirit — sv9 180/159" },
    { id: 87, setId: 6, nome: "N's Reshiram",         numero: "167/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/167.png", titulo: "N's Reshiram — sv9 167/159" },
    { id: 88, setId: 6, nome: "Wailord",               numero: "162/159", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv9/162.png", titulo: "Wailord — sv9 162/159" },
    { id: 89, setId: 6, nome: "Mamoswine ex",         numero: "174/159", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv9/174.png", titulo: "Mamoswine ex — sv9 174/159" },
    { id: 90, setId: 6, nome: "Volcanion ex",          numero: "171/159", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv9/171.png", titulo: "Volcanion ex — sv9 171/159" },

    // ── Pokémon 151 (sv3pt5) — números corrigidos ──────────────
    { id: 91,  setId: 7, nome: "Mew ex",              numero: "205/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/205.png", titulo: "Mew ex — sv3pt5 205/165" },
    { id: 92,  setId: 7, nome: "Charizard ex",        numero: "199/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/199.png", titulo: "Charizard ex — sv3pt5 199/165" },
    { id: 93,  setId: 7, nome: "Blastoise ex",         numero: "200/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/200.png", titulo: "Blastoise ex — sv3pt5 200/165" },
    { id: 94,  setId: 7, nome: "Giovanni's Charisma",         numero: "204/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/204.png", titulo: "Giovanni's Charisma — sv3pt5 204/165" },
    { id: 95,  setId: 7, nome: "Zapdos ex",        numero: "202/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/202.png", titulo: "Zapdos ex — sv3pt5 202/165" },
    { id: 96,  setId: 7, nome: "Giovanni's Charisma",           numero: "197/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/197.png", titulo: "Giovanni's Charisma — sv3pt5 197/165" },
    { id: 97,  setId: 7, nome: "Alakazam ex",           numero: "201/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/201.png", titulo: "Alakazam ex — sv3pt5 201/165" },
    { id: 98,  setId: 7, nome: "Erika's Invitation",  numero: "203/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/203.png", titulo: "Erika's Invitation — sv3pt5 203/165" },
    { id: 99,  setId: 7, nome: "Erika's Invitation", numero: "196/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/196.png", titulo: "Erika's Invitation — sv3pt5 196/165" },
    { id: 100, setId: 7, nome: "Venusaur ex",         numero: "198/165", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv3pt5/198.png", titulo: "Venusaur ex — sv3pt5 198/165" },
    { id: 101, setId: 7, nome: "Venusaur ex",         numero: "182/165", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3pt5/182.png", titulo: "Venusaur ex — sv3pt5 182/165" },
    { id: 102, setId: 7, nome: "Mew ex",               numero: "193/165", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3pt5/193.png", titulo: "Mew ex — sv3pt5 193/165" },
    { id: 103, setId: 7, nome: "Charizard ex",          numero: "183/165", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3pt5/183.png", titulo: "Charizard ex — sv3pt5 183/165" },
    { id: 104, setId: 7, nome: "Blastoise ex",         numero: "184/165", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3pt5/184.png", titulo: "Blastoise ex — sv3pt5 184/165" },
    { id: 105, setId: 7, nome: "Arbok ex",          numero: "185/165", raridade: "Ultra Rare",                imagem: "https://images.pokemontcg.io/sv3pt5/185.png", titulo: "Arbok ex — sv3pt5 185/165" },

    // ── Paldea Evolved (sv2) ───────────────────────────────────
    { id: 106, setId: 8, nome: "Meowscarada ex", numero: "256/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/256.png", titulo: "Meowscarada ex — sv2 256/193" },
    { id: 107, setId: 8, nome: "Wo-Chien ex",    numero: "257/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/257.png", titulo: "Wo-Chien ex — sv2 257/193" },
    { id: 108, setId: 8, nome: "Skeledirge ex",  numero: "258/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/258.png", titulo: "Skeledirge ex — sv2 258/193" },
    { id: 109, setId: 8, nome: "Chi-Yu ex",      numero: "259/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/259.png", titulo: "Chi-Yu ex — sv2 259/193" },
    { id: 110, setId: 8, nome: "Quaquaval ex",   numero: "260/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/260.png", titulo: "Quaquaval ex — sv2 260/193" },
    { id: 111, setId: 8, nome: "Chien-Pao ex",   numero: "261/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/261.png", titulo: "Chien-Pao ex — sv2 261/193" },
    { id: 112, setId: 8, nome: "Tinkaton ex",    numero: "262/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/262.png", titulo: "Tinkaton ex — sv2 262/193" },
    { id: 113, setId: 8, nome: "Ting-Lu ex",     numero: "263/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/263.png", titulo: "Ting-Lu ex — sv2 263/193" },
    { id: 114, setId: 8, nome: "Squawkabilly ex",   numero: "264/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/264.png", titulo: "Squawkabilly ex — sv2 264/193" },
    { id: 115, setId: 8, nome: "Dendra",         numero: "266/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/266.png", titulo: "Dendra — sv2 266/193" },
    { id: 116, setId: 8, nome: "Iono",           numero: "269/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/269.png", titulo: "Iono — sv2 269/193" },
    { id: 117, setId: 8, nome: "Giacomo",         numero: "267/193", raridade: "Special Illustration Rare", imagem: "https://images.pokemontcg.io/sv2/267.png", titulo: "Giacomo — sv2 267/193" },
    { id: 118, setId: 8, nome: "Magikarp",        numero: "203/193", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv2/203.png", titulo: "Magikarp — sv2 203/193" },
    { id: 119, setId: 8, nome: "Tyranitar",       numero: "222/193", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv2/222.png", titulo: "Tyranitar — sv2 222/193" },
    { id: 120, setId: 8, nome: "Flamigo",         numero: "227/193", raridade: "Illustration Rare",         imagem: "https://images.pokemontcg.io/sv2/227.png", titulo: "Flamigo — sv2 227/193" }
  ]
};

function getCartasDoSet(setId) {
  return dados.cartas.filter(c => c.setId === setId);
}

function getColetadasDoSet(setId) {
  const chave = `coletadas_set_${setId}`;
  try {
    return JSON.parse(localStorage.getItem(chave)) || [];
  } catch { return []; }
}

function salvarColetadas(setId, lista) {
  const chave = `coletadas_set_${setId}`;
  try { localStorage.setItem(chave, JSON.stringify(lista)); } catch {}
}

function calcularProgresso(setId) {
  const cartas = getCartasDoSet(setId);
  const coletadas = getColetadasDoSet(setId);
  const total = cartas.length;
  const coletadasCount = coletadas.length;
  const pct = total === 0 ? 0 : Math.round((coletadasCount / total) * 100);
  return { total, coletadasCount, pct };
}

function montarSlider() {
  const setsDestaque = dados.sets.filter(s => s.destaque);
  const inner = document.getElementById('carouselInner');
  const indicators = document.getElementById('carouselIndicators');
  if (!inner) return;

  setsDestaque.forEach((set, idx) => {
    const { total, coletadasCount, pct } = calcularProgresso(set.id);
    const activeClass = idx === 0 ? 'active' : '';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.bsTarget = '#setsCarousel';
    btn.dataset.bsSlideTo = idx;
    btn.setAttribute('aria-label', `Slide ${idx + 1}`);
    if (idx === 0) { btn.classList.add('active'); btn.setAttribute('aria-current', 'true'); }
    indicators.appendChild(btn);

    const item = document.createElement('div');
    item.className = `carousel-item ${activeClass}`;
    item.innerHTML = `
      <a href="detalhes.html?id=${set.id}" class="d-block text-decoration-none">
        <img src="${set.imagemPrincipal}" class="d-block w-100 carousel-img" alt="${set.nome}" />
        <div class="carousel-caption-custom">
          <h3 class="carousel-set-nome">${set.nome}</h3>
          <p class="carousel-set-desc">${set.descricao}</p>
          <div class="carousel-progress">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="carousel-progress-label"><i class="bi bi-check2-circle"></i> ${coletadasCount}/${total} cartas · ${pct}%</span>
          </div>
        </div>
      </a>
    `;
    inner.appendChild(item);
  });
}

function montarCards() {
  const container = document.getElementById('setsGrid');
  if (!container) return;

  dados.sets.forEach(set => {
    const { total, coletadasCount, pct } = calcularProgresso(set.id);
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';
    col.innerHTML = `
      <a href="detalhes.html?id=${set.id}" class="text-decoration-none">
        <article class="set-card h-100">
          <div class="set-card-img-wrap">
            <img src="${set.imagemPrincipal}" alt="${set.nome}" class="set-card-img" />
          </div>
          <div class="set-card-body">
            <h3 class="set-card-nome">${set.nome}</h3>
            <p class="set-card-meta"><i class="bi bi-stack"></i> ${total} cartas · <i class="bi bi-calendar3"></i> ${set.ano} · ${set.serie}</p>
            <p class="set-card-desc">${set.descricao}</p>
            <div class="progress-bar-track mt-3">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <span class="progress-label"><i class="bi bi-check2-circle"></i> ${coletadasCount}/${total} cartas coletadas</span>
          </div>
        </article>
      </a>
    `;
    container.appendChild(col);
  });
}

function montarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const set = dados.sets.find(s => s.id === id);

  if (!set) {
    document.getElementById('detalheConteudo').innerHTML =
      '<p class="text-center text-danger p-5">Set não encontrado.</p>';
    return;
  }

  const cartas = getCartasDoSet(set.id);
  let coletadas = getColetadasDoSet(set.id);
  const total = cartas.length;
  const pct = total === 0 ? 0 : Math.round((coletadas.length / total) * 100);

  document.title = `MyCards — ${set.nome}`;

  document.getElementById('detalheConteudo').innerHTML = `
    <div class="row g-4 align-items-start">
      <div class="col-12 col-md-4 text-center">
        <img src="${set.imagemPrincipal}" alt="${set.nome}" class="detalhe-img" />
      </div>
      <div class="col-12 col-md-8">
        <h1 class="detalhe-nome">${set.nome}</h1>
        <p class="detalhe-desc">${set.descricao}</p>
        <ul class="detalhe-info-list">
          <li><span class="info-label"><i class="bi bi-calendar3"></i> Ano de lançamento</span><span class="info-valor">${set.ano}</span></li>
          <li><span class="info-label"><i class="bi bi-grid-3x3-gap"></i> Cartas no site</span><span class="info-valor">${total}</span></li>
          <li><span class="info-label"><i class="bi bi-globe2"></i> Idioma</span><span class="info-valor">${set.idioma}</span></li>
          <li><span class="info-label"><i class="bi bi-collection"></i> Série</span><span class="info-valor">${set.serie}</span></li>
          <li><span class="info-label"><i class="bi bi-building"></i> Editora</span><span class="info-valor">${set.editora}</span></li>
        </ul>
        <div class="detalhe-progress-wrap">
          <div class="detalhe-progress-label">
            <span><i class="bi bi-bar-chart-fill"></i> Progresso da coleção</span>
            <span id="pctLabel">${pct}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" id="progressFill" style="width: ${pct}%"></div>
          </div>
          <span class="progress-label" id="progressLabel">${coletadas.length} de ${total} cartas coletadas</span>
        </div>
      </div>
    </div>
  `;

  const galeria = document.getElementById('cartasGaleria');
  if (!galeria) return;

  function renderGaleria() {
    coletadas = getColetadasDoSet(set.id);
    galeria.innerHTML = '';

    cartas.forEach(carta => {
      const temCarta = coletadas.includes(carta.id);
      const col = document.createElement('div');
      col.className = 'col-6 col-sm-4 col-md-3 col-lg-2';
      col.innerHTML = `
        <div class="carta-thumb ${temCarta ? 'coletada' : 'nao-coletada'}" data-id="${carta.id}">
          <div class="carta-img-wrap">
            <img src="${carta.imagem}" alt="${carta.titulo}" title="${carta.titulo}" class="carta-img" />
            <div class="carta-overlay">
              <span class="carta-status-icon"><i class="bi ${temCarta ? 'bi-check-circle-fill' : 'bi-plus-circle'}"></i></span>
            </div>
          </div>
          <p class="carta-nome">${carta.nome}</p>
          <span class="carta-numero">#${carta.numero}</span>
          <span class="carta-raridade"><i class="bi bi-gem"></i> ${carta.raridade}</span>
          <button class="btn-coletar ${temCarta ? 'btn-remover' : 'btn-adicionar'}">
            ${temCarta ? '<i class="bi bi-x-lg"></i> Remover' : '<i class="bi bi-plus-lg"></i> Tenho esta!'}
          </button>
        </div>
      `;
      galeria.appendChild(col);
    });

    galeria.querySelectorAll('.carta-thumb').forEach(thumb => {
      thumb.querySelector('button').addEventListener('click', () => {
        const cartaId = parseInt(thumb.dataset.id);
        let lista = getColetadasDoSet(set.id);

        if (lista.includes(cartaId)) {
          lista = lista.filter(i => i !== cartaId);
        } else {
          lista.push(cartaId);
        }

        salvarColetadas(set.id, lista);
        atualizarProgresso(set.id, cartas.length);
        renderGaleria();
      });
    });
  }

  function atualizarProgresso(setId, total) {
    const col = getColetadasDoSet(setId);
    const p = total === 0 ? 0 : Math.round((col.length / total) * 100);
    document.getElementById('pctLabel').textContent = `${p}%`;
    document.getElementById('progressFill').style.width = `${p}%`;
    document.getElementById('progressLabel').textContent = `${col.length} de ${total} cartas coletadas`;
  }

  renderGaleria();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carouselInner')) {
    montarSlider();
    montarCards();
  }
  if (document.getElementById('detalheConteudo')) {
    montarDetalhes();
  }
});