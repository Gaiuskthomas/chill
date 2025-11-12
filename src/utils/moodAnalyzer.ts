import type { MovieRecommendation } from '../types';

const movieDatabase: Record<string, MovieRecommendation[]> = {
  sad: [
    {
      title: 'Oru Vadakkan Selfie',
      malayalamTitle: 'ഒരു വടക്കൻ സെൽഫി',
      year: 2015,
      type: 'movie',
      description: 'A hilarious comedy that will lift your spirits instantly',
      mood: 'Comedy',
      reason: 'This lighthearted comedy will make you laugh and forget your worries',
      director: 'G. Prajith',
      cast: ['Nivin Pauly', 'Aju Varghese', 'Vineeth Sreenivasan']
    },
    {
      title: 'Kilukkam',
      malayalamTitle: 'കിലുക്കം',
      year: 1991,
      type: 'movie',
      description: 'A classic comedy that never fails to bring smiles',
      mood: 'Feel-Good Comedy',
      reason: 'Perfect feel-good movie to brighten your day',
      director: 'Priyadarshan',
      cast: ['Mohanlal', 'Jagathy Sreekumar', 'Revathi']
    }
  ],
  happy: [
    {
      title: 'Drishyam',
      malayalamTitle: 'ദൃശ്യം',
      year: 2013,
      type: 'movie',
      description: 'An engaging thriller to keep your energy high',
      mood: 'Thriller',
      reason: 'Maintain your positive energy with this gripping tale',
      director: 'Jeethu Joseph',
      cast: ['Mohanlal', 'Meena', 'Asha Sharath']
    },
    {
      title: 'Premam',
      malayalamTitle: 'പ്രേമം',
      year: 2015,
      type: 'movie',
      description: 'A beautiful romantic tale that celebrates life',
      mood: 'Romance',
      reason: 'Enhance your happy mood with this heartwarming love story',
      director: 'Alphonse Puthren',
      cast: ['Nivin Pauly', 'Sai Pallavi', 'Madonna Sebastian']
    }
  ],
  angry: [
    {
      title: 'Maheshinte Prathikaaram',
      malayalamTitle: 'മഹേഷിന്റെ പ്രതികാരം',
      year: 2016,
      type: 'movie',
      description: 'A calm, soothing story about patience and peace',
      mood: 'Drama',
      reason: 'This peaceful narrative will help calm your anger',
      director: 'Dileesh Pothan',
      cast: ['Fahadh Faasil', 'Anusree', 'Aparna Balamurali']
    },
    {
      title: 'Kumbalangi Nights',
      malayalamTitle: 'കുമ്പളങ്ങി നൈറ്റ്‌സ്',
      year: 2019,
      type: 'movie',
      description: 'A serene tale of brotherhood and understanding',
      mood: 'Drama',
      reason: 'Beautiful storytelling that soothes the soul',
      director: 'Madhu C. Narayanan',
      cast: ['Shane Nigam', 'Fahadh Faasil', 'Soubin Shahir']
    }
  ],
  anxious: [
    {
      title: 'Ustad Hotel',
      malayalamTitle: 'ഉസ്താദ് ഹോട്ടൽ',
      year: 2012,
      type: 'movie',
      description: 'A heartwarming story that brings comfort and peace',
      mood: 'Feel-Good Drama',
      reason: 'This comforting tale will ease your anxiety',
      director: 'Anwar Rasheed',
      cast: ['Dulquer Salmaan', 'Thilakan', 'Nithya Menen']
    },
    {
      title: 'Charlie',
      malayalamTitle: 'ചാർളി',
      year: 2015,
      type: 'movie',
      description: 'A magical journey that relaxes the mind',
      mood: 'Adventure Drama',
      reason: 'Let this whimsical story calm your nerves',
      director: 'Martin Prakkat',
      cast: ['Dulquer Salmaan', 'Parvathy Thiruvothu']
    }
  ],
  bored: [
    {
      title: 'Bangalore Days',
      malayalamTitle: 'ബാംഗ്ലൂർ ഡേയ്‌സ്',
      year: 2014,
      type: 'movie',
      description: 'An exciting ride full of life and adventure',
      mood: 'Drama',
      reason: 'This vibrant movie will spark excitement',
      director: 'Anjali Menon',
      cast: ['Dulquer Salmaan', 'Nivin Pauly', 'Nazriya Nazim']
    },
    {
      title: 'Thondimuthalum Driksakshiyum',
      malayalamTitle: 'തൊണ്ടിമുതലും ദൃക്സാക്ഷിയും',
      year: 2017,
      type: 'movie',
      description: 'A unique thriller that keeps you engaged',
      mood: 'Thriller',
      reason: 'This gripping story will cure your boredom instantly',
      director: 'Dileesh Pothan',
      cast: ['Fahadh Faasil', 'Suraj Venjaramoodu', 'Nimisha Sajayan']
    }
  ],
  lonely: [
    {
      title: 'Helen',
      malayalamTitle: 'ഹെലൻ',
      year: 2019,
      type: 'scene',
      description: 'The emotional reunion scene',
      mood: 'Emotional Drama',
      reason: 'This touching scene reminds us of human connection',
      sceneDescription: 'The powerful climax where family bonds triumph over isolation',
      director: 'Mathukutty Xavier',
      cast: ['Anna Ben', 'Lal', 'Noble Babu Thomas']
    },
    {
      title: 'Take Off',
      malayalamTitle: 'ടേക്ക് ഓഫ്',
      year: 2017,
      type: 'movie',
      description: 'A powerful story of courage and companionship',
      mood: 'Drama',
      reason: 'Reminds you of the strength in togetherness',
      director: 'Mahesh Narayanan',
      cast: ['Parvathy Thiruvothu', 'Kunchacko Boban', 'Fahadh Faasil']
    }
  ],
  excited: [
    {
      title: 'Lucifer',
      malayalamTitle: 'ലൂസിഫർ',
      year: 2019,
      type: 'movie',
      description: 'High-octane political thriller',
      mood: 'Action Thriller',
      reason: 'Match your excitement with this powerful thriller',
      director: 'Prithviraj Sukumaran',
      cast: ['Mohanlal', 'Vivek Oberoi', 'Manju Warrier']
    },
    {
      title: 'Ayyappanum Koshiyum',
      malayalamTitle: 'അയ്യപ്പനും കോശിയും',
      year: 2020,
      type: 'movie',
      description: 'Intense action drama',
      mood: 'Action',
      reason: 'Keep your adrenaline pumping with this intense drama',
      director: 'Sachy',
      cast: ['Prithviraj Sukumaran', 'Biju Menon']
    }
  ],
  nostalgic: [
    {
      title: 'Spadikam',
      malayalamTitle: 'സ്പടികം',
      year: 1995,
      type: 'movie',
      description: 'A classic that takes you back in time',
      mood: 'Drama',
      reason: 'Relive the golden era of Malayalam cinema',
      director: 'Bhadran',
      cast: ['Mohanlal', 'Thilakan', 'Urvashi']
    },
    {
      title: 'Manichitrathazhu',
      malayalamTitle: 'മണിച്ചിത്രത്താഴ്',
      year: 1993,
      type: 'movie',
      description: 'An iconic psychological thriller',
      mood: 'Psychological Thriller',
      reason: 'A timeless classic that never gets old',
      director: 'Fazil',
      cast: ['Mohanlal', 'Shobana', 'Suresh Gopi']
    }
  ],
  romantic: [
    {
      title: 'Ennu Ninte Moideen',
      malayalamTitle: 'എന്നു നിന്റെ മൊയ്ദീൻ',
      year: 2015,
      type: 'movie',
      description: 'An epic true love story',
      mood: 'Romance',
      reason: 'The ultimate romantic tale that touches the heart',
      director: 'R. S. Vimal',
      cast: ['Prithviraj Sukumaran', 'Parvathy Thiruvothu']
    },
    {
      title: 'Ohm Shanthi Oshaana',
      malayalamTitle: 'ഓം ശാന്തി ഓശാന',
      year: 2014,
      type: 'movie',
      description: 'A sweet romantic comedy',
      mood: 'Romantic Comedy',
      reason: 'Perfect blend of love and laughter',
      director: 'Jude Anthany Joseph',
      cast: ['Nivin Pauly', 'Nazriya Nazim']
    }
  ],
  motivated: [
    {
      title: 'Soorarai Pottru - Malayalam Version',
      malayalamTitle: 'സൂററൈ പൊറ്റു',
      year: 2020,
      type: 'movie',
      description: 'An inspiring tale of determination',
      mood: 'Inspirational',
      reason: 'Fuel your motivation with this powerful story',
      director: 'Sudha Kongara',
      cast: ['Suriya', 'Aparna Balamurali']
    },
    {
      title: 'Virus',
      malayalamTitle: 'വൈറസ്',
      year: 2019,
      type: 'movie',
      description: 'Real heroes fighting against all odds',
      mood: 'Drama',
      reason: 'Be inspired by real-life heroes',
      director: 'Aashiq Abu',
      cast: ['Parvathy Thiruvothu', 'Tovino Thomas', 'Kunchacko Boban']
    }
  ]
};

const moodKeywords: Record<string, string[]> = {
  sad: ['sad', 'down', 'depressed', 'blue', 'unhappy', 'melancholy', 'heartbroken', 'upset'],
  happy: ['happy', 'joy', 'joyful', 'cheerful', 'glad', 'delighted', 'pleased', 'content'],
  angry: ['angry', 'mad', 'furious', 'irritated', 'annoyed', 'frustrated', 'rage'],
  anxious: ['anxious', 'nervous', 'worried', 'stressed', 'tense', 'uneasy', 'restless'],
  bored: ['bored', 'dull', 'uninterested', 'tired', 'monotonous'],
  lonely: ['lonely', 'alone', 'isolated', 'abandoned', 'disconnected'],
  excited: ['excited', 'thrilled', 'energetic', 'pumped', 'enthusiastic', 'hyped'],
  nostalgic: ['nostalgic', 'miss', 'old times', 'memories', 'remember', 'past'],
  romantic: ['romantic', 'love', 'loving', 'affectionate', 'in love', 'crush'],
  motivated: ['motivated', 'inspired', 'determined', 'driven', 'ambitious', 'focused']
};

export function analyzeMood(input: string): MovieRecommendation {
  const lowerInput = input.toLowerCase();

  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    for (const keyword of keywords) {
      if (lowerInput.includes(keyword)) {
        const movies = movieDatabase[mood];
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        return randomMovie;
      }
    }
  }

  const allMovies = Object.values(movieDatabase).flat();
  return allMovies[Math.floor(Math.random() * allMovies.length)];
}
