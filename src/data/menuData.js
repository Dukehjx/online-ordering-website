export const restaurantData = {
  "drinking-shop": {
    id: "drinking-shop",
    name: {
      en: "My Smoothies",
      th: "มาย สมูทตี้",
      zh: "我的果昔店",
      ko: "마이 스무디",
      ja: "マイスムージー"
    },
    categories: [
      {
        id: "milk-tea",
        name: {
          en: "Milk & Tea",
          th: "นมและชา",
          zh: "奶茶系列",
          ko: "우유 & 차",
          ja: "ミルク&ティー"
        },
        items: [
          {
            id: "fresh-milk-blended",
            name: {
              en: "Fresh Milk (blended/iced)",
              th: "นมสดปั่น/เย็น",
              zh: "鲜奶（搅拌/冰镇）",
              ko: "신선한 우유 (블렌딩/아이스)",
              ja: "フレッシュミルク（ブレンド/アイス）"
            },
            price: 35,
            image: "/images/drinking-shop/fresh-milk-blended.png",
            description: {
              en: "Creamy fresh milk served blended or iced",
              th: "นมสดหอมครีมี เสิร์ฟแบบปั่นหรือเย็น",
              zh: "香浓鲜奶，可选搅拌或冰镇",
              ko: "크리미한 신선 우유, 블렌딩 또는 아이스로 제공",
              ja: "クリーミーなフレッシュミルク、ブレンドまたはアイスで提供"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy"]
          },
          {
            id: "cocoa",
            name: {
              en: "Cocoa",
              th: "โกโก้",
              zh: "可可",
              ko: "코코아",
              ja: "ココア"
            },
            price: 35,
            image: "/images/drinking-shop/cocoa.png",
            description: {
              en: "Rich chocolate cocoa drink",
              th: "เครื่องดื่มโกโก้รสชาติเข้มข้น",
              zh: "浓郁巧克力可可饮品",
              ko: "진한 초콜릿 코코아 음료",
              ja: "濃厚なチョコレートココアドリンク"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["chocolate", "dairy"]
          },
          {
            id: "chocolate",
            name: {
              en: "Chocolate",
              th: "ช็อคโกแลต",
              zh: "巧克力",
              ko: "초콜릿",
              ja: "チョコレート"
            },
            price: 35,
            image: "/images/drinking-shop/chocolate.png",
            description: {
              en: "Creamy chocolate drink",
              th: "เครื่องดื่มช็อคโกแลตครีมมี่",
              zh: "奶香巧克力饮品",
              ko: "크리미한 초콜릿 음료",
              ja: "クリーミーなチョコレートドリンク"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["chocolate", "dairy"]
          },
          {
            id: "thai-tea",
            name: {
              en: "Thai Tea",
              th: "ชาไทย",
              zh: "泰式奶茶",
              ko: "타이 티",
              ja: "タイティー"
            },
            price: 35,
            image: "/images/drinking-shop/thai-tea.png",
            description: {
              en: "Traditional Thai tea with milk",
              th: "ชาไทยแบบดั้งเดิมผสมนม",
              zh: "传统泰式奶茶",
              ko: "우유를 넣은 전통 타이 차",
              ja: "ミルク入り伝統タイティー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["tea", "dairy", "signature"]
          },
          {
            id: "green-tea",
            name: {
              en: "Green Tea",
              th: "ชาเขียว",
              zh: "绿茶",
              ko: "녹차",
              ja: "緑茶"
            },
            price: 35,
            image: "/images/drinking-shop/green-tea.png",
            description: {
              en: "Fresh green tea",
              th: "ชาเขียวสด",
              zh: "新鲜绿茶",
              ko: "신선한 녹차",
              ja: "新鮮な緑茶"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["tea", "healthy"]
          },
          {
            id: "nescafe",
            name: {
              en: "Nescafé",
              th: "เนสกาแฟ",
              zh: "雀巢咖啡",
              ko: "네스카페",
              ja: "ネスカフェ"
            },
            price: 35,
            image: "/images/drinking-shop/nescafe.png",
            description: {
              en: "Classic Nescafé coffee",
              th: "กาแฟเนสกาแฟคลาสสิค",
              zh: "经典雀巢咖啡",
              ko: "클래식 네스카페 커피",
              ja: "クラシックネスカフェコーヒー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["coffee"]
          },
          {
            id: "pink-milk",
            name: {
              en: "Pink Milk (Sala flavored milk)",
              th: "นมเย็น",
              zh: "粉红牛奶（沙拉味）",
              ko: "핑크 밀크 (살라 맛)",
              ja: "ピンクミルク（サラ味）"
            },
            price: 35,
            image: "/images/drinking-shop/pink-milk.png",
            description: {
              en: "Sweet pink milk with Sala flavor",
              th: "นมหวานสีชมพูรสสละ",
              zh: "沙拉味粉红甜牛奶",
              ko: "살라 맛 핑크 달콤한 우유",
              ja: "サラ味のピンクスイートミルク"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy", "specialty"]
          },
          {
            id: "cocoa-oreo",
            name: {
              en: "Cocoa Oreo Smoothie",
              th: "โกโก้โอริโอ้ปั่น",
              zh: "可可奥利奥奶昔",
              ko: "코코아 오레오 스무디",
              ja: "ココアオレオスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/cocoa-oreo.png",
            description: {
              en: "Blended cocoa with Oreo cookies",
              th: "โกโก้ปั่นผสมคุกกี้โอริโอ้",
              zh: "可可奥利奥饼干奶昔",
              ko: "오레오 쿠키가 들어간 코코아 블렌드",
              ja: "オレオクッキー入りココアブレンド"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["smoothie", "chocolate", "popular"]
          },
          {
            id: "milk-oreo",
            name: {
              en: "Fresh Milk with Oreo",
              th: "นมสดโอริโอ้",
              zh: "鲜奶奥利奥",
              ko: "신선한 우유 오레오",
              ja: "フレッシュミルクオレオ"
            },
            price: 35,
            image: "/images/drinking-shop/fresh-milk-oreo.png",
            description: {
              en: "Fresh milk with Oreo cookies",
              th: "นมสดผสมคุกกี้โอริโอ้",
              zh: "鲜奶配奥利奥饼干",
              ko: "오레오 쿠키가 들어간 신선한 우유",
              ja: "オレオクッキー入りフレッシュミルク"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy", "popular"]
          },
          {
            id: "milk-pipo",
            name: {
              en: "Fresh Milk with Pipo Jelly",
              th: "นมสดปีโป้",
              zh: "鲜奶加Pipo果冻",
              ko: "신선한 우유 피포 젤리",
              ja: "フレッシュミルク ピポゼリー"
            },
            price: 35,
            image: "/images/drinking-shop/fresh-milk-pipo-jelly.png",
            description: {
              en: "Fresh milk with chewy Pipo jelly",
              th: "นมสดผสมวุ้นปีโป้เหนียวนุ่ม",
              zh: "鲜奶配Q弹Pipo果冻",
              ko: "쫄깃한 피포 젤리가 들어간 신선한 우유",
              ja: "モチモチピポゼリー入りフレッシュミルク"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy", "jelly"]
          },
          {
            id: "yogurt-pipo-smoothie",
            name: {
              en: "Yogurt with Pipo Jelly Smoothie",
              th: "โยเกิร์ตปีโป้ปั่น",
              zh: "酸奶Pipo果冻奶昔",
              ko: "요거트 피포 젤리 스무디",
              ja: "ヨーグルト ピポゼリー スムージー"
            },
            price: 35,
            image: "/images/drinking-shop/yogurt-pipo-jelly.png",
            description: {
              en: "Creamy yogurt smoothie with chewy Pipo jelly",
              th: "โยเกิร์ตครีมมี่ปั่นผสมวุ้นปีโป้เหนียวนุ่ม",
              zh: "奶香酸奶配Q弹Pipo果冻奶昔",
              ko: "쫄깃한 피포 젤리가 들어간 크리미한 요거트 스무디",
              ja: "モチモチピポゼリー入りクリーミーヨーグルトスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["yogurt", "jelly", "healthy"]
          },
          {
            id: "milk-strawberry",
            name: {
              en: "Fresh Milk with Strawberry",
              th: "นมสดสตอเบอรี่",
              zh: "鲜奶草莓",
              ko: "신선한 우유 딸기",
              ja: "フレッシュミルク ストロベリー"
            },
            price: 35,
            image: "/images/drinking-shop/fresh-milk-stawberry.png",
            description: {
              en: "Fresh milk blended with sweet strawberry",
              th: "นมสดผสมสตอเบอรี่หวานอร่อย",
              zh: "鲜奶配香甜草莓",
              ko: "달콤한 딸기가 들어간 신선한 우유 블렌드",
              ja: "甘いストロベリー入りフレッシュミルクブレンド"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy", "fruit", "popular"]
          },
          {
            id: "ovaltine-volcano",
            name: {
              en: "Ovaltine Volcano Smoothie",
              th: "โอวัลตินปั่นภูเขาไฟ",
              zh: "阿华田火山奶昔",
              ko: "오발틴 볼케이노 스무디",
              ja: "オバルチン ボルケーノ スムージー"
            },
            price: 35,
            image: "/images/drinking-shop/ovaltine-volcano.png",
            description: {
              en: "Rich Ovaltine smoothie with volcanic presentation",
              th: "โอวัลตินปั่นเข้มข้นแต่งแบบภูเขาไฟ",
              zh: "浓郁阿华田火山造型奶昔",
              ko: "화산 모양으로 제공되는 진한 오발틴 스무디",
              ja: "火山型プレゼンテーションの濃厚オバルチンスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["chocolate", "specialty", "signature"]
          },
          {
            id: "milk-kitkat",
            name: {
              en: "Fresh Milk with KitKat",
              th: "นมสดปั่นคิทแคท",
              zh: "鲜奶奇巧",
              ko: "신선한 우유 킷캣",
              ja: "フレッシュミルク キットカット"
            },
            price: 35,
            image: "/images/drinking-shop/fresh-milk-kitkat.png",
            description: {
              en: "Fresh milk blended with crunchy KitKat pieces",
              th: "นมสดปั่นผสมคิทแคทกรุบกรอบ",
              zh: "鲜奶配香脆奇巧巧克力",
              ko: "바삭한 킷캣 조각이 들어간 신선한 우유 블렌드",
              ja: "サクサクキットカット入りフレッシュミルクブレンド"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["dairy", "chocolate", "popular"]
          },
          {
            id: "mocha-smoothie",
            name: {
              en: "Mocha Smoothie",
              th: "มอคค่าปั่น",
              zh: "摩卡奶昔",
              ko: "모카 스무디",
              ja: "モカスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/mocha-milk.png",
            description: {
              en: "Rich coffee and chocolate blend smoothie",
              th: "กาแฟและช็อคโกแลตผสมกันอย่างเข้มข้น",
              zh: "浓郁咖啡巧克力混合奶昔",
              ko: "진한 커피와 초콜릿 블렌드 스무디",
              ja: "濃厚コーヒーチョコレートブレンドスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["coffee", "chocolate", "energizing"]
          },
          {
            id: "red-lime-soda",
            name: {
              en: "Red Lime Soda",
              th: "แดงมะนาวโซดา",
              zh: "红柠檬苏打",
              ko: "레드 라임 소다",
              ja: "レッドライムソーダ"
            },
            price: 35,
            image: "/images/drinking-shop/red-lime-soda.png",
            description: {
              en: "Refreshing red lime soda with fizzy bubbles",
              th: "น้ำแดงมะนาวโซดาสดชื่นฟู่ฟ่า",
              zh: "清爽红柠檬气泡苏打",
              ko: "톡톡 튀는 기포가 있는 상쾌한 레드 라임 소다",
              ja: "シュワシュワ泡の爽やかレッドライムソーダ"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["soda", "citrus", "refreshing"]
          },
          {
            id: "lemon-tea",
            name: {
              en: "Lemon Tea",
              th: "ชามะนาว",
              zh: "柠檬茶",
              ko: "레몬 티",
              ja: "レモンティー"
            },
            price: 35,
            image: "/images/drinking-shop/lemon-tea.png",
            description: {
              en: "Classic tea with fresh lemon",
              th: "ชาคลาสสิคผสมมะนาวสด",
              zh: "经典柠檬茶",
              ko: "신선한 레몬이 들어간 클래식 차",
              ja: "フレッシュレモン入りクラシックティー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["tea", "citrus", "classic"]
          },
          {
            id: "milo",
            name: {
              en: "Milo",
              th: "ไมโล",
              zh: "美禄",
              ko: "마일로",
              ja: "ミロ"
            },
            price: 35,
            image: "/images/drinking-shop/milo.png",
            description: {
              en: "Classic chocolate malt drink",
              th: "เครื่องดื่มมอลต์ช็อคโกแลตคลาสสิค",
              zh: "经典巧克力麦芽饮品",
              ko: "클래식 초콜릿 맥아 음료",
              ja: "クラシックチョコレートモルト飲料"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["chocolate", "malt", "energizing"]
          }
        ]
      },
      {
        id: "smoothies",
        name: {
          en: "Smoothies",
          th: "น้ำผลไม้ปั่น",
          zh: "鲜榨果昔",
          ko: "스무디",
          ja: "スムージー"
        },
        items: [
          {
            id: "orange-smoothie",
            name: {
              en: "Orange Smoothie",
              th: "น้ำส้มปั่น",
              zh: "橙汁奶昔",
              ko: "오렌지 스무디",
              ja: "オレンジスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/orange-smoothie.png",
            description: {
              en: "Fresh orange smoothie",
              th: "น้ำส้มสดปั่น",
              zh: "新鲜橙汁奶昔",
              ko: "신선한 오렌지 스무디",
              ja: "フレッシュオレンジスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "vitamin-c", "healthy"]
          },
          {
            id: "banana-smoothie",
            name: {
              en: "Banana Smoothie",
              th: "น้ำกล้วย",
              zh: "香蕉奶昔",
              ko: "바나나 스무디",
              ja: "バナナスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/banana-smoothie.png",
            description: {
              en: "Creamy banana smoothie",
              th: "น้ำกล้วยครีมมี่",
              zh: "香滑香蕉奶昔",
              ko: "크리미한 바나나 스무디",
              ja: "クリーミーバナナスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "creamy", "potassium"]
          },
          {
            id: "watermelon-smoothie",
            name: {
              en: "Watermelon Smoothie",
              th: "แตงโมปั่น",
              zh: "西瓜奶昔",
              ko: "수박 스무디",
              ja: "スイカスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/watermelon-smoothie.png",
            description: {
              en: "Refreshing watermelon smoothie",
              th: "น้ำแตงโมปั่นสดชื่น",
              zh: "清爽西瓜奶昔",
              ko: "상쾌한 수박 스무디",
              ja: "爽やかスイカスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "refreshing", "hydrating"]
          },
          {
            id: "lime-honey",
            name: {
              en: "Lime + Honey Smoothie",
              th: "มะนาว+น้ำผึ้ง",
              zh: "柠檬蜂蜜奶昔",
              ko: "라임 + 꿀 스무디",
              ja: "ライム + ハニー スムージー"
            },
            price: 35,
            image: "/images/drinking-shop/lime-honey.png",
            description: {
              en: "Tangy lime with sweet honey",
              th: "มะนาวเปรียวผสมน้ำผึ้งหวาน",
              zh: "酸甜柠檬蜂蜜",
              ko: "새콤한 라임과 달콤한 꿀",
              ja: "酸っぱいライムと甘いハニー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["citrus", "honey", "healthy", "vitamin-c"]
          },
          {
            id: "lime-smoothie",
            name: {
              en: "Lime Smoothie",
              th: "น้ำมะนาวปั่น",
              zh: "柠檬奶昔",
              ko: "라임 스무디",
              ja: "ライムスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/lime-smoothie.png",
            description: {
              en: "Fresh lime smoothie",
              th: "น้ำมะนาวสดปั่น",
              zh: "新鲜柠檬奶昔",
              ko: "신선한 라임 스무디",
              ja: "フレッシュライムスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["citrus", "tangy", "vitamin-c"]
          },
          {
            id: "apple-smoothie",
            name: {
              en: "Apple Smoothie",
              th: "แอปเปิ้ลปั่น",
              zh: "苹果奶昔",
              ko: "사과 스무디",
              ja: "アップルスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/apple-smoothie.png",
            description: {
              en: "Fresh apple smoothie",
              th: "น้ำแอปเปิ้ลสดปั่น",
              zh: "新鲜苹果奶昔",
              ko: "신선한 사과 스무디",
              ja: "フレッシュアップルスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "fiber", "healthy"]
          },
          {
            id: "strawberry-smoothie",
            name: {
              en: "Strawberry Smoothie",
              th: "สตอเบอร์รี่ปั่น",
              zh: "草莓奶昔",
              ko: "딸기 스무디",
              ja: "ストロベリースムージー"
            },
            price: 35,
            image: "/images/drinking-shop/strawberry-smoothie.png",
            description: {
              en: "Sweet strawberry smoothie",
              th: "น้ำสตอเบอร์รี่หวานปั่น",
              zh: "香甜草莓奶昔",
              ko: "달콤한 딸기 스무디",
              ja: "甘いストロベリースムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "berry", "popular"]
          },
          {
            id: "strawberry-milk-smoothie",
            name: {
              en: "Strawberry Smoothie with Fresh Milk",
              th: "สตอเบอร์รี่สมูทตี้นมสด",
              zh: "草莓鲜奶奶昔",
              ko: "딸기 스무디 신선한 우유",
              ja: "ストロベリースムージー フレッシュミルク"
            },
            price: 35,
            image: "/images/drinking-shop/strawberry-milk-smoothie.png",
            description: {
              en: "Strawberry smoothie with creamy fresh milk",
              th: "สมูทตี้สตอเบอร์รี่ผสมนมสดครีมมี่",
              zh: "草莓配香浓鲜奶奶昔",
              ko: "크리미한 신선한 우유가 들어간 딸기 스무디",
              ja: "クリーミーフレッシュミルク入りストロベリースムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "dairy", "creamy", "premium"]
          },
          {
            id: "banana-cocoa-milk",
            name: {
              en: "Banana Cocoa with Fresh Milk",
              th: "กล้วยปั่นโกโก้นมสด",
              zh: "香蕉可可鲜奶",
              ko: "바나나 코코아 신선한 우유",
              ja: "バナナココア フレッシュミルク"
            },
            price: 35,
            image: "/images/drinking-shop/banana-cocoa-milk.png",
            description: {
              en: "Banana smoothie with cocoa and fresh milk",
              th: "กล้วยปั่นผสมโกโก้และนมสด",
              zh: "香蕉可可鲜奶奶昔",
              ko: "코코아와 신선한 우유가 들어간 바나나 스무디",
              ja: "ココアとフレッシュミルク入りバナナスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "chocolate", "dairy", "creamy"]
          },
          {
            id: "banana-oreo-smoothie",
            name: {
              en: "Banana Oreo Smoothie",
              th: "กล้วยปั่นโอริโอ้",
              zh: "香蕉奥利奥奶昔",
              ko: "바나나 오레오 스무디",
              ja: "バナナオレオスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/banana-oreo-smoothie.png",
            description: {
              en: "Banana smoothie with Oreo cookies",
              th: "กล้วยปั่นผสมคุกกี้โอริโอ้",
              zh: "香蕉奥利奥饼干奶昔",
              ko: "오레오 쿠키가 들어간 바나나 스무디",
              ja: "オレオクッキー入りバナナスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "cookies", "indulgent", "popular"]
          },
          {
            id: "grape-smoothie",
            name: {
              en: "Grape Smoothie",
              th: "น้ำองุ่น",
              zh: "葡萄奶昔",
              ko: "포도 스무디",
              ja: "グレープスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/grape-smoothie.png",
            description: {
              en: "Sweet and refreshing grape smoothie",
              th: "น้ำองุ่นหวานสดชื่น",
              zh: "香甜清爽葡萄奶昔",
              ko: "달콤하고 상쾌한 포도 스무디",
              ja: "甘くて爽やかなグレープスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "antioxidants", "refreshing"]
          },
          {
            id: "kiwi-smoothie",
            name: {
              en: "Kiwi Smoothie",
              th: "กีวี่ปั่น",
              zh: "猕猴桃奶昔",
              ko: "키위 스무디",
              ja: "キウイスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/kiwi-smoothie.png",
            description: {
              en: "Tangy and sweet kiwi smoothie",
              th: "กีวี่เปรี้ยวหวานปั่น",
              zh: "酸甜猕猴桃奶昔",
              ko: "새콤달콤한 키위 스무디",
              ja: "酸味と甘みのキウイスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "vitamin-c", "healthy", "exotic"]
          },
          {
            id: "passionfruit-smoothie",
            name: {
              en: "Passionfruit Smoothie",
              th: "เสาวรสปั่น",
              zh: "百香果奶昔",
              ko: "패션프루트 스무디",
              ja: "パッションフルーツスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/passionfruit-smoothie.png",
            description: {
              en: "Tropical passionfruit smoothie with aromatic flavor",
              th: "เสาวรสเขตร้อนปั่นหอมหวาน",
              zh: "热带百香果香甜奶昔",
              ko: "향긋한 맛의 트로피컬 패션프루트 스무디",
              ja: "香り豊かなトロピカルパッションフルーツスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["tropical", "aromatic", "exotic", "vitamin-c"]
          },
          {
            id: "blueberry-smoothie",
            name: {
              en: "Blueberry Smoothie",
              th: "บลูเบอร์รี่ปั่น",
              zh: "蓝莓奶昔",
              ko: "블루베리 스무디",
              ja: "ブルーベリースムージー"
            },
            price: 35,
            image: "/images/drinking-shop/blueberry-smoothie.png",
            description: {
              en: "Rich antioxidant blueberry smoothie",
              th: "บลูเบอร์รี่ปั่นอุดมไปด้วยสารต้านอนุมูลอิสระ",
              zh: "富含抗氧化剂的蓝莓奶昔",
              ko: "항산화 성분이 풍부한 블루베리 스무디",
              ja: "抗酸化成分豊富なブルーベリースムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["berry", "antioxidants", "healthy", "superfood"]
          },
          {
            id: "coconut-smoothie",
            name: {
              en: "Coconut Smoothie",
              th: "มะพร้าวปั่น",
              zh: "椰子奶昔",
              ko: "코코넛 스무디",
              ja: "ココナッツスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/coconut-smoothie.png",
            description: {
              en: "Creamy tropical coconut smoothie",
              th: "มะพร้าวเขตร้อนปั่นครีมมี่",
              zh: "奶香热带椰子奶昔",
              ko: "크리미한 트로피컬 코코넛 스무디",
              ja: "クリーミートロピカルココナッツスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["tropical", "creamy", "natural", "coconut"]
          },
          {
            id: "strawberry-yogurt-smoothie",
            name: {
              en: "Strawberry Yogurt Smoothie",
              th: "สตอเบอร์รี่โยเกิร์ต",
              zh: "草莓酸奶奶昔",
              ko: "딸기 요거트 스무디",
              ja: "ストロベリーヨーグルトスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/strawberry-yogurt-smoothie.png",
            description: {
              en: "Healthy strawberry yogurt smoothie with probiotics",
              th: "สตอเบอร์รี่โยเกิร์ตเพื่อสุขภาพอุดมด้วยโปรไบโอติก",
              zh: "健康草莓酸奶奶昔含益生菌",
              ko: "프로바이오틱스가 풍부한 건강한 딸기 요거트 스무디",
              ja: "プロバイオティクス豊富な健康的ストロベリーヨーグルトスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["yogurt", "berry", "healthy", "probiotics"]
          },
          {
            id: "butterfly-pea-milk",
            name: {
              en: "Butterfly Pea with Fresh Milk",
              th: "อัญชันนมสด",
              zh: "蝶豆花鲜奶",
              ko: "나비콩 신선한 우유",
              ja: "バタフライピー フレッシュミルク"
            },
            price: 35,
            image: "/images/drinking-shop/butterfly-pea-milk.png",
            description: {
              en: "Beautiful blue butterfly pea flower with creamy milk",
              th: "อัญชันสีน้ำเงินสวยงามผสมนมสดครีมมี่",
              zh: "美丽蓝色蝶豆花配香浓鲜奶",
              ko: "크리미한 우유와 함께하는 아름다운 파란 나비콩 꽃",
              ja: "クリーミーミルクと美しい青いバタフライピーフラワー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["herbal", "natural", "colorful", "unique"]
          },
          {
            id: "banana-caramel-smoothie",
            name: {
              en: "Banana Caramel Smoothie",
              th: "กล้วยปั่นนมคาราเมล",
              zh: "香蕉焦糖奶昔",
              ko: "바나나 카라멜 스무디",
              ja: "バナナキャラメルスムージー"
            },
            price: 35,
            image: "/images/drinking-shop/banana-caramel-smoothie.png",
            description: {
              en: "Rich banana smoothie with sweet caramel swirl",
              th: "กล้วยปั่นเข้มข้นผสมคาราเมลหวานหอม",
              zh: "浓郁香蕉奶昔配香甜焦糖漩涡",
              ko: "달콤한 카라멜 소용돌이가 들어간 진한 바나나 스무디",
              ja: "甘いキャラメル渦巻き入り濃厚バナナスムージー"
            },
            customization: {
              iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
              sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
              size: ["regular"]
            },
            tags: ["fruit", "caramel", "indulgent", "sweet"]
          }
        ]
      }
    ]
  }
};

export const defaultLanguage = 'th';
export const supportedLanguages = ['en', 'th', 'zh', 'ko', 'ja'];