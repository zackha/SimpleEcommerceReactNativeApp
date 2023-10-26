const productApi = [
  {
    id: 1,
    quantity: '800',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: '',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Salkım Somates',
      currency: 'TRY',
      symbol: '₺',
      production: 'Belçika',
      category: 'Sebze',
    },
    de: {
      title: 'Strauchtomaten',
      currency: 'EUR',
      symbol: '€',
      production: 'Belgien',
      category: 'Gemüse',
    },
  },
  {
    id: 2,
    quantity: '2',
    type: 'l',
    defaultQty: '1',
    defaultTyp: 'l',
    brand: 'Coca Cola',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: '2lt Coca Cola',
      currency: 'TRY',
      symbol: '₺',
      production: '',
      category: 'İçecek',
    },
    de: {
      title: 'Coca Cola Zzgl. Pfand',
      currency: 'EUR',
      symbol: '€',
      production: '',
      category: 'Getränk',
    },
  },
  {
    id: 3,
    quantity: '1000',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Golden Farm',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Yeşil Biber',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Grüne Paprika',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
  {
    id: 4,
    quantity: '1',
    type: 'l',
    defaultQty: '1',
    defaultTyp: 'l',
    brand: 'Fanta',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Fanta Portakal',
      currency: 'TRY',
      symbol: '₺',
      production: '',
      category: 'İçecek',
    },
    de: {
      title: 'Fanta Orange',
      currency: 'EUR',
      symbol: '€',
      production: '',
      category: 'Getränk',
    },
  },
  {
    id: 5,
    quantity: '150',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Deluxe Nuts',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Badem',
      currency: 'TRY',
      symbol: '₺',
      production: 'Antep',
      category: 'Kuruyemiş',
    },
    de: {
      title: 'Mandeln',
      currency: 'EUR',
      symbol: '€',
      production: 'Antep',
      category: 'Nüsse',
    },
  },
  {
    id: 6,
    quantity: '500',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: '',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Kırmızı Biber',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Rote Paprika',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
  {
    id: 7,
    quantity: '1',
    type: 'l',
    defaultQty: '1',
    defaultTyp: 'l',
    brand: 'Pepsi',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Pepsi Kola',
      currency: 'TRY',
      symbol: '₺',
      production: '',
      category: 'İçecek',
    },
    de: {
      title: 'Pepsi Cola',
      currency: 'EUR',
      symbol: '€',
      production: '',
      category: 'Getränk',
    },
  },
  {
    id: 8,
    quantity: '750',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: '',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Mor Lahana',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Rotkohl',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
  {
    id: 9,
    quantity: '1.5',
    type: 'l',
    defaultQty: '1',
    defaultTyp: 'l',
    brand: 'Sprite',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Sprite Gazoz',
      currency: 'TRY',
      symbol: '₺',
      production: '',
      category: 'İçecek',
    },
    de: {
      title: 'Sprite Limonade',
      currency: 'EUR',
      symbol: '€',
      production: '',
      category: 'Getränk',
    },
  },
  {
    id: 10,
    quantity: '250',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Golden Farm',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Mantar',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Pilze',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
  {
    id: 11,
    quantity: '300',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Blue Meadows',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Elma',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Meyve',
    },
    de: {
      title: 'Apfel',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Obst',
    },
  },
  {
    id: 12,
    quantity: '500',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Red Field',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Brokoli',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Brokkoli',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
  {
    id: 13,
    quantity: '150',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Sky Gardens',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Çilek',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Meyve',
    },
    de: {
      title: 'Erdbeere',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Obst',
    },
  },
  {
    id: 14,
    quantity: '750',
    type: 'ml',
    defaultQty: '1',
    defaultTyp: 'L',
    brand: 'Clear Springs',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Su',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'İçecek',
    },
    de: {
      title: 'Wasser',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Getränk',
    },
  },
  {
    id: 15,
    quantity: '200',
    type: 'g',
    defaultQty: '1',
    defaultTyp: 'kg',
    brand: 'Golden Farm',
    image: 'https://via.placeholder.com/1000',
    tr: {
      title: 'Biber',
      currency: 'TRY',
      symbol: '₺',
      production: 'Türkiye',
      category: 'Sebze',
    },
    de: {
      title: 'Paprika',
      currency: 'EUR',
      symbol: '€',
      production: 'Türkei',
      category: 'Gemüse',
    },
  },
];

export default productApi;
