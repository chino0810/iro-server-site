// キットデータ
const kits = [
    {
        name: "剣士",
        role: "近接アタッカー",
        description: "近接戦闘の主力。スキル発動時の爆発力で敵を一掃する。",
        skills: ["常時：力Ⅰ", "スキル：一定時間 力Ⅱ"],
        image: "kits/剣士.png"
    },
    {
        name: "狩人",
        role: "遠距離アタッカー",
        description: "牽制・削り・追撃に優れた中距離火力。",
        skills: ["唯一、弓を使用可能", "ジャンプ力上昇ポーション所持", "スキル：矢を補充＋3方向拡散ショット"],
        image: "kits/狩人.png"
    },
    {
        name: "採掘士",
        role: "資源＆コア破壊",
        description: "初動の資源確保から最速コア削りまで担当。",
        skills: ["常時：採掘速度上昇", "スキル：鉱石獲得量が確率で2倍"],
        image: "kits/採掘士.png"
    },
    {
        name: "守護神",
        role: "防衛特化",
        description: "ネクサス防衛の要。防衛戦では欠かせない存在。",
        skills: ["自陣コア付近で耐性付与", "スキル：周囲の敵に採掘速度低下"],
        image: "kits/守護神.png"
    },
    {
        name: "突撃兵",
        role: "高速斥候",
        description: "機動力を活かした撹乱・キル・コア攻撃が得意。",
        skills: ["常時：スピードⅡ / 攻撃力低下Ⅰ", "スキル：ノックバック無効"],
        image: "kits/突撃兵.png"
    },
    {
        name: "僧侶",
        role: "回復サポート",
        description: "自身は戦えないが、味方の生存力を大きく底上げする。",
        skills: ["常時：再生Ⅰ / 攻撃力低下Ⅰ", "スキル：周囲の味方を回復"],
        image: "kits/僧侶.png"
    },
    {
        name: "建築士",
        role: "戦略構築",
        description: "防衛構築・空橋など戦況を左右する建築役。",
        skills: ["スキル：建築ブロックを入手", "フェーズ2以降：黒曜石追加"],
        image: "kits/建築士.png"
    },
    {
        name: "キャンセラー",
        role: "妨害",
        description: "バフ依存キットへの強力なカウンター。防衛向き。",
        skills: ["常時バフなし", "スキル：周囲の敵のエフェクトを削除"],
        image: "kits/キャンセラー.png"
    },
    {
        name: "ミカワシン",
        role: "回避戦闘",
        description: "弓使いの天敵。純粋な戦闘力も高い。",
        skills: ["常時：スピードⅠ", "パッシブ：弓ダメージ無効", "スキル：スピードⅡ＋回避率50%"],
        image: "kits/ミカワシン.png"
    },
    {
        name: "キラー",
        role: "暗殺者",
        description: "奇襲・暗殺・コア破壊に特化。",
        skills: ["スキル：一定時間 透明化（防具も透明）", "※手持ちアイテムは不可 / 落下時に一瞬可視"],
        image: "kits/キラー.png"
    },
    {
        name: "ガーゴイル",
        role: "飛行型",
        description: "逃走・奇襲性能が非常に高い特殊機動型。",
        skills: ["スキル：浮遊付与＋エリトラ装備", "※初回着地でエリトラ消失"],
        image: "kits/ガーゴイル.png"
    },
    {
        name: "オロチ",
        role: "状態異常",
        description: "重装備や追い打ちに強い妨害役。",
        skills: ["常時バフなし", "攻撃時：確率で毒付与", "スキル：周囲の敵に鈍化"],
        image: "kits/オロチ.png"
    },
    {
        name: "チェンジャー",
        role: "位置操作",
        description: "奈落・高所・拘束など使い手次第で凶悪。",
        skills: ["スキル：直線に飛ぶエンダーアイを投擲", "命中した敵と位置を交換"],
        image: "kits/チェンジャー.png"
    },
    {
        name: "反撃者",
        role: "カウンター",
        description: "重装備への強力な対抗策。ラッシュ向き。",
        skills: ["被ダメ時：短時間 力Ⅰ＋スピードⅠ", "スキルなし", "死亡時：倒した敵装備に応じ復活バフ"],
        image: "kits/反撃者.png"
    },
    {
        name: "修理士",
        role: "コア支援",
        description: "盤面を一気に覆せるが、戦闘能力は低め。",
        skills: ["スキル：敵コア破壊時、確率で自陣コアHP回復", "※劣勢時ほど発動率UP"],
        image: "kits/修理士.png"
    }
];

// キット一覧を表示
const kitGrid = document.getElementById('kit-grid');

if (kitGrid) {
    kits.forEach(kit => {
        const card = document.createElement('div');
        card.className = 'kit-card';

        const skillsHTML = kit.skills.map(skill =>
            `<div class="skill-item">${skill}</div>`
        ).join('');

        card.innerHTML = `
            <div class="kit-image" style="background-image: url('${kit.image}')"></div>
            <div class="kit-info">
                <h3>${kit.name}</h3>
                <div class="role">${kit.role}</div>
                <div class="description">${kit.description}</div>
                <div class="skills">${skillsHTML}</div>
            </div>
        `;

        kitGrid.appendChild(card);
    });
}