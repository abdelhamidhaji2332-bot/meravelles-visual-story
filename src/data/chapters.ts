export type LangMode = 'fr' | 'ar' | 'both';

export interface GlossaryTerm {
  id: string;
  term_fr: string;
  term_ar: string;
  definition_fr: string;
  definition_ar: string;
}

export interface Panel {
  id: string;
  image: string;
  text_fr: string;
  text_ar: string;
  glossaryTerms?: string[]; // IDs of glossary terms in this panel
}

export interface BoxItem {
  id: string;
  name_fr: string;
  name_ar: string;
  image: string;
  real_fr: string;
  real_ar: string;
  imaginary_fr: string;
  imaginary_ar: string;
}

export interface Chapter {
  id: number;
  title_fr: string;
  title_ar: string;
  coverImage: string;
  panels: Panel[];
}

export const glossary: GlossaryTerm[] = [
  {
    id: 'fqih',
    term_fr: 'Fqih',
    term_ar: 'الفقيه',
    definition_fr: 'Maître d\'école coranique. Il enseigne le Coran aux enfants et administre la discipline au Msid.',
    definition_ar: 'معلم المدرسة القرآنية. يعلم القرآن للأطفال ويدير النظام في المسيد.',
  },
  {
    id: 'chouafa',
    term_fr: 'Chouafa',
    term_ar: 'الشوّافة',
    definition_fr: 'Voyante ou devineresse traditionnelle. Les femmes du quartier viennent la consulter pour des problèmes personnels.',
    definition_ar: 'عرافة أو متنبئة تقليدية. نساء الحي يأتين لاستشارتها في مشاكلهن الشخصية.',
  },
  {
    id: 'zellige',
    term_fr: 'Zellige',
    term_ar: 'الزليج',
    definition_fr: 'Mosaïque géométrique traditionnelle marocaine, faite de carreaux de terre cuite émaillée taillés à la main.',
    definition_ar: 'فسيفساء هندسية مغربية تقليدية، مصنوعة من بلاط الطين المطلي المقطوع يدويًا.',
  },
  {
    id: 'haik',
    term_fr: 'Haïk',
    term_ar: 'الحايك',
    definition_fr: 'Grand voile blanc porté par les femmes marocaines pour se couvrir en sortant de la maison.',
    definition_ar: 'ثوب أبيض كبير ترتديه النساء المغربيات لتغطية أنفسهن عند الخروج من المنزل.',
  },
  {
    id: 'msid',
    term_fr: 'Msid',
    term_ar: 'المسيد',
    definition_fr: 'École coranique traditionnelle où les enfants apprennent à réciter le Coran sous la supervision du Fqih.',
    definition_ar: 'مدرسة قرآنية تقليدية حيث يتعلم الأطفال تلاوة القرآن تحت إشراف الفقيه.',
  },
  {
    id: 'hammam',
    term_fr: 'Hammam',
    term_ar: 'الحمّام',
    definition_fr: 'Bain public traditionnel. Un rituel social hebdomadaire important pour les familles marocaines.',
    definition_ar: 'حمام عام تقليدي. طقس اجتماعي أسبوعي مهم للعائلات المغربية.',
  },
  {
    id: 'dar',
    term_fr: 'Dar',
    term_ar: 'الدار',
    definition_fr: 'Maison traditionnelle marocaine organisée autour d\'un patio central, abritant souvent plusieurs familles.',
    definition_ar: 'منزل مغربي تقليدي مبني حول فناء مركزي، وغالبًا ما يأوي عدة عائلات.',
  },
];

export const boxItems: BoxItem[] = [
  {
    id: 'glass-button',
    name_fr: 'Le Bouton de Verre',
    name_ar: 'الزر الزجاجي',
    image: '', // will use ch3-box-treasures
    real_fr: 'Un simple bouton transparent, probablement tombé d\'un vieux vêtement.',
    real_ar: 'زر شفاف بسيط، ربما سقط من ملابس قديمة.',
    imaginary_fr: 'Un diamant magique qui capture la lumière du soleil et la transforme en arc-en-ciel sur les murs.',
    imaginary_ar: 'ماسة سحرية تلتقط ضوء الشمس وتحوّله إلى قوس قزح على الجدران.',
  },
  {
    id: 'copper-ring',
    name_fr: 'La Bague de Cuivre',
    name_ar: 'خاتم النحاس',
    image: '',
    real_fr: 'Un anneau de cuivre terni, sans aucune valeur marchande.',
    real_ar: 'حلقة نحاسية باهتة، بدون أي قيمة تجارية.',
    imaginary_fr: 'L\'anneau d\'un prince ancien qui confère à son porteur le pouvoir de parler aux animaux.',
    imaginary_ar: 'خاتم أمير قديم يمنح حامله القدرة على التحدث مع الحيوانات.',
  },
  {
    id: 'beads',
    name_fr: 'Les Perles Colorées',
    name_ar: 'الخرز الملون',
    image: '',
    real_fr: 'Quelques perles de verre dépareillées, restes d\'un collier cassé.',
    real_ar: 'بضع خرزات زجاجية غير متطابقة، بقايا عقد مكسور.',
    imaginary_fr: 'Les larmes pétrifiées d\'une princesse enchantée, chacune contenant un souvenir heureux.',
    imaginary_ar: 'دموع متحجرة لأميرة مسحورة، كل واحدة تحتوي على ذكرى سعيدة.',
  },
];

export const chapters: Chapter[] = [
  {
    id: 1,
    title_fr: 'La Maison de la Chouafa',
    title_ar: 'دار الشوّافة',
    coverImage: 'ch1-dar-chouafa',
    panels: [
      {
        id: 'ch1-p1',
        image: 'ch1-dar-chouafa',
        text_fr: 'Je me souviens. J\'avais six ans. Le monde, pour moi, se limitait aux murs de Dar Chouafa, la maison de la voyante, où nous habitions au deuxième étage.',
        text_ar: 'أتذكر. كنت في السادسة من عمري. كان العالم بالنسبة لي يقتصر على جدران دار الشوّافة، بيت العرّافة، حيث كنا نسكن في الطابق الثاني.',
        glossaryTerms: ['chouafa', 'dar'],
      },
      {
        id: 'ch1-p2',
        image: 'ch1-boy-with-box',
        text_fr: 'J\'étais un enfant solitaire. Je n\'avais pas d\'amis. Mon seul compagnon était ma Boîte à Merveilles, cachée sous mon lit — un coffret rempli de boutons, de perles et de rêves.',
        text_ar: 'كنت طفلاً وحيدًا. لم يكن لدي أصدقاء. رفيقي الوحيد كان صندوق العجائب، مخبّأ تحت سريري — صندوق صغير مليء بالأزرار والخرز والأحلام.',
      },
      {
        id: 'ch1-p3',
        image: 'hero-fez-alley',
        text_fr: 'Les ruelles de Fès étaient un labyrinthe. Ma mère, Lalla Zoubida, me tenait par la main quand nous traversions ces passages étroits, baignés d\'ombre et de lumière.',
        text_ar: 'كانت أزقة فاس متاهة. أمي، لالة زبيدة، كانت تمسك بيدي عندما نعبر هذه الممرات الضيقة، المغمورة بالظل والنور.',
      },
    ],
  },
  {
    id: 2,
    title_fr: 'Le Bain Maure et le Msid',
    title_ar: 'الحمّام والمسيد',
    coverImage: 'ch2-hammam',
    panels: [
      {
        id: 'ch2-p1',
        image: 'ch2-hammam',
        text_fr: 'Le jour du hammam était un rituel. Ma mère s\'y préparait comme pour une cérémonie. La vapeur, la chaleur, les cris des enfants — tout me terrifiait.',
        text_ar: 'كان يوم الحمّام طقسًا بحد ذاته. كانت أمي تستعد له كأنه احتفال. البخار والحرارة وصراخ الأطفال — كل شيء كان يرعبني.',
        glossaryTerms: ['hammam'],
      },
      {
        id: 'ch2-p2',
        image: 'ch2-msid',
        text_fr: 'Au Msid, le Fqih régnait avec sa baguette de cognassier. Nous récitions le Coran en balançant nos corps d\'avant en arrière, hypnotisés par le rythme de nos propres voix.',
        text_ar: 'في المسيد، كان الفقيه يحكم بعصا السفرجل. كنا نتلو القرآن ونتمايل بأجسادنا ذهابًا وإيابًا، منوّمين بإيقاع أصواتنا.',
        glossaryTerms: ['msid', 'fqih'],
      },
      {
        id: 'ch2-p3',
        image: 'ch2-laundry-day',
        text_fr: 'Le jour de la lessive, ma mère sortait drapée dans son haïk blanc. Je la suivais dans les rues comme un petit fantôme. Les femmes du quartier se retrouvaient à la fontaine.',
        text_ar: 'في يوم الغسيل، كانت أمي تخرج ملتحفة بحايكها الأبيض. كنت أتبعها في الشوارع كشبح صغير. كانت نساء الحي يلتقين عند النافورة.',
        glossaryTerms: ['haik'],
      },
    ],
  },
  {
    id: 3,
    title_fr: 'La Boîte à Merveilles',
    title_ar: 'صندوق العجائب',
    coverImage: 'ch3-box-treasures',
    panels: [
      {
        id: 'ch3-p1',
        image: 'ch3-box-treasures',
        text_fr: 'Le soir, quand la maison s\'endormait, je sortais ma Boîte à Merveilles. Chaque objet avait une âme, une histoire. Le bouton de verre devenait un diamant royal.',
        text_ar: 'في المساء، عندما كان البيت ينام، كنت أُخرج صندوق العجائب. كل شيء كانت له روح وقصة. الزر الزجاجي يتحول إلى ماسة ملكية.',
      },
      {
        id: 'ch3-p2',
        image: 'ch3-rooftop-crying',
        text_fr: 'Mais certains soirs, même la Boîte ne suffisait pas. La solitude était trop lourde. Je montais sur la terrasse et je pleurais en regardant les toits de Fès s\'étendre à l\'infini.',
        text_ar: 'لكن في بعض الليالي، حتى الصندوق لم يكن كافيًا. كانت الوحدة ثقيلة جدًا. كنت أصعد إلى السطح وأبكي وأنا أنظر إلى أسطح فاس تمتد إلى ما لا نهاية.',
      },
      {
        id: 'ch3-p3',
        image: 'ch1-boy-with-box',
        text_fr: 'Puis je redescendais, je serrais ma boîte contre ma poitrine, et je m\'endormais en rêvant d\'un monde où les boutons étaient des étoiles et les perles des planètes.',
        text_ar: 'ثم كنت أعود وأضم صندوقي إلى صدري، وأنام وأنا أحلم بعالم تكون فيه الأزرار نجومًا والخرز كواكب.',
      },
    ],
  },
];

// Map image keys to imports
export const imageMap: Record<string, string> = {};
