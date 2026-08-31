const missionData = {
  topFighter: [
    {
      rarity: "エリート",
      mission: "500ポイント以上のパックを3回購入",
      publicPoint: 345,
      personalPoint: 415,
      categories: ["課金"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "500ポイント以上のパックを5回購入",
      publicPoint: 515,
      personalPoint: 1030,
      categories: ["課金"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "1000ポイント以上のパックを4回購入",
      publicPoint: 685,
      personalPoint: 1370,
      categories: ["課金"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "2000ポイント以上のパックを2回購入",
      publicPoint: 740,
      personalPoint: 1480,
      categories: ["課金"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "ジェムを10,000個消費",
      publicPoint: 325,
      personalPoint: 390,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "ジェムを50,000個消費",
      publicPoint: 490,
      personalPoint: 980,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "スタミナを6000消費",
      publicPoint: 110,
      personalPoint: null,
      categories: ["スタミナ"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "スタミナを12000消費",
      publicPoint: 170,
      personalPoint: 205,
      categories: ["スタミナ"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "レーダー基地イベント18回実施",
      publicPoint: 135,
      personalPoint: null,
      categories: ["スタミナ"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "レーダー基地イベント24回実施",
      publicPoint: 205,
      personalPoint: 250,
      categories: ["スタミナ"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "T4以上の兵士、29,000隊回復",
      publicPoint: 165,
      personalPoint: null,
      categories: ["戦闘"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士、100,000隊回復",
      publicPoint: 250,
      personalPoint: 300,
      categories: ["戦闘"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "T4以上の兵士、216,000隊回復",
      publicPoint: 375,
      personalPoint: 750,
      categories: ["戦闘"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "T4以上の兵士、350,000隊倒す",
      publicPoint: 165,
      personalPoint: null,
      categories: ["戦闘"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士、700,000隊倒す",
      publicPoint: 255,
      personalPoint: 310,
      categories: ["戦闘"],
      recommend: { t6: 2, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "T4以上の兵士訓練、20,000隊",
      publicPoint: 200,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士訓練、27,000隊",
      publicPoint: 305,
      personalPoint: 370,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "T4以上の兵士訓練、39,000隊",
      publicPoint: 455,
      personalPoint: 685,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },
    {
      rarity: "エリート",
      mission: "スピードアップ18,000分利用",
      publicPoint: 290,
      personalPoint: 350,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "スピードアップ39,600分利用",
      publicPoint: 435,
      personalPoint: 655,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "エリート",
      mission: "技術戦力を180,000上げる",
      publicPoint: 295,
      personalPoint: 355,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "技術戦力を400,000上げる",
      publicPoint: 445,
      personalPoint: 670,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },
    {
      rarity: "エリート",
      mission: "建物戦力180,000上げる",
      publicPoint: 295,
      personalPoint: 355,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "建物戦力400,000上げる",
      publicPoint: 445,
      personalPoint: 670,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "司令官装備の戦力を120,000上げる",
      publicPoint: 200,
      personalPoint: null,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "司令官装備の戦力を336,000上げる",
      publicPoint: 305,
      personalPoint: 370,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "部隊戦力を180,000上げる",
      publicPoint: 195,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "部隊戦力を250,000上げる",
      publicPoint: 295,
      personalPoint: 355,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 2, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "部隊戦力を360,000上げる",
      publicPoint: 445,
      personalPoint: 670,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 3, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "戦力100,000増加（ヒーロー類除く）",
      publicPoint: 180,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "戦力250,000増加（ヒーロー類除く）",
      publicPoint: 275,
      personalPoint: 330,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "戦力600,000増加（ヒーロー類除く）",
      publicPoint: 415,
      personalPoint: 830,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "生存者キャンプ60回救出",
      publicPoint: 215,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "エリート",
      mission: "生存者キャンプ120回救出",
      publicPoint: 325,
      personalPoint: 390,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "食料掘り9,830,000個収集",
      publicPoint: 70,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "食料掘り18,300,000個収集",
      publicPoint: 125,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "食料掘り27,400,000個収集",
      publicPoint: 285,
      personalPoint: 345,
      categories: ["採取"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "木材掘り9,830,000個収集",
      publicPoint: 70,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "木材掘り18,300,000個収集",
      publicPoint: 125,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "木材掘り27,400,000個収集",
      publicPoint: 285,
      personalPoint: 345,
      categories: ["採取"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "鋼材掘り9,150,000個収集",
      publicPoint: 125,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "鋼材掘り13,700,000個収集",
      publicPoint: 285,
      personalPoint: 345,
      categories: ["採取"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "アンコモン",
      mission: "石油掘り1,960,000個収集",
      publicPoint: 70,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "石油掘り3,660,000個収集",
      publicPoint: 125,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "石油掘り5,480,000個収集",
      publicPoint: 285,
      personalPoint: 345,
      categories: ["採取"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "エリート",
      mission: "ワールドマップで資源回収21,000,000個",
      publicPoint: 175,
      personalPoint: 210,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "資源スポット7か所空にする",
      publicPoint: 150,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "警察署高度探索100回",
      publicPoint: 160,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "警察署普通探索200回",
      publicPoint: 160,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "ヒーロー経験値を9,216,000使用する",
      publicPoint: 175,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "カーボンスチール300個",
      publicPoint: 190,
      personalPoint: null,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "カーボンスチール500個",
      publicPoint: 290,
      personalPoint: 350,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "アンコモン",
      mission: "トラック（指定なし）を3台護衛",
      publicPoint: 170,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "トラック（A以上）を3台護衛",
      publicPoint: 195,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "技術を7回アップグレードする",
      publicPoint: 190,
      personalPoint: null,
      categories: ["建築・研究"],
      recommend: { t6: 1, t5: 1, t4: 2 }
    },
    {
      rarity: "アンコモン",
      mission: "建物を7回アップグレードする",
      publicPoint: 190,
      personalPoint: null,
      categories: ["建築・研究"],
      recommend: { t6: 1, t5: 1, t4: 2 }
    },
    {
      rarity: "エリート",
      mission: "上級チップ35個使用",
      publicPoint: 270,
      personalPoint: 325,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "上級チップ105個使用",
      publicPoint: 405,
      personalPoint: 610,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "通常精製300回行う",
      publicPoint: 225,
      personalPoint: null,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "乗り物戦力を20,475上げる",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["装備・乗り物系"],
      recommend: { t6: 2, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "兵装追跡を50個使用",
      publicPoint: 200,
      personalPoint: null,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "盟友に資源を66,500,000個提供する",
      publicPoint: 160,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "個人ポイントを600,000消費する",
      publicPoint: 160,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "アンコモン",
      mission: "週末アリーナに8回挑戦する",
      publicPoint: 160,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "同盟ヘルプを75回実施",
      publicPoint: 160,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "同盟技術への寄付を70回実施",
      publicPoint: 160,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "謎の商人から35個回購入",
      publicPoint: 155,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    }
  ],


  superAce: [
    {
      rarity: "エリート",
      mission: "500ポイント以上のパックを4回購入",
      publicPoint: 430,
      personalPoint: 520,
      categories: ["課金"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "500ポイント以上のパックを6回購入",
      publicPoint: 575,
      personalPoint: 1150,
      categories: ["課金"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "1000ポイント以上のパックを4回購入",
      publicPoint: 685,
      personalPoint: 1370,
      categories: ["課金"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "2000ポイント以上のパックを2回購入",
      publicPoint: 865,
      personalPoint: 1730,
      categories: ["課金"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "5000ポイント以上のパックを1回購入",
      publicPoint: 1080,
      personalPoint: 2160,
      categories: ["課金"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },

    {
      rarity: "アンコモン",
      mission: "T4以上の兵士、33,000隊回復",
      publicPoint: 215,
      personalPoint: null,
      categories: ["戦闘"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士、108,000隊回復",
      publicPoint: 310,
      personalPoint: 375,
      categories: ["戦闘"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "T4以上の兵士、238,000隊回復",
      publicPoint: 470,
      personalPoint: 705,
      categories: ["戦闘"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "T4以上の兵士、470,000隊倒す",
      publicPoint: 215,
      personalPoint: null,
      categories: ["戦闘"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士、930,000隊倒す",
      publicPoint: 315,
      personalPoint: 380,
      categories: ["戦闘"],
      recommend: { t6: 2, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "T4以上の兵士訓練、22,000隊",
      publicPoint: 260,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "T4以上の兵士訓練、29,000隊",
      publicPoint: 380,
      personalPoint: 460,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "T4以上の兵士訓練、44,000隊",
      publicPoint: 575,
      personalPoint: 865,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "カーボンスチール525個",
      publicPoint: 245,
      personalPoint: null,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "カーボンスチール875個",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },

    {
      rarity: "エリート",
      mission: "ジェムを10,000個消費",
      publicPoint: 405,
      personalPoint: 490,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "ジェムを50,000個消費",
      publicPoint: 620,
      personalPoint: 1240,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "スタミナを7,200消費",
      publicPoint: 145,
      personalPoint: null,
      categories: ["スタミナ"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "スタミナを14,400消費",
      publicPoint: 210,
      personalPoint: 255,
      categories: ["スタミナ"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },

    {
      rarity: "エリート",
      mission: "スピードアップ21,600分利用",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "レジェンド",
      mission: "スピードアップ46,800分利用",
      publicPoint: 550,
      personalPoint: 825,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "トラック（S以上）を2台護衛",
      publicPoint: 255,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "トラック（指定なし）を4台護衛",
      publicPoint: 220,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "ヒーロー経験値を11,520,000使用する",
      publicPoint: 230,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "ヒーロー経験値を30,600,000使用する",
      publicPoint: 335,
      personalPoint: 405,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "レーダー基地イベント23回実施",
      publicPoint: 175,
      personalPoint: null,
      categories: ["スタミナ"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },
    {
      rarity: "エリート",
      mission: "レーダー基地イベント35回実施",
      publicPoint: 255,
      personalPoint: 310,
      categories: ["スタミナ"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "技術を9回アップグレードする",
      publicPoint: 245,
      personalPoint: null,
      categories: ["建築・研究"],
      recommend: { t6: 1, t5: 1, t4: 2 }
    },
    {
      rarity: "エリート",
      mission: "技術戦力を250,000上げる",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "技術戦力を680,000上げる",
      publicPoint: 560,
      personalPoint: 840,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "警察署高度探索135回",
      publicPoint: 210,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "警察署普通探索290回",
      publicPoint: 210,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "建物を9回アップグレードする",
      publicPoint: 245,
      personalPoint: null,
      categories: ["建築・研究"],
      recommend: { t6: 1, t5: 1, t4: 2 }
    },

    {
      rarity: "アンコモン",
      mission: "個人ポイントを600,000消費する",
      publicPoint: 205,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },

    {
      rarity: "アンコモン",
      mission: "鋼材5,150,000個収集",
      publicPoint: 90,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "鋼材9,600,000個収集",
      publicPoint: 160,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "鋼材15,500,000個収集",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["採取"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },

    {
      rarity: "アンコモン",
      mission: "資源7,730,000個収集",
      publicPoint: 75,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "資源14,000,000個収集",
      publicPoint: 125,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "資源23,000,000個収集",
      publicPoint: 220,
      personalPoint: 265,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "食料10,300,000個収集",
      publicPoint: 90,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "食料19,200,000個収集",
      publicPoint: 160,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "食料31,000,000個収集",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["採取"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "石油2,060,000個収集",
      publicPoint: 90,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "石油3,840,000個収集",
      publicPoint: 160,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "石油6,200,000個収集",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["採取"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },

    {
      rarity: "アンコモン",
      mission: "木材10,300,000個収集",
      publicPoint: 90,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "木材19,200,000個収集",
      publicPoint: 160,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "木材31,000,000個収集",
      publicPoint: 360,
      personalPoint: 435,
      categories: ["採取"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "司令官装備の戦力を150,000上げる",
      publicPoint: 260,
      personalPoint: null,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "司令官装備の戦力を480,000上げる",
      publicPoint: 380,
      personalPoint: 460,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "資源スポット9か所空にする",
      publicPoint: 195,
      personalPoint: null,
      categories: ["採取"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "週末アリーナ、ランキング20位上昇",
      publicPoint: 205,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "週末アリーナに8回挑戦する",
      publicPoint: 205,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "エリート",
      mission: "乗り物戦力を31,200上げる",
      publicPoint: 450,
      personalPoint: 540,
      categories: ["装備・乗り物系"],
      recommend: { t6: 2, t5: 3, t4: 3 }
    },

    {
      rarity: "エリート",
      mission: "生存者キャンプ165回救出",
      publicPoint: 405,
      personalPoint: 490,
      categories: ["アイテム消費"],
      recommend: { t6: 3, t5: 3, t4: 3 }
    },
    {
      rarity: "アンコモン",
      mission: "生存者キャンプ75回救出",
      publicPoint: 280,
      personalPoint: null,
      categories: ["アイテム消費"],
      recommend: { t6: 2, t5: 2, t4: 2 }
    },

    {
      rarity: "エリート",
      mission: "上級精製40個使用",
      publicPoint: 340,
      personalPoint: 410,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "上級精製125個使用",
      publicPoint: 515,
      personalPoint: 775,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "通常精製400回行う",
      publicPoint: 295,
      personalPoint: null,
      categories: ["装備・乗り物系", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "エリート",
      mission: "建物戦力を250,000上げる",
      publicPoint: 370,
      personalPoint: 445,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 2, t4: 2 }
    },
    {
      rarity: "レジェンド",
      mission: "建物戦力を680,000上げる",
      publicPoint: 560,
      personalPoint: 840,
      categories: ["建築・研究", "アイテム消費"],
      recommend: { t6: 1, t5: 3, t4: 3 }
    },

    {
      rarity: "アンコモン",
      mission: "部隊戦力を360,000上げる",
      publicPoint: 250,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "部隊戦力を470,000上げる",
      publicPoint: 370,
      personalPoint: 445,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 2, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "部隊戦力を720,000上げる",
      publicPoint: 560,
      personalPoint: 840,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "戦力120,000増加（ヒーロー類除く）",
      publicPoint: 235,
      personalPoint: null,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "エリート",
      mission: "戦力300,000増加（ヒーロー類除く）",
      publicPoint: 345,
      personalPoint: 415,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "レジェンド",
      mission: "戦力800,000増加（ヒーロー類除く）",
      publicPoint: 520,
      personalPoint: 780,
      categories: ["訓練", "アイテム消費"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },

    {
      rarity: "アンコモン",
      mission: "同盟ヘルプを90回実施",
      publicPoint: 205,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "同盟技術への寄付を90回実施",
      publicPoint: 210,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "謎の商人から50回購入",
      publicPoint: 200,
      personalPoint: null,
      categories: ["その他"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "兵装追跡を60個使用",
      publicPoint: 265,
      personalPoint: null,
      categories: ["アイテム消費", "装備・乗り物系"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    },
    {
      rarity: "アンコモン",
      mission: "盟友に資源を92,000,000個提供する",
      publicPoint: 205,
      personalPoint: null,
      categories: ["同盟"],
      recommend: { t6: 1, t5: 1, t4: 1 }
    }
  ]
};


const state = {
  rank: "topFighter",
  missionType: "public",
  tier: "t6",
  rarity: "all",
  category: "all",
  recommend: "all",
  keyword: ""
};


const rankNames = {
  topFighter: "トップファイター",
  superAce: "スーパーエース"
};


const missionTypeNames = {
  public: "公共",
  personal: "個人"
};


function stars(level) {
  return "★".repeat(level) + "☆".repeat(3 - level);
}


function getRarityClass(rarity) {
  if (rarity === "アンコモン") {
    return "rarity-uncommon";
  }

  if (rarity === "エリート") {
    return "rarity-elite";
  }

  if (rarity === "レジェンド") {
    return "rarity-legend";
  }

  return "";
}


function setActiveButton(containerId, selector, value) {
  document
    .querySelectorAll(`#${containerId} [${selector}]`)
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.getAttribute(selector) === value
      );
    });
}


function matchesRecommendation(level) {
  if (state.recommend === "all") {
    return true;
  }

  if (state.recommend === "3") {
    return level === 3;
  }

  if (state.recommend === "2plus") {
    return level >= 2;
  }

  return true;
}


function getFilteredMissions() {
  const source = missionData[state.rank] ?? [];

  return source.filter(item => {
    const point =
      state.missionType === "public"
        ? item.publicPoint
        : item.personalPoint;

    /*
      個人ポイントが存在しないミッションは、
      個人ミッション選択時には非表示
    */
    if (point === null || point === undefined) {
      return false;
    }


    /*
      レアリティ
    */
    if (
      state.rarity !== "all" &&
      item.rarity !== state.rarity
    ) {
      return false;
    }


    /*
      カテゴリ
    */
    if (
      state.category !== "all" &&
      !item.categories.includes(state.category)
    ) {
      return false;
    }


    /*
      おすすめ度
    */
    const level = item.recommend[state.tier];

    if (!matchesRecommendation(level)) {
      return false;
    }


    /*
      キーワード検索
    */
    if (state.keyword) {
      const text = [
        item.mission,
        item.rarity,
        ...item.categories
      ]
        .join(" ")
        .toLowerCase();

      if (!text.includes(state.keyword.toLowerCase())) {
        return false;
      }
    }


    return true;
  });
}


function render() {
  const tbody =
    document.getElementById("missionTableBody");

  const resultCount =
    document.getElementById("resultCount");

  const currentConditions =
    document.getElementById("currentConditions");

  const notice =
    document.getElementById("notice");


  /*
    データが空の場合
  */
  if (!missionData[state.rank] || missionData[state.rank].length === 0) {
    tbody.innerHTML = "";

    resultCount.textContent = "該当：0件";

    currentConditions.textContent =
      rankNames[state.rank];

    notice.textContent =
      "このランクのミッションデータは準備中です。";

    notice.classList.remove("hidden");

    return;
  }


  notice.classList.add("hidden");


  const filtered = getFilteredMissions();


  /*
    件数
  */
  resultCount.textContent =
    `該当：${filtered.length}件`;


  /*
    現在の条件表示
  */
  const conditionParts = [
    rankNames[state.rank],
    `${missionTypeNames[state.missionType]}ミッション`,
    state.tier.toUpperCase()
  ];


  if (state.rarity !== "all") {
    conditionParts.push(state.rarity);
  }


  if (state.category !== "all") {
    conditionParts.push(state.category);
  }


  currentConditions.textContent =
    conditionParts.join(" / ");


  /*
    該当ミッションなし
  */
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr class="empty-row">
        <td colspan="5">
          条件に一致するミッションがありません。
        </td>
      </tr>
    `;

    return;
  }


  /*
    ミッション表示
  */
  tbody.innerHTML = filtered
    .map(item => {
      const point =
        state.missionType === "public"
          ? item.publicPoint
          : item.personalPoint;

      const recommendation =
        item.recommend[state.tier];

      const rarityClass =
        getRarityClass(item.rarity);


      return `
        <tr>

          <td class="recommend">
            ${stars(recommendation)}
          </td>


          <td class="mission-cell">
            ${item.mission}
          </td>


          <td class="point-col">
            ${point.toLocaleString()}
          </td>


          <td class="rarity-cell ${rarityClass}">
            <span class="rarity">
              ${item.rarity}
            </span>
          </td>


          <td class="category-cell">
            <div class="tags">
              ${item.categories
                .map(
                  category =>
                    `<span class="tag">${category}</span>`
                )
                .join("")}
            </div>
          </td>

        </tr>
      `;
    })
    .join("");
}


/*
  =========================
  ランク
  =========================
*/
document
  .getElementById("rankButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-rank]");

    if (!button) {
      return;
    }

    state.rank =
      button.dataset.rank;

    setActiveButton(
      "rankButtons",
      "data-rank",
      state.rank
    );

    render();
  });


/*
  =========================
  公共 / 個人
  =========================
*/
document
  .getElementById("missionTypeButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-type]");

    if (!button) {
      return;
    }

    state.missionType =
      button.dataset.type;

    setActiveButton(
      "missionTypeButtons",
      "data-type",
      state.missionType
    );

    render();
  });


/*
  =========================
  Tier
  =========================
*/
document
  .getElementById("tierButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-tier]");

    if (!button) {
      return;
    }

    state.tier =
      button.dataset.tier;

    setActiveButton(
      "tierButtons",
      "data-tier",
      state.tier
    );

    render();
  });


/*
  =========================
  レアリティ
  =========================
*/
document
  .getElementById("rarityButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-rarity]");

    if (!button) {
      return;
    }

    state.rarity =
      button.dataset.rarity;

    setActiveButton(
      "rarityButtons",
      "data-rarity",
      state.rarity
    );

    render();
  });


/*
  =========================
  カテゴリ
  =========================
*/
document
  .getElementById("categoryButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-category]");

    if (!button) {
      return;
    }

    state.category =
      button.dataset.category;

    setActiveButton(
      "categoryButtons",
      "data-category",
      state.category
    );

    render();
  });


/*
  =========================
  おすすめ度
  =========================
*/
document
  .getElementById("recommendButtons")
  .addEventListener("click", event => {
    const button =
      event.target.closest("[data-recommend]");

    if (!button) {
      return;
    }

    state.recommend =
      button.dataset.recommend;

    setActiveButton(
      "recommendButtons",
      "data-recommend",
      state.recommend
    );

    render();
  });


/*
  =========================
  キーワード検索
  =========================
*/
document
  .getElementById("keyword")
  .addEventListener("input", event => {
    state.keyword =
      event.target.value.trim();

    render();
  });


/*
  初回表示
*/
render();