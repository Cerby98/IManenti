import images from './images';

const wines = [
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$16.99',
    newPrice: '$14.99',
    tags: 'Bottle',
    year: 2019,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
  {
    title: 'Winery Castellani S.p.A',
    price: '$56.99',
    tags: 'Bottle',
    year: 2015,
    country: 'Italy',
    region: 'Maremma Toscana',
  },
];

const awards = [
  {
    imgUrl: images.plat2023,
    title: 'Barolo DOCG',
    score: 'Novello and Barolo',
    region: 'Italy, Piedmont',
    year: 'Made from Nebbiolo grapes, this magnificent red, known as the king of wines and the wine of kings is a showpiece of piedmontese wine-making. A wine for big  occasions, it charms and win over the palate with its power and body, leaving a lovely sensation of warmth. Garnet red with orange highlights, it has an intense, ethereal, characteristic bouquet together with a full-bodied dry taste which is rich, smooth and well-balanced. A superior wine, at its very best with roasts and game.',
  },
  {
    imgUrl: images.gold2023,
    title: 'Barbaresco Riserva DOCG',
    score: 'Neive and Treiso',
    region: 'Italy, Piedmont',
    year: 'This Barbaresco is a complex wine, whose nose has a distinctive hint of roses and violets. With its deep ruby red color, it has a refined and smooth taste and has a slight aroma of ripe plum, liquorice, spices and chocolate. Soft tannins give a particular sensation of sweetness and a long velvet finish. Excellent for serving with red meat courses and cheeses, but also as a sipping wine.',
  },
  {
    imgUrl: images.bis2023,
    title: 'Best in Show 2023',
    score: '88',
    region: 'Italy,Veneto',
    year: '2018',
  },
  {
    imgUrl: images.silver2023,
    title: 'Silver 2023',
    score: '77',
    region: 'Hungary,Tokaj',
    year: '2019',
  },
];

export default { wines, awards };
