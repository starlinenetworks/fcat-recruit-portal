export interface State {
  id: string;
  name: string;
}

export interface LGA {
  id: string;
  name: string;
  state_id: string;
}

export const states: State[] = [
  { id: "1", name: "Abia" },
  { id: "2", name: "Adamawa" },
  { id: "3", name: "Akwa Ibom" },
  { id: "4", name: "Anambra" },
  { id: "5", name: "Bauchi" },
  { id: "6", name: "Bayelsa" },
  { id: "7", name: "Benue" },
  { id: "8", name: "Borno" },
  { id: "9", name: "Cross River" },
  { id: "10", name: "Delta" },
  { id: "11", name: "Ebonyi" },
  { id: "12", name: "Edo" },
  { id: "13", name: "Ekiti" },
  { id: "14", name: "Enugu" },
  { id: "15", name: "Federal Capital Territory" },
  { id: "16", name: "Gombe" },
  { id: "17", name: "Imo" },
  { id: "18", name: "Jigawa" },
  { id: "19", name: "Kaduna" },
  { id: "20", name: "Kano" },
  { id: "21", name: "Katsina" },
  { id: "22", name: "Kebbi" },
  { id: "23", name: "Kogi" },
  { id: "24", name: "Kwara" },
  { id: "25", name: "Lagos" },
  { id: "26", name: "Nasarawa" },
  { id: "27", name: "Niger" },
  { id: "28", name: "Ogun" },
  { id: "29", name: "Ondo" },
  { id: "30", name: "Osun" },
  { id: "31", name: "Oyo" },
  { id: "32", name: "Plateau" },
  { id: "33", name: "Rivers" },
  { id: "34", name: "Sokoto" },
  { id: "35", name: "Taraba" },
  { id: "36", name: "Yobe" },
  { id: "37", name: "Zamfara" }
];

export const lgas: LGA[] = [
  // Abia (17 LGAs)
  { id: "1", name: "Aba North", state_id: "1" },
  { id: "2", name: "Aba South", state_id: "1" },
  { id: "3", name: "Arochukwu", state_id: "1" },
  { id: "4", name: "Bende", state_id: "1" },
  { id: "5", name: "Ikwuano", state_id: "1" },
  { id: "6", name: "Isiala Ngwa North", state_id: "1" },
  { id: "7", name: "Isiala Ngwa South", state_id: "1" },
  { id: "8", name: "Isuikwuato", state_id: "1" },
  { id: "9", name: "Obi Ngwa", state_id: "1" },
  { id: "10", name: "Ohafia", state_id: "1" },
  { id: "11", name: "Osisioma", state_id: "1" },
  { id: "12", name: "Ugwunagbo", state_id: "1" },
  { id: "13", name: "Ukwa East", state_id: "1" },
  { id: "14", name: "Ukwa West", state_id: "1" },
  { id: "15", name: "Umuahia North", state_id: "1" },
  { id: "16", name: "Umuahia South", state_id: "1" },
  { id: "17", name: "Umu Nneochi", state_id: "1" },

  // Adamawa (21 LGAs)
  { id: "18", name: "Demsa", state_id: "2" },
  { id: "19", name: "Fufure", state_id: "2" },
  { id: "20", name: "Ganye", state_id: "2" },
  { id: "21", name: "Gayuk", state_id: "2" },
  { id: "22", name: "Gombi", state_id: "2" },
  { id: "23", name: "Grie", state_id: "2" },
  { id: "24", name: "Hong", state_id: "2" },
  { id: "25", name: "Jada", state_id: "2" },
  { id: "26", name: "Larmurde", state_id: "2" },
  { id: "27", name: "Madagali", state_id: "2" },
  { id: "28", name: "Maiha", state_id: "2" },
  { id: "29", name: "Mayo Belwa", state_id: "2" },
  { id: "30", name: "Michika", state_id: "2" },
  { id: "31", name: "Mubi North", state_id: "2" },
  { id: "32", name: "Mubi South", state_id: "2" },
  { id: "33", name: "Numan", state_id: "2" },
  { id: "34", name: "Shelleng", state_id: "2" },
  { id: "35", name: "Song", state_id: "2" },
  { id: "36", name: "Toungo", state_id: "2" },
  { id: "37", name: "Yola North", state_id: "2" },
  { id: "38", name: "Yola South", state_id: "2" },

  // Akwa Ibom (31 LGAs)
  { id: "39", name: "Abak", state_id: "3" },
  { id: "40", name: "Eastern Obolo", state_id: "3" },
  { id: "41", name: "Eket", state_id: "3" },
  { id: "42", name: "Esit Eket", state_id: "3" },
  { id: "43", name: "Essien Udim", state_id: "3" },
  { id: "44", name: "Etim Ekpo", state_id: "3" },
  { id: "45", name: "Etinan", state_id: "3" },
  { id: "46", name: "Ibeno", state_id: "3" },
  { id: "47", name: "Ibesikpo Asutan", state_id: "3" },
  { id: "48", name: "Ibiono-Ibom", state_id: "3" },
  { id: "49", name: "Ika", state_id: "3" },
  { id: "50", name: "Ikono", state_id: "3" },
  { id: "51", name: "Ikot Abasi", state_id: "3" },
  { id: "52", name: "Ikot Ekpene", state_id: "3" },
  { id: "53", name: "Ini", state_id: "3" },
  { id: "54", name: "Itu", state_id: "3" },
  { id: "55", name: "Mbo", state_id: "3" },
  { id: "56", name: "Mkpat-Enin", state_id: "3" },
  { id: "57", name: "Nsit-Atai", state_id: "3" },
  { id: "58", name: "Nsit-Ibom", state_id: "3" },
  { id: "59", name: "Nsit-Ubium", state_id: "3" },
  { id: "60", name: "Obot Akara", state_id: "3" },
  { id: "61", name: "Okobo", state_id: "3" },
  { id: "62", name: "Onna", state_id: "3" },
  { id: "63", name: "Oron", state_id: "3" },
  { id: "64", name: "Oruk Anam", state_id: "3" },
  { id: "65", name: "Udung-Uko", state_id: "3" },
  { id: "66", name: "Ukanafun", state_id: "3" },
  { id: "67", name: "Uruan", state_id: "3" },
  { id: "68", name: "Urue-Offong/Oruko", state_id: "3" },
  { id: "69", name: "Uyo", state_id: "3" },

  // Anambra (21 LGAs)
  { id: "70", name: "Aguata", state_id: "4" },
  { id: "71", name: "Anambra East", state_id: "4" },
  { id: "72", name: "Anambra West", state_id: "4" },
  { id: "73", name: "Anaocha", state_id: "4" },
  { id: "74", name: "Awka North", state_id: "4" },
  { id: "75", name: "Awka South", state_id: "4" },
  { id: "76", name: "Ayamelum", state_id: "4" },
  { id: "77", name: "Dunukofia", state_id: "4" },
  { id: "78", name: "Ekwusigo", state_id: "4" },
  { id: "79", name: "Idemili North", state_id: "4" },
  { id: "80", name: "Idemili South", state_id: "4" },
  { id: "81", name: "Ihiala", state_id: "4" },
  { id: "82", name: "Njikoka", state_id: "4" },
  { id: "83", name: "Nnewi North", state_id: "4" },
  { id: "84", name: "Nnewi South", state_id: "4" },
  { id: "85", name: "Ogbaru", state_id: "4" },
  { id: "86", name: "Onitsha North", state_id: "4" },
  { id: "87", name: "Onitsha South", state_id: "4" },
  { id: "88", name: "Orumba North", state_id: "4" },
  { id: "89", name: "Orumba South", state_id: "4" },
  { id: "90", name: "Oyi", state_id: "4" },

  // Bauchi (20 LGAs)
  { id: "91", name: "Alkaleri", state_id: "5" },
  { id: "92", name: "Bauchi", state_id: "5" },
  { id: "93", name: "Bogoro", state_id: "5" },
  { id: "94", name: "Damban", state_id: "5" },
  { id: "95", name: "Darazo", state_id: "5" },
  { id: "96", name: "Dass", state_id: "5" },
  { id: "97", name: "Gamawa", state_id: "5" },
  { id: "98", name: "Ganjuwa", state_id: "5" },
  { id: "99", name: "Giade", state_id: "5" },
  { id: "100", name: "Itas/Gadau", state_id: "5" },
  { id: "101", name: "Jama'are", state_id: "5" },
  { id: "102", name: "Katagum", state_id: "5" },
  { id: "103", name: "Kirfi", state_id: "5" },
  { id: "104", name: "Misau", state_id: "5" },
  { id: "105", name: "Ningi", state_id: "5" },
  { id: "106", name: "Shira", state_id: "5" },
  { id: "107", name: "Tafawa Balewa", state_id: "5" },
  { id: "108", name: "Toro", state_id: "5" },
  { id: "109", name: "Warji", state_id: "5" },
  { id: "110", name: "Zaki", state_id: "5" },

  // Bayelsa (8 LGAs)
  { id: "111", name: "Brass", state_id: "6" },
  { id: "112", name: "Ekeremor", state_id: "6" },
  { id: "113", name: "Kolokuma/Opokuma", state_id: "6" },
  { id: "114", name: "Nembe", state_id: "6" },
  { id: "115", name: "Ogbia", state_id: "6" },
  { id: "116", name: "Sagbama", state_id: "6" },
  { id: "117", name: "Southern Ijaw", state_id: "6" },
  { id: "118", name: "Yenagoa", state_id: "6" },

  // Lagos (20 LGAs) - Just adding the most important ones for now
  { id: "506", name: "Agege", state_id: "25" },
  { id: "507", name: "Ajeromi-Ifelodun", state_id: "25" },
  { id: "508", name: "Alimosho", state_id: "25" },
  { id: "509", name: "Amuwo-Odofin", state_id: "25" },
  { id: "510", name: "Apapa", state_id: "25" },
  { id: "511", name: "Badagry", state_id: "25" },
  { id: "512", name: "Epe", state_id: "25" },
  { id: "513", name: "Eti-Osa", state_id: "25" },
  { id: "514", name: "Ibeju-Lekki", state_id: "25" },
  { id: "515", name: "Ifako-Ijaiye", state_id: "25" },
  { id: "516", name: "Ikeja", state_id: "25" },
  { id: "517", name: "Ikorodu", state_id: "25" },
  { id: "518", name: "Kosofe", state_id: "25" },
  { id: "519", name: "Lagos Island", state_id: "25" },
  { id: "520", name: "Lagos Mainland", state_id: "25" },
  { id: "521", name: "Mushin", state_id: "25" },
  { id: "522", name: "Ojo", state_id: "25" },
  { id: "523", name: "Oshodi-Isolo", state_id: "25" },
  { id: "524", name: "Shomolu", state_id: "25" },
  { id: "525", name: "Surulere", state_id: "25" },

  // Adding basic LGAs for remaining states to fix empty dropdowns
  // Benue
  { id: "119", name: "Makurdi", state_id: "7" },
  { id: "120", name: "Gboko", state_id: "7" },
  { id: "121", name: "Otukpo", state_id: "7" },

  // Borno
  { id: "162", name: "Maiduguri", state_id: "8" },
  { id: "144", name: "Bama", state_id: "8" },

  // Cross River
  { id: "176", name: "Calabar Municipal", state_id: "9" },
  { id: "177", name: "Calabar South", state_id: "9" },

  // Delta
  { id: "209", name: "Warri North", state_id: "10" },
  { id: "210", name: "Warri South", state_id: "10" },
  { id: "203", name: "Sapele", state_id: "10" },

  // Ebonyi
  { id: "212", name: "Abakaliki", state_id: "11" },
  { id: "213", name: "Afikpo North", state_id: "11" },

  // Edo
  { id: "236", name: "Oredo", state_id: "12" },
  { id: "226", name: "Egor", state_id: "12" },

  // Ekiti
  { id: "243", name: "Ado-Ekiti", state_id: "13" },
  { id: "251", name: "Ijero", state_id: "13" },

  // Enugu
  { id: "261", name: "Enugu East", state_id: "14" },
  { id: "262", name: "Enugu North", state_id: "14" },
  { id: "263", name: "Enugu South", state_id: "14" },

  // FCT
  { id: "277", name: "Bwari", state_id: "15" },
  { id: "278", name: "Gwagwalada", state_id: "15" },
  { id: "280", name: "Municipal Area Council", state_id: "15" },

  // Gombe
  { id: "287", name: "Gombe", state_id: "16" },
  { id: "284", name: "Billiri", state_id: "16" },

  // Imo
  { id: "316", name: "Owerri Municipal", state_id: "17" },
  { id: "317", name: "Owerri North", state_id: "17" },
  { id: "311", name: "Okigwe", state_id: "17" },

  // Jigawa
  { id: "325", name: "Dutse", state_id: "18" },
  { id: "332", name: "Hadejia", state_id: "18" },

  // Kaduna
  { id: "355", name: "Kaduna North", state_id: "19" },
  { id: "356", name: "Kaduna South", state_id: "19" },
  { id: "369", name: "Zaria", state_id: "19" },

  // Kano
  { id: "390", name: "Kano Municipal", state_id: "20" },
  { id: "387", name: "Gwale", state_id: "20" },
  { id: "381", name: "Fagge", state_id: "20" },

  // Katsina
  { id: "434", name: "Katsina", state_id: "21" },
  { id: "423", name: "Daura", state_id: "21" },
  { id: "427", name: "Funtua", state_id: "21" },

  // Kebbi
  { id: "453", name: "Birnin Kebbi", state_id: "22" },
  { id: "450", name: "Argungu", state_id: "22" },

  // Kogi
  { id: "480", name: "Lokoja", state_id: "23" },
  { id: "485", name: "Okene", state_id: "23" },

  // Kwara
  { id: "495", name: "Ilorin East", state_id: "24" },
  { id: "496", name: "Ilorin South", state_id: "24" },
  { id: "497", name: "Ilorin West", state_id: "24" },

  // Nasarawa
  { id: "533", name: "Lafia", state_id: "26" },
  { id: "531", name: "Keffi", state_id: "26" },

  // Niger
  { id: "541", name: "Bida", state_id: "27" },
  { id: "555", name: "Mokwa", state_id: "27" },
  { id: "561", name: "Suleja", state_id: "27" },

  // Ogun
  { id: "564", name: "Abeokuta North", state_id: "28" },
  { id: "565", name: "Abeokuta South", state_id: "28" },
  { id: "566", name: "Ado-Odo/Ota", state_id: "28" },

  // Ondo
  { id: "589", name: "Akure South", state_id: "29" },
  { id: "588", name: "Akure North", state_id: "29" },
  { id: "601", name: "Owo", state_id: "29" },

  // Osun
  { id: "631", name: "Osogbo", state_id: "30" },
  { id: "624", name: "Iwo", state_id: "30" },
  { id: "612", name: "Ife Central", state_id: "30" },

  // Oyo
  { id: "637", name: "Ibadan North", state_id: "31" },
  { id: "638", name: "Ibadan North-East", state_id: "31" },
  { id: "639", name: "Ibadan North-West", state_id: "31" },
  { id: "660", name: "Oyo", state_id: "31" },

  // Plateau
  { id: "668", name: "Jos North", state_id: "32" },
  { id: "669", name: "Jos South", state_id: "32" },
  { id: "667", name: "Jos East", state_id: "32" },

  // Rivers
  { id: "702", name: "Port Harcourt", state_id: "33" },
  { id: "696", name: "Obio-Akpor", state_id: "33" },
  { id: "690", name: "Eleme", state_id: "33" },

  // Sokoto
  { id: "720", name: "Sokoto North", state_id: "34" },
  { id: "721", name: "Sokoto South", state_id: "34" },

  // Taraba
  { id: "734", name: "Jalingo", state_id: "35" },
  { id: "741", name: "Wukari", state_id: "35" },

  // Yobe
  { id: "746", name: "Damaturu", state_id: "36" },
  { id: "757", name: "Potiskum", state_id: "36" },

  // Zamfara
  { id: "767", name: "Gusau", state_id: "37" },
  { id: "768", name: "Kaura Namoda", state_id: "37" }
];

export const getLgasByStateId = (stateId: string): LGA[] => {
  return lgas.filter(lga => lga.state_id === stateId);
};
