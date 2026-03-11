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
  glossaryTerms?: string[];
  layout?: 'full' | 'half' | 'third'; // panel size in grid
  speaker?: string; // character name for speech bubble
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
  { id: 'fqih', term_fr: 'Fqih', term_ar: 'الفقيه', definition_fr: 'Maître d\'école coranique. Il enseigne le Coran aux enfants et administre la discipline au Msid.', definition_ar: 'معلم المدرسة القرآنية. يعلم القرآن للأطفال ويدير النظام في المسيد.' },
  { id: 'chouafa', term_fr: 'Chouafa', term_ar: 'الشوّافة', definition_fr: 'Voyante ou devineresse traditionnelle. Les femmes du quartier viennent la consulter pour des problèmes personnels.', definition_ar: 'عرافة أو متنبئة تقليدية. نساء الحي يأتين لاستشارتها في مشاكلهن الشخصية.' },
  { id: 'zellige', term_fr: 'Zellige', term_ar: 'الزليج', definition_fr: 'Mosaïque géométrique traditionnelle marocaine, faite de carreaux de terre cuite émaillée taillés à la main.', definition_ar: 'فسيفساء هندسية مغربية تقليدية، مصنوعة من بلاط الطين المطلي المقطوع يدويًا.' },
  { id: 'haik', term_fr: 'Haïk', term_ar: 'الحايك', definition_fr: 'Grand voile blanc porté par les femmes marocaines pour se couvrir en sortant de la maison.', definition_ar: 'ثوب أبيض كبير ترتديه النساء المغربيات لتغطية أنفسهن عند الخروج من المنزل.' },
  { id: 'msid', term_fr: 'Msid', term_ar: 'المسيد', definition_fr: 'École coranique traditionnelle où les enfants apprennent à réciter le Coran sous la supervision du Fqih.', definition_ar: 'مدرسة قرآنية تقليدية حيث يتعلم الأطفال تلاوة القرآن تحت إشراف الفقيه.' },
  { id: 'hammam', term_fr: 'Hammam', term_ar: 'الحمّام', definition_fr: 'Bain public traditionnel. Un rituel social hebdomadaire important pour les familles marocaines.', definition_ar: 'حمام عام تقليدي. طقس اجتماعي أسبوعي مهم للعائلات المغربية.' },
  { id: 'dar', term_fr: 'Dar', term_ar: 'الدار', definition_fr: 'Maison traditionnelle marocaine organisée autour d\'un patio central, abritant souvent plusieurs familles.', definition_ar: 'منزل مغربي تقليدي مبني حول فناء مركزي، وغالبًا ما يأوي عدة عائلات.' },
  { id: 'achoura', term_fr: 'Achoura', term_ar: 'عاشوراء', definition_fr: 'Fête religieuse célébrée le dixième jour du mois de Moharram. Les enfants reçoivent des jouets et des tambourins.', definition_ar: 'عيد ديني يُحتفل به في العاشر من محرم. يتلقى الأطفال ألعابًا ودفوفًا.' },
  { id: 'souk', term_fr: 'Souk', term_ar: 'السوق', definition_fr: 'Marché traditionnel dans les villes arabes et nord-africaines, souvent organisé par corps de métier.', definition_ar: 'سوق تقليدي في المدن العربية وشمال أفريقيا، غالبًا ما يكون منظمًا حسب الحرف.' },
  { id: 'caftan', term_fr: 'Caftan', term_ar: 'القفطان', definition_fr: 'Robe longue et ample, richement brodée, portée lors des occasions spéciales au Maroc.', definition_ar: 'ثوب طويل وفضفاض، مطرز بغنى، يُلبس في المناسبات الخاصة بالمغرب.' },
];

export const boxItems: BoxItem[] = [
  { id: 'glass-button', name_fr: 'Le Bouton de Verre', name_ar: 'الزر الزجاجي', image: '', real_fr: 'Un simple bouton transparent, probablement tombé d\'un vieux vêtement.', real_ar: 'زر شفاف بسيط، ربما سقط من ملابس قديمة.', imaginary_fr: 'Un diamant magique qui capture la lumière du soleil et la transforme en arc-en-ciel sur les murs.', imaginary_ar: 'ماسة سحرية تلتقط ضوء الشمس وتحوّله إلى قوس قزح على الجدران.' },
  { id: 'copper-ring', name_fr: 'La Bague de Cuivre', name_ar: 'خاتم النحاس', image: '', real_fr: 'Un anneau de cuivre terni, sans aucune valeur marchande.', real_ar: 'حلقة نحاسية باهتة، بدون أي قيمة تجارية.', imaginary_fr: 'L\'anneau d\'un prince ancien qui confère à son porteur le pouvoir de parler aux animaux.', imaginary_ar: 'خاتم أمير قديم يمنح حامله القدرة على التحدث مع الحيوانات.' },
  { id: 'beads', name_fr: 'Les Perles Colorées', name_ar: 'الخرز الملون', image: '', real_fr: 'Quelques perles de verre dépareillées, restes d\'un collier cassé.', real_ar: 'بضع خرزات زجاجية غير متطابقة، بقايا عقد مكسور.', imaginary_fr: 'Les larmes pétrifiées d\'une princesse enchantée, chacune contenant un souvenir heureux.', imaginary_ar: 'دموع متحجرة لأميرة مسحورة، كل واحدة تحتوي على ذكرى سعيدة.' },
];

export const chapters: Chapter[] = [
  {
    id: 1, title_fr: 'La Maison de la Chouafa', title_ar: 'دار الشوّافة', coverImage: 'ch1-dar-chouafa',
    panels: [
      { id: 'ch1-p1', image: 'ch1-dar-chouafa', layout: 'full', text_fr: 'Je me souviens. J\'avais six ans. Le monde, pour moi, se limitait aux murs de Dar Chouafa, la maison de la voyante, où nous habitions au deuxième étage.', text_ar: 'أتذكر. كنت في السادسة من عمري. كان العالم بالنسبة لي يقتصر على جدران دار الشوّافة، بيت العرّافة، حيث كنا نسكن في الطابق الثاني.', glossaryTerms: ['chouafa', 'dar'], speaker: 'Sidi Mohammed' },
      { id: 'ch1-p2', image: 'ch1-chouafa-ritual', layout: 'half', text_fr: 'Au rez-de-chaussée, la Chouafa recevait ses clientes. Des femmes venaient de tout le quartier, apportant leurs secrets et leurs angoisses.', text_ar: 'في الطابق الأرضي، كانت الشوّافة تستقبل زبوناتها. نساء يأتين من كل أنحاء الحي، يحملن أسرارهن وقلقهن.', glossaryTerms: ['chouafa'] },
      { id: 'ch1-p3', image: 'ch1-boy-with-box', layout: 'half', text_fr: 'J\'étais un enfant solitaire. Mon seul compagnon était ma Boîte à Merveilles — un coffret rempli de boutons, de perles et de rêves.', text_ar: 'كنت طفلاً وحيدًا. رفيقي الوحيد كان صندوق العجائب — صندوق صغير مليء بالأزرار والخرز والأحلام.', speaker: 'Sidi Mohammed' },
      { id: 'ch1-p4', image: 'ch1-women-arguing', layout: 'half', text_fr: 'La maison ne dormait jamais. Les voisines se disputaient pour un seau d\'eau, pour une corde à linge.', text_ar: 'البيت لم يكن ينام أبدًا. الجارات يتشاجرن على دلو ماء أو حبل غسيل.' },
      { id: 'ch1-p5', image: 'hero-fez-alley', layout: 'half', text_fr: 'Les ruelles de Fès étaient un labyrinthe. Ma mère me tenait la main dans ces passages étroits, baignés d\'ombre et de lumière.', text_ar: 'كانت أزقة فاس متاهة. أمي تمسك بيدي في هذه الممرات الضيقة، المغمورة بالظل والنور.' },
      { id: 'ch1-p6', image: 'ch1-patio-night', layout: 'full', text_fr: 'La nuit, quand tout le monde dormait, je descendais dans le patio. La lune éclairait les zellige et je me sentais le seul habitant d\'un palais enchanté.', text_ar: 'في الليل، عندما ينام الجميع، كنت أنزل إلى الفناء. القمر يضيء الزليج وكنت أشعر بأنني الساكن الوحيد لقصر مسحور.', glossaryTerms: ['zellige'], speaker: 'Sidi Mohammed' },
    ],
  },
  {
    id: 2, title_fr: 'Le Bain Maure et le Msid', title_ar: 'الحمّام والمسيد', coverImage: 'ch2-hammam',
    panels: [
      { id: 'ch2-p1', image: 'ch2-hammam', layout: 'full', text_fr: 'Le jour du hammam était un rituel. Ma mère s\'y préparait comme pour une cérémonie. La vapeur, la chaleur, les cris des enfants — tout me terrifiait.', text_ar: 'كان يوم الحمّام طقسًا بحد ذاته. كانت أمي تستعد له كأنه احتفال. البخار والحرارة وصراخ الأطفال — كل شيء كان يرعبني.', glossaryTerms: ['hammam'], speaker: 'Sidi Mohammed' },
      { id: 'ch2-p2', image: 'ch2-hammam-scrub', layout: 'half', text_fr: 'Ma mère me frottait avec une énergie féroce. Je criais, mais elle continuait, convaincue que la propreté était une forme de piété.', text_ar: 'كانت أمي تفركني بقوة شرسة. كنت أصرخ، لكنها تستمر، مقتنعة بأن النظافة شكل من أشكال التقوى.', speaker: 'Lalla Zoubida' },
      { id: 'ch2-p3', image: 'ch2-msid', layout: 'half', text_fr: 'Au Msid, le Fqih régnait avec sa baguette de cognassier. Nous récitions le Coran en balançant nos corps, hypnotisés par le rythme.', text_ar: 'في المسيد، كان الفقيه يحكم بعصا السفرجل. كنا نتلو القرآن ونتمايل بأجسادنا، منوّمين بالإيقاع.', glossaryTerms: ['msid', 'fqih'] },
      { id: 'ch2-p4', image: 'ch2-fqih-punishment', layout: 'half', text_fr: 'Malheur à celui qui se trompait ! La baguette du Fqih s\'abattait sans pitié. Les garçons pleuraient en silence.', text_ar: 'ويل لمن أخطأ! عصا الفقيه تهوي بلا رحمة. الأولاد يبكون في صمت.', glossaryTerms: ['fqih'] },
      { id: 'ch2-p5', image: 'ch2-laundry-day', layout: 'half', text_fr: 'Le jour de la lessive, ma mère sortait drapée dans son haïk blanc. Je la suivais comme un petit fantôme.', text_ar: 'في يوم الغسيل، كانت أمي تخرج ملتحفة بحايكها الأبيض. كنت أتبعها كشبح صغير.', glossaryTerms: ['haik'] },
      { id: 'ch2-p6', image: 'ch2-fountain-wash', layout: 'full', text_fr: 'À la fontaine, les femmes lavaient et bavardaient. Les potins du quartier s\'échangeaient entre deux coups de battoir. C\'était leur monde.', text_ar: 'عند النافورة، كانت النساء يغسلن ويثرثرن. أخبار الحي تتبادل بين ضربتي مدق. كان عالمهن.' },
    ],
  },
  {
    id: 3, title_fr: 'La Boîte à Merveilles', title_ar: 'صندوق العجائب', coverImage: 'ch3-box-treasures',
    panels: [
      { id: 'ch3-p1', image: 'ch3-father-workshop', layout: 'full', text_fr: 'Mon père, Sidi Abdeslam, était tisserand. Je le regardais travailler, ses mains habiles faisant danser les fils colorés.', text_ar: 'أبي، سيدي عبد السلام، كان نسّاجًا. كنت أراقبه يعمل، يداه الماهرتان تُرقّصان الخيوط الملونة.' },
      { id: 'ch3-p2', image: 'ch3-box-treasures', layout: 'half', text_fr: 'Le soir, je sortais ma Boîte à Merveilles. Chaque objet avait une âme, une histoire. Le bouton de verre devenait un diamant royal.', text_ar: 'في المساء، كنت أُخرج صندوق العجائب. كل شيء كانت له روح وقصة. الزر الزجاجي يتحول إلى ماسة ملكية.', speaker: 'Sidi Mohammed' },
      { id: 'ch3-p3', image: 'ch3-box-glow', layout: 'half', text_fr: 'Les objets semblaient briller d\'une lumière propre, comme des étoiles captives dans un coffre de bois.', text_ar: 'الأشياء بداخله كانت تبدو مضيئة بنورها الخاص، كنجوم أسيرة في صندوق خشبي.' },
      { id: 'ch3-p4', image: 'ch3-dream-sequence', layout: 'full', text_fr: 'Dans mes rêves, je volais parmi des boutons géants qui tournaient comme des planètes. Les perles étaient des lunes, et moi, le roi de cet univers.', text_ar: 'في أحلامي، كنت أطير بين أزرار عملاقة تدور كالكواكب. الخرز كان أقمارًا، وأنا ملك هذا الكون.', speaker: 'Sidi Mohammed' },
      { id: 'ch3-p5', image: 'ch3-rooftop-crying', layout: 'half', text_fr: 'Mais certains soirs, même la Boîte ne suffisait pas. La solitude était trop lourde. Je pleurais sur la terrasse.', text_ar: 'لكن في بعض الليالي، حتى الصندوق لم يكن كافيًا. كانت الوحدة ثقيلة جدًا. كنت أبكي على السطح.' },
      { id: 'ch3-p6', image: 'ch1-boy-with-box', layout: 'half', text_fr: 'Puis je serrais ma boîte contre ma poitrine, et je m\'endormais en rêvant d\'un monde meilleur.', text_ar: 'ثم كنت أضم صندوقي إلى صدري، وأنام وأنا أحلم بعالم أفضل.', speaker: 'Sidi Mohammed' },
    ],
  },
  {
    id: 4, title_fr: 'Les Querelles de Dar Chouafa', title_ar: 'خصومات دار الشوّافة', coverImage: 'ch4-rahma-fight',
    panels: [
      { id: 'ch4-p1', image: 'ch4-rahma-fight', layout: 'full', text_fr: 'Rahma, notre voisine du premier étage, était une femme colérique. Un jour, une dispute éclata entre elle et ma mère au sujet de la terrasse.', text_ar: 'رحمة، جارتنا في الطابق الأول، كانت امرأة سريعة الغضب. ذات يوم، اندلع شجار بينها وبين أمي بسبب السطح.' },
      { id: 'ch4-p2', image: 'ch1-women-arguing', layout: 'half', text_fr: 'Les cris montaient dans la cage d\'escalier. Les autres voisines prenaient parti. Toute la maison tremblait de rage.', text_ar: 'الصراخ يتصاعد في بئر السلم. الجارات الأخريات ينحزن. البيت كله يرتجف من الغضب.', speaker: 'Lalla Zoubida' },
      { id: 'ch4-p3', image: 'ch1-boy-with-box', layout: 'half', text_fr: 'Je me réfugiais dans un coin, serrant ma Boîte contre moi. Les cris des adultes me semblaient venir d\'un autre monde.', text_ar: 'كنت ألجأ إلى زاوية، أضم صندوقي. صراخ الكبار كان يبدو قادمًا من عالم آخر.', speaker: 'Sidi Mohammed' },
      { id: 'ch4-p4', image: 'ch1-dar-chouafa', layout: 'half', text_fr: 'Finalement, Lalla Kenza, la Chouafa, montait pour calmer tout le monde. Sa voix grave imposait le silence.', text_ar: 'في النهاية، كانت لالة كنزة، الشوّافة، تصعد لتهدئة الجميع. صوتها الخشن يفرض الصمت.', glossaryTerms: ['chouafa'] },
      { id: 'ch4-p5', image: 'ch1-patio-night', layout: 'half', text_fr: 'Le soir, la paix revenait. Ma mère pleurait en silence. Mon père disait que les querelles des femmes ne durent jamais.', text_ar: 'في المساء، يعود السلام. أمي تبكي في صمت. أبي يقول إن خصومات النساء لا تدوم.' },
    ],
  },
  {
    id: 5, title_fr: 'Abdallah l\'Épicier', title_ar: 'عبد الله البقّال', coverImage: 'ch5-grocer-shop',
    panels: [
      { id: 'ch5-p1', image: 'ch5-grocer-shop', layout: 'full', text_fr: 'Abdallah l\'épicier était le cœur du quartier. Sa boutique sentait les épices, le savon et les dattes sèches. Il connaissait tous les secrets de la médina.', text_ar: 'عبد الله البقّال كان قلب الحي. دكانه تفوح منه رائحة التوابل والصابون والتمر اليابس. كان يعرف كل أسرار المدينة.' },
      { id: 'ch5-p2', image: 'hero-fez-alley', layout: 'half', text_fr: 'Ma mère m\'envoyait chez lui chaque jour. "Va chez Abdallah, prends du sucre et du thé." Je traversais les ruelles en courant.', text_ar: 'كانت أمي ترسلني إليه كل يوم. "اذهب عند عبد الله، خذ سكر وشاي." كنت أقطع الأزقة راكضًا.', speaker: 'Lalla Zoubida' },
      { id: 'ch5-p3', image: 'ch5-grocer-shop', layout: 'half', text_fr: 'Abdallah me donnait parfois un bonbon. Il me tapotait la tête et disait : "Tu es un bon garçon, comme ton père."', text_ar: 'كان عبد الله يعطيني أحيانًا حلوى. يربت على رأسي ويقول: "أنت ولد طيب، مثل أبيك."', speaker: 'Abdallah' },
      { id: 'ch5-p4', image: 'ch3-father-workshop', layout: 'half', text_fr: 'Mon père passait le voir après le travail. Ils buvaient le thé ensemble et parlaient de tout et de rien.', text_ar: 'كان أبي يمر عليه بعد العمل. يشربان الشاي معًا ويتحدثان عن كل شيء ولا شيء.' },
      { id: 'ch5-p5', image: 'ch1-dar-chouafa', layout: 'half', text_fr: 'Abdallah était aussi le messager du quartier. Il rapportait les nouvelles, les mariages, les naissances et les morts.', text_ar: 'كان عبد الله أيضًا رسول الحي. ينقل الأخبار والأعراس والولادات والوفيات.' },
    ],
  },
  {
    id: 6, title_fr: 'La Maladie du Fqih', title_ar: 'مرض الفقيه', coverImage: 'ch6-fqih-sick',
    panels: [
      { id: 'ch6-p1', image: 'ch2-msid', layout: 'full', text_fr: 'Un jour, le Fqih ne vint pas au Msid. Les enfants, d\'abord joyeux, sentirent vite un vide étrange. Sans lui, le Msid n\'avait plus de sens.', text_ar: 'ذات يوم، لم يأتِ الفقيه إلى المسيد. الأطفال، الفرحون أولاً، شعروا سريعًا بفراغ غريب. بدونه، المسيد فقد معناه.', glossaryTerms: ['fqih', 'msid'] },
      { id: 'ch6-p2', image: 'ch6-fqih-sick', layout: 'half', text_fr: 'On apprit qu\'il était malade. Ma mère dit que c\'était grave. Les femmes du quartier préparèrent des plats pour sa famille.', text_ar: 'علمنا أنه مريض. قالت أمي إن الأمر خطير. نساء الحي حضّرن أطباقًا لعائلته.' },
      { id: 'ch6-p3', image: 'ch1-boy-with-box', layout: 'half', text_fr: 'Moi, je priais pour sa guérison. Non par affection, mais par peur. Un nouveau Fqih pouvait être encore plus sévère.', text_ar: 'أنا دعوت لشفائه. ليس حبًا، بل خوفًا. فقيه جديد قد يكون أشد قسوة.', speaker: 'Sidi Mohammed' },
      { id: 'ch6-p4', image: 'ch6-fqih-sick', layout: 'half', text_fr: 'Après deux semaines, le Fqih revint, amaigri mais vivant. Sa baguette frappa la première planche avec une vigueur retrouvée.', text_ar: 'بعد أسبوعين، عاد الفقيه، نحيلاً لكنه حي. عصاه ضربت أول لوح بقوة متجددة.' },
      { id: 'ch6-p5', image: 'ch2-fqih-punishment', layout: 'half', text_fr: 'Les choses reprirent leur cours. Le Msid résonna de nouveau des voix enfantines récitant les versets. Comme si rien n\'avait changé.', text_ar: 'عادت الأمور إلى مجراها. المسيد عاد ليصدح بأصوات الأطفال تتلو الآيات. كأن شيئًا لم يتغير.' },
    ],
  },
  {
    id: 7, title_fr: 'La Fête d\'Achoura', title_ar: 'عيد عاشوراء', coverImage: 'ch7-achoura',
    panels: [
      { id: 'ch7-p1', image: 'ch7-achoura', layout: 'full', text_fr: 'Achoura arriva comme une explosion de joie. Les rues de Fès se remplirent de tambourins, de trompettes et de cris d\'enfants.', text_ar: 'جاءت عاشوراء كانفجار من الفرح. شوارع فاس امتلأت بالدفوف والأبواق وصرخات الأطفال.', glossaryTerms: ['achoura'] },
      { id: 'ch7-p2', image: 'ch7-achoura', layout: 'half', text_fr: 'Ma mère m\'acheta un petit tambourin. Je le serrai contre moi comme si c\'était le plus beau trésor du monde.', text_ar: 'اشترت لي أمي دفًا صغيرًا. ضممته إليّ كأنه أجمل كنز في العالم.', speaker: 'Sidi Mohammed' },
      { id: 'ch7-p3', image: 'ch3-box-treasures', layout: 'half', text_fr: 'J\'ajoutai une perle trouvée dans la rue à ma Boîte à Merveilles. Ce jour-là, la Boîte semblait chanter avec les tambourins.', text_ar: 'أضفت خرزة وجدتها في الشارع إلى صندوق العجائب. في ذلك اليوم، بدا الصندوق يغني مع الدفوف.' },
      { id: 'ch7-p4', image: 'ch1-dar-chouafa', layout: 'half', text_fr: 'Le soir d\'Achoura, les femmes de Dar Chouafa allumèrent un grand feu dans la cour. Les flammes dansaient sur les zellige.', text_ar: 'مساء عاشوراء، أشعلت نساء دار الشوّافة نارًا كبيرة في الفناء. الألسنة ترقص على الزليج.', glossaryTerms: ['zellige'] },
      { id: 'ch7-p5', image: 'ch1-patio-night', layout: 'half', text_fr: 'Pour la première fois, les voisines oublièrent leurs querelles. La musique adoucit même le cœur de Rahma.', text_ar: 'لأول مرة، نسيت الجارات خصوماتهن. الموسيقى ليّنت حتى قلب رحمة.' },
    ],
  },
  {
    id: 8, title_fr: 'Les Bracelets de Ma Mère', title_ar: 'أساور أمي', coverImage: 'ch8-bracelet',
    panels: [
      { id: 'ch8-p1', image: 'ch8-bracelet', layout: 'full', text_fr: 'Ma mère possédait deux bracelets en or, héritage de sa mère. Elle les portait avec une fierté silencieuse. C\'était son seul trésor.', text_ar: 'كانت أمي تملك سوارين ذهبيين، إرث من جدتي. كانت ترتديهما بفخر صامت. كانا كنزها الوحيد.' },
      { id: 'ch8-p2', image: 'ch2-laundry-day', layout: 'half', text_fr: 'Lalla Aïcha, notre voisine riche, se vantait de ses bijoux. Ma mère baissait les yeux, mais je voyais sa douleur.', text_ar: 'لالة عائشة، جارتنا الغنية، كانت تتباهى بمجوهراتها. أمي تخفض عينيها، لكنني كنت أرى ألمها.', speaker: 'Sidi Mohammed' },
      { id: 'ch8-p3', image: 'ch8-bracelet', layout: 'half', text_fr: '"Un jour, je t\'achèterai des bracelets plus beaux," promit mon père. Ma mère sourit, mais ses yeux restèrent tristes.', text_ar: '"يومًا ما سأشتري لكِ أساور أجمل،" وعد أبي. ابتسمت أمي، لكن عينيها بقيتا حزينتين.', speaker: 'Sidi Abdeslam' },
      { id: 'ch8-p4', image: 'ch3-box-treasures', layout: 'half', text_fr: 'Dans ma Boîte, la bague de cuivre me semblait plus précieuse que tous les bracelets en or du monde.', text_ar: 'في صندوقي، خاتم النحاس بدا لي أثمن من كل أساور الذهب في العالم.', speaker: 'Sidi Mohammed' },
      { id: 'ch8-p5', image: 'ch3-father-workshop', layout: 'half', text_fr: 'Mon père travaillait plus dur. Le soir, ses doigts étaient rougis par les fils. Mais il ne se plaignait jamais.', text_ar: 'أبي يعمل بجد أكثر. في المساء، أصابعه محمرّة من الخيوط. لكنه لم يشتكِ أبدًا.' },
    ],
  },
  {
    id: 9, title_fr: 'La Ruine du Père', title_ar: 'خراب الأب', coverImage: 'ch9-father-ruin',
    panels: [
      { id: 'ch9-p1', image: 'ch9-father-ruin', layout: 'full', text_fr: 'Un jour, mon père rentra le visage défait. Son associé l\'avait trahi. L\'atelier était perdu. Nous étions ruinés.', text_ar: 'ذات يوم، عاد أبي بوجه محطم. شريكه خانه. الورشة ضاعت. أصبحنا خرابًا.' },
      { id: 'ch9-p2', image: 'ch8-bracelet', layout: 'half', text_fr: 'Ma mère vendit ses bracelets en or — son seul trésor — pour nourrir la famille. Ses poignets nus me brisèrent le cœur.', text_ar: 'باعت أمي أساورها الذهبية — كنزها الوحيد — لإطعام العائلة. معصماها العاريان حطما قلبي.', speaker: 'Sidi Mohammed' },
      { id: 'ch9-p3', image: 'ch3-rooftop-crying', layout: 'half', text_fr: 'Sur la terrasse, je pleurais. Pourquoi le monde était-il si injuste ? Pourquoi les gens trahissaient-ils ?', text_ar: 'على السطح، بكيت. لماذا العالم ظالم هكذا؟ لماذا يخون الناس؟', speaker: 'Sidi Mohammed' },
      { id: 'ch9-p4', image: 'ch9-father-ruin', layout: 'half', text_fr: 'Mon père décida de partir chercher du travail au souk des tisserands, loin de notre quartier. Il partait chaque matin avant l\'aube.', text_ar: 'قرر أبي الذهاب للبحث عن عمل في سوق النسّاجين، بعيدًا عن حينا. كان يخرج كل صباح قبل الفجر.', glossaryTerms: ['souk'] },
      { id: 'ch9-p5', image: 'ch3-box-glow', layout: 'half', text_fr: 'Ma Boîte à Merveilles ne brillait plus. Les objets semblaient ternes, comme si eux aussi partageaient ma tristesse.', text_ar: 'صندوق العجائب لم يعد يلمع. الأشياء بدت باهتة، كأنها هي أيضًا تشاركني حزني.' },
    ],
  },
  {
    id: 10, title_fr: 'Lalla Aïcha et Moulay Larbi', title_ar: 'لالة عائشة ومولاي العربي', coverImage: 'ch10-wedding',
    panels: [
      { id: 'ch10-p1', image: 'ch10-wedding', layout: 'full', text_fr: 'Lalla Aïcha, l\'amie de ma mère, était une femme fière. Son mari, Moulay Larbi, l\'avait répudiée pour épouser une femme plus jeune.', text_ar: 'لالة عائشة، صديقة أمي، كانت امرأة فخورة. زوجها مولاي العربي طلّقها ليتزوج امرأة أصغر.' },
      { id: 'ch10-p2', image: 'ch4-rahma-fight', layout: 'half', text_fr: 'Ma mère et Lalla Aïcha passaient des heures à pleurer ensemble. Les malheurs des unes consolaient les autres.', text_ar: 'أمي ولالة عائشة يقضين ساعات يبكيان معًا. مصائب الواحدة تعزّي الأخرى.' },
      { id: 'ch10-p3', image: 'ch1-chouafa-ritual', layout: 'half', text_fr: 'Elles consultèrent la Chouafa. Celle-ci brûla de l\'encens et murmura des incantations. Elle promit que Moulay Larbi reviendrait.', text_ar: 'استشارتا الشوّافة. أحرقت البخور وهمست بتعويذات. وعدت أن مولاي العربي سيعود.', glossaryTerms: ['chouafa'] },
      { id: 'ch10-p4', image: 'ch10-wedding', layout: 'half', text_fr: 'Les jours passèrent. Moulay Larbi finit par revenir, repentant. Mais la blessure de Lalla Aïcha ne guérit jamais tout à fait.', text_ar: 'مرت الأيام. عاد مولاي العربي في النهاية، نادمًا. لكن جرح لالة عائشة لم يلتئم تمامًا.' },
      { id: 'ch10-p5', image: 'ch1-dar-chouafa', layout: 'half', text_fr: 'Ma mère dit : "Les hommes sont tous les mêmes." Je ne comprenais pas, mais je sentais la vérité dans sa voix.', text_ar: 'قالت أمي: "الرجال كلهم سواء." لم أفهم، لكنني شعرت بالحقيقة في صوتها.', speaker: 'Lalla Zoubida' },
    ],
  },
  {
    id: 11, title_fr: 'Le Souk et la Vie', title_ar: 'السوق والحياة', coverImage: 'ch11-souk',
    panels: [
      { id: 'ch11-p1', image: 'ch11-souk', layout: 'full', text_fr: 'Mon père m\'emmena au souk pour la première fois. C\'était un monde de couleurs, d\'odeurs et de cris que je n\'avais jamais imaginé.', text_ar: 'أخذني أبي إلى السوق لأول مرة. كان عالمًا من الألوان والروائح والأصوات لم أتخيله قط.', glossaryTerms: ['souk'], speaker: 'Sidi Mohammed' },
      { id: 'ch11-p2', image: 'ch11-souk', layout: 'half', text_fr: 'Des montagnes d\'épices, des pyramides de fruits, des artisans martelant le cuivre. Chaque ruelle avait sa propre musique.', text_ar: 'جبال من التوابل، أهرام من الفواكه، حرفيون يطرقون النحاس. كل زقاق له موسيقاه الخاصة.' },
      { id: 'ch11-p3', image: 'ch5-grocer-shop', layout: 'half', text_fr: 'Mon père acheta du sucre, du thé et de la farine. Il marchandait avec une patience que je ne lui connaissais pas.', text_ar: 'اشترى أبي سكرًا وشايًا ودقيقًا. كان يساوم بصبر لم أعرفه فيه.' },
      { id: 'ch11-p4', image: 'hero-fez-alley', layout: 'half', text_fr: 'Sur le chemin du retour, il me porta sur ses épaules. Je voyais Fès d\'en haut pour la première fois. La ville était immense.', text_ar: 'في طريق العودة، حملني على كتفيه. رأيت فاس من الأعلى لأول مرة. المدينة كانت هائلة.', speaker: 'Sidi Mohammed' },
      { id: 'ch11-p5', image: 'ch3-father-workshop', layout: 'half', text_fr: '"Un jour, tu seras un grand artisan, toi aussi," dit mon père. Je serrai sa main plus fort.', text_ar: '"يومًا ما ستكون حرفيًا كبيرًا أنت أيضًا،" قال أبي. شددت على يده أكثر.', speaker: 'Sidi Abdeslam' },
    ],
  },
  {
    id: 12, title_fr: 'Le Retour à la Boîte', title_ar: 'العودة إلى الصندوق', coverImage: 'ch12-return',
    panels: [
      { id: 'ch12-p1', image: 'ch12-return', layout: 'full', text_fr: 'Mon père revint un soir avec le sourire. Il avait trouvé un nouvel atelier. Les jours de misère touchaient à leur fin.', text_ar: 'عاد أبي ذات مساء مبتسمًا. وجد ورشة جديدة. أيام البؤس كانت تقترب من نهايتها.' },
      { id: 'ch12-p2', image: 'ch8-bracelet', layout: 'half', text_fr: 'Il promit de racheter les bracelets de ma mère. Elle pleura, mais cette fois, de joie.', text_ar: 'وعد بأن يشتري أساور أمي من جديد. بكت، لكن هذه المرة من الفرح.', speaker: 'Sidi Abdeslam' },
      { id: 'ch12-p3', image: 'ch3-box-treasures', layout: 'half', text_fr: 'Ce soir-là, je sortis ma Boîte à Merveilles. Les objets brillaient de nouveau. Le bouton de verre captait la lumière de la bougie.', text_ar: 'في ذلك المساء، أخرجت صندوق العجائب. الأشياء تلمع من جديد. الزر الزجاجي يلتقط ضوء الشمعة.', speaker: 'Sidi Mohammed' },
      { id: 'ch12-p4', image: 'ch3-dream-sequence', layout: 'full', text_fr: 'Je m\'endormis en rêvant que le monde entier était une immense Boîte à Merveilles, remplie de trésors que personne ne voyait sauf moi.', text_ar: 'نمت وأنا أحلم أن العالم كله صندوق عجائب هائل، مليء بكنوز لا يراها أحد سواي.' },
      { id: 'ch12-p5', image: 'ch1-patio-night', layout: 'half', text_fr: 'La vie reprit son cours à Dar Chouafa. Les querelles, les rires, le bruit de la fontaine — tout continuait comme avant.', text_ar: 'الحياة عادت إلى مجراها في دار الشوّافة. الخصومات والضحك وصوت النافورة — كل شيء يستمر كما كان.' },
      { id: 'ch12-p6', image: 'ch1-boy-with-box', layout: 'half', text_fr: 'Et moi, Sidi Mohammed, je restais cet enfant solitaire avec sa boîte, cherchant la merveille dans chaque instant du jour.', text_ar: 'وأنا، سيدي محمد، بقيت ذلك الطفل الوحيد بصندوقه، يبحث عن العجائب في كل لحظة من النهار.', speaker: 'Sidi Mohammed' },
    ],
  },
];
