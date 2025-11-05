import React, { useState } from 'react';
import './CourseFinder.css';

const CourseFinder = () => {
  const [filters, setFilters] = useState({
    country: '',
    institutionType: '',
    institution: ''
  });

  const [institutionLinks, setInstitutionLinks] = useState({
    // ... (keep all your institution data exactly as you provided)
    // For brevity, I'll show the structure with a few countries
        armenia: {
      mbbs: {
        "Yerevan State Medical University": "https://ysmu.am/",
        "St. Theresa Medical University": "https://www.st-theresa.am/",
        "Armenian Medical Institute": "https://armedin.am/en/",
        "Yerevan Haybusak University": "https://www.haybusak.am/en/",
        "Armenian Medical Academy": "https://www.ama.am/en/",
        "Armenian Medical University": "https://www.amu.am/en/",
        "Armenian National Medical University": "https://www.anmu.am/en/",
        "Armenian State Medical University": "https://www.asmu.am/en/",
        "Armenian Medical Institute of Yerevan": "https://www.amiy.am/en/",
        "Armenian State Medical Institute": "https://www.asmi.am/en/",
        "Armenian Medical College": "https://www.amc.am/en/",
        "Armenian Medical University of Yerevan": "https://www.amu-yerevan.am/en/"
      },
      nursing: {
        'Yerevan State Medical University Nursing School': 'https://ysmu.am/en/nursing-school',
        "Armenian Nursing College": "https://www.anc.am/en/",
        "Yerevan Nursing Institute": "https://www.yerevannursing.am/en/",
        "Armenian State Nursing Academy": "https://www.asna.am/en/",
        "Armenian National Nursing Institute": "https://www.anni.am/en/",
        "Armenian Medical Nursing College": "https://www.amnc.am/en/",
        "Armenian State Nursing School": "https://www.asns.am/en/",
        "Armenian State Nursing Institute": "https://www.asni.am/en/",
        "Armenian State Nursing Academy": "https://www.asna.am/en/",
        "Armenian State Nursing University": "https://www.asnu.am/en/",
        "Armenian State Nursing College": "https://www.asnc.am/en/",
        "Armenian State Nursing Institute": "https://www.asni.am/en/",
        "Armenian State Nursing School": "https://www.asns.am/en/",
        "Armenian State Nursing Academy": "https://www.asna.am/en/",
        "Armenian State Nursing University": "https://www.asnu.am/en/",
        "Armenian State Nursing College": "https://www.asnc.am/en/",
        "Armenian State Nursing Institute": "https://www.asni.am/en/",
        "Armenian State Nursing School": "https://www.asns.am/en/",
        "Armenian State Nursing Academy": "https://www.asna.am/en/"
      },
      artsandscience: {
        "Armenian State University": "https://ysu.am/",
        "Yerevan State University": "https://www.ysu.am/",
        "Armenian National Agrarian University": "https://www.anaun.am/en/",
        "Armenian State University of Economics": "https://ase.am/en/",
        "Armenian State Pedagogical University": "https://www.aspu.am/en/",
        "Armenian State Institute of Physical Culture and Sport": "https://www.asipcs.am/en/",
        "Armenian State Institute of Fine Arts": "https://www.asifa.am/en/",
        "Armenian State Institute of Theatre and Cinematography": "https://www.asitc.am/en/",
        "Armenian State Institute of Music": "https://www.asim.am/en/",
        "Armenian State Institute of Arts and Culture": "https://www.asiac.am/en/",
        "Armenian State Institute of Languages": "https://www.asil.am/en/",
        "Armenian State Institute of Design": "https://www.asid.am/en/"
      },
      engineering: {
        "National University of Architecture and Construction of Armenia": "https://nuaca.am/",
        "Armenian State Engineering University": "https://aseu.am/en/",
        "Yerevan State University of Architecture and Construction": "https://ysuac.am/en/",
        "Armenian State University of Transport and Communications": "https://asutc.am/en/",
        "Armenian State University of Mining and Metallurgy": "https://asumm.am/en/",
        "Armenian State University of Energy and Communications": "https://asuec.am/en/",
        "Armenian State University of Information Technologies": "https://asuit.am/en/", 
        "Armenian State University of Telecommunications and Informatics": "https://asut.am/en/",
        "Armenian State University of Chemical Technologies": "https://asuct.am/en/",
        "Armenian State University of Geology and Mining": "https://asugm.am/en/",
        "Armenian State University of Civil Engineering": "https://asuce.am/en/",
        "Armenian State University of Architecture and Design": "https://asud.am/en/"
      }
    },
        azerbaijan: {
      mbbs: {
        "Azerbaijan Medical University": "https://www.amu.edu.az/",
        "Baku State Medical University": "https://www.bsum.edu.az/",
        "Sumgait State University": "https://www.ssu.edu.az/",
        "Ganja State University": "https://www.gsu.edu.az/",
        "Nakhchivan State University": "https://www.nsu.edu.az/",
        "Azerbaijan State Medical University": "https://www.asmu.edu.az/",
        "Azerbaijan Medical University of Nakhchivan": "https://www.amun.edu.az/",
        "Azerbaijan State Medical University of Ganja": "https://www.asmg.edu.az/",
        "Azerbaijan State Medical University of Sumgait": "https://www.asmsu.edu.az/",
        "Azerbaijan State Medical University of Baku": "https://www.asmbaku.edu.az/",
        "Azerbaijan State Medical University of Mingachevir": "https://www.asmm.edu.az/",
        "Azerbaijan State Medical University of Lankaran": "https://www.asml.edu.az/"

      },
      nursing: {
        "Azerbaijan State Nursing University": "https://www.asnu.edu.az/",
        "Baku Nursing College": "https://www.bnc.edu.az/",
        "Sumgait Nursing College": "https://www.snc.edu.az/",
        "Ganja Nursing College": "https://www.gnc.edu.az/",
        "Nakhchivan Nursing College": "https://www.nnc.edu.az/",
        "Azerbaijan State Nursing Academy": "https://www.asna.edu.az/",
        "Azerbaijan State Nursing Institute": "https://www.asni.edu.az/",
        "Azerbaijan State Nursing School": "https://www.asns.edu.az/",
        "Azerbaijan State Nursing College": "https://www.asnc.edu.az/",
        "Azerbaijan State Nursing University of Baku": "https://www.asnubaku.edu.az/",
        "Azerbaijan State Nursing University of Sumgait": "https://www.asnusumgait.edu.az/",
        "Azerbaijan State Nursing University of Ganja": "https://www.asnuganja.edu.az/",
        "Azerbaijan State Nursing University of Nakhchivan": "https://www.asnunakhchivan.edu.az/",
        "Azerbaijan State Nursing University of Mingachevir": "https://www.asnumingachevir.edu.az/",
        "Azerbaijan State Nursing University of Lankaran": "https://www.asnulankaran.edu.az/"

      },
      artsandscience: {
        "Baku State University": "https://bsu.edu.az/en",
        "Azerbaijan National Academy of Sciences": "https://science.gov.az/en",
        "Azerbaijan State University of Economics": "https://www.unec.edu.az/en/",
        "Azerbaijan State University of Culture and Arts": "https://www.admiu.edu.az/en",
        "Azerbaijan State University of Languages": "https://www.dil.edu.az/en",
        "Azerbaijan State University of Physical Culture and Sports": "https://www.asu.edu.az/en",
        "Azerbaijan State University of Arts": "https://www.asuarts.edu.az/en",
        "Azerbaijan State University of Music": "https://www.asum.edu.az/en",
        "Azerbaijan State University of Theatre and Cinematography": "https://www.asutc.edu.az/en",
        "Azerbaijan State University of Design": "https://www.asud.edu.az/en",
        "Azerbaijan State University of Fine Arts": "https://www.asufa.edu.az/en",
        "Azerbaijan State University of Architecture and Arts": "https://www.asuaa.edu.az/en",
        "Azerbaijan State University of Humanities": "https://www.asuh.edu.az/en",
        "Azerbaijan State University of Social Sciences": "https://www.asuss.edu.az/en",
        "Azerbaijan State University of Political Science": "https://www.asups.edu.az/en",
        "Azerbaijan State University of International Relations": "https://www.asuir.edu.az/en",
        "Azerbaijan State University of Philosophy": "https://www.asuph.edu.az/en",
        "Azerbaijan State University of Sociology": "https://www.asus.edu.az/en",
        "Azerbaijan State University of Psychology": "https://www.asup.edu.az/en",
        "Azerbaijan State University of Pedagogy": "https://www.asup.edu.az/en"
        
        
      },
      engineering:{
        "Azerbaijan State University of Architecture and Construction": "https://www.asuac.edu.az/en",
        "Azerbaijan State University of Transport and Communications": "https://www.asutc.edu.az/en",
        "Azerbaijan State University of Mining and Metallurgy": "https://www.asumm.edu.az/en",
        "Azerbaijan State University of Energy and Communications": "https://www.asuec.edu.az/en",
        "Azerbaijan State University of Information Technologies": "https://www.asuit.edu.az/en",
        "Azerbaijan State University of Telecommunications and Informatics": "https://www.asuti.edu.az/en",
        "Azerbaijan State University of Chemical Technologies": "https://www.asuct.edu.az/en",
        "Azerbaijan State University of Geology and Mining": "https://www.asugm.edu.az/en",
        "Azerbaijan State University of Civil Engineering": "https://www.asuce.edu.az/en",
        "Azerbaijan State University of Architecture and Design": "https://www.asud.edu.az/en",
        "Azerbaijan State University of Mechanical Engineering": "https://www.asume.edu.az/en",
        "Azerbaijan State University of Electrical Engineering": "https://www.asuee.edu.az/en"


      }
    },

    belarus: { 
      mbbs: {
        "Belarusian State Medical University": "https://www.bsmu.by/en/",
        "Gomel State Medical University": "https://www.gsmu.by/en/",
        "Vitebsk State Medical University": "https://www.vsmu.by/en/",
        "Minsk State Medical University": "https://www.msmu.by/en/",
        "Brest State Medical University": "https://www.bsmu.by/en/",
        "Grodno State Medical University": "https://www.gsmu.by/en/"
      },
      nursing: {
        'Belarusian State Nursing Academy': 'https://www.bsna.by/en/',
        'Minsk Nursing College': 'https://www.minskcollege.by/en/',
        'Gomel Nursing College': 'https://www.gomelcollege.by/en/',
        'Vitebsk Nursing College': 'https://www.vitebskcollege.by/en/',
        'Brest Nursing College': 'https://www.brestcollege.by/en/',
        'Grodno Nursing College': 'https://www.grodnocollege.by/en/'
      },
      artsandscience: {
        "Belarusian State University": "https://www.bsu.by/en/",
        "Belarusian National Technical University": "https://www.bntu.by/en/",
        "Belarusian State Pedagogical University": "https://www.bspu.by/en/",
        "Belarusian State Academy of Arts": "https://www.bsaa.by/en/"
      },
      engineering: {
        "Belarusian National Technical University": "https://www.bntu.by/en/",
        "Belarusian State Technological University": "https://www.bstu.by/en/",
        "Minsk State Higher Radio Engineering College": "https://www.mshrc.by/en/"
      }
    } ,
    bulgaria: {
      mbbs: {
        "Medical University of Sofia": "https://www.mu-sofia.bg/en/",
        "Medical University of Plovdiv": "https://www.mu-plovdiv.bg/en/",
        "Medical University of Varna": "https://www.mu-varna.bg/en/",
        "Medical University of Pleven": "https://www.mu-pleven.bg/en/",
        "Medical University of Burgas": "https://www.mu-burgas.bg/en/"
      },
      nursing: {
        'Sofia Nursing College': 'https://www.snc-sofia.bg/en/',
        'Plovdiv Nursing College': 'https://www.pnc-plovdiv.bg/en/',
        'Varna Nursing College': 'https://www.vnc-varna.bg/en/',
        'Pleven Nursing College': 'https://www.pnc-pleven.bg/en/',
        'Burgas Nursing College': 'https://www.bnc-burgas.bg/en/'
      },
      artsandscience: {
        "Sofia University": "https://www.uni-sofia.bg/en/",
        "Plovdiv University": "https://www.uni-plovdiv.bg/en/",
        "Varna University of Economics": "https://www.ue-varna.bg/en/",
        "Pleven University": "https://www.uni-pleven.bg/en/"
      },
      engineering: {
        "Technical University of Sofia": "https://www.tu-sofia.bg/en/",
        "Technical University of Plovdiv": "https://www.tu-plovdiv.bg/en/",
        "Technical University of Varna": "https://www.tu-varna.bg/en/",
        "Technical University of Pleven": "https://www.tu-pleven.bg/en/"
      }
    } ,
    
    china: {
      mbbs: {
        "Peking University Health Science Center": "http://www.bjmu.edu.cn/",
        "Fudan University Shanghai Medical College": "http://www.shsmu.edu.cn/",
        "Zhejiang University School of Medicine": "http://www.zju.edu.cn/",
        "Sun Yat-sen University Zhongshan School of Medicine": "http://www.sysu.edu.cn/",
        "Tongji University School of Medicine": "http://www.tongji.edu.cn/"
      },
      nursing: {
        'Peking University Nursing School': 'http://nursing.bjmu.edu.cn/',
        'Fudan University Nursing College': 'http://nursing.shsmu.edu.cn/',
        'Zhejiang University Nursing Institute': 'http://nursing.zju.edu.cn/',
        'Sun Yat-sen University Nursing Academy': 'http://nursing.sysu.edu.cn/',
        'Tongji University Nursing Department': 'http://nursing.tongji.edu.cn/'
      },
      artsandscience: {
        "Tsinghua University": "https://www.tsinghua.edu.cn/",
        "Peking University": "https://www.pku.edu.cn/",
        "Fudan University": "https://www.fudan.edu.cn/",
        "Zhejiang University": "https://www.zju.edu.cn/"
      },
      engineering: {
        "Tsinghua University School of Engineering": "https://www.tsinghua.edu.cn/",
        "Peking University College of Engineering": "https://www.pku.edu.cn/",
        "Fudan University School of Engineering": "https://www.fudan.edu.cn/",
        "Zhejiang University College of Engineering": "https://www.zju.edu.cn/"
      }
    },

    georgia: {
      mbbs: {
        "Tbilisi State Medical University": "https://www.tsmu.edu/en/",
        "Batumi Shota Rustaveli State University": "https://www.bsu.edu.ge/en/",
        "Akaki Tsereteli State University": "https://www.atsu.edu.ge/en/",
        "Ilia State University": "https://iliauni.edu.ge/en/",
        "David Tvildiani Medical University": "https://www.dtmu.edu.ge/en/"
      },
      nursing: {
        'Tbilisi Nursing College': 'https://tnc.edu.ge/en/',
        'Batumi Nursing Institute': 'https://bni.edu.ge/en/',
        'Rustavi Nursing Academy': 'https://rna.edu.ge/en/',
        'Kutaisi Nursing School': 'https://kns.edu.ge/en/',
        'Zugdidi Nursing College': 'https://znc.edu.ge/en/'
      },
      artsandscience: {
        "Tbilisi State University": "https://www.tsu.ge/en/",
        "Ilia State University": "https://iliauni.edu.ge/en/",
        "Georgian Technical University": "https://www.gtu.ge/en/",
        "Batumi Shota Rustaveli State University": "https://www.bsu.edu.ge/en/"
      },
      engineering: {
        "Georgian Technical University": "https://www.gtu.ge/en/",
        "Tbilisi State University Faculty of Engineering": "https://www.tsu.ge/en/faculties/engineering",
        "Ilia State University Faculty of Engineering": "https://iliauni.edu.ge/en/faculties/engineering"
      }
    },
    kazakhstan: {
      mbbs: {
        "Kazakh National Medical University": "https://www.kaznmu.kz/en/",
        "Al-Farabi Kazakh National University": "https://www.kaznu.kz/en/",
        "Semey Medical University": "https://www.smu.kz/en/",
        "West Kazakhstan Marat Ospanov Medical University": "https://www.wkmu.kz/en/",
        "Astana Medical University": "https://www.amu.kz/en/"
      },
      nursing: {
        'Kazakh National Nursing Academy': 'https://www.knna.kz/en/',
        'Almaty Nursing College': 'https://www.almatynursing.kz/en/',
        'Astana Nursing Institute': 'https://www.astananursing.kz/en/',
        'Shymkent Nursing School': 'https://www.shymkentnursing.kz/en/',
        'Karaganda Nursing College': 'https://www.karagnursing.kz/en/'
      },
      artsandscience: {
        "Kazakh National University": "https://www.kaznu.kz/en/",
        "Al-Farabi Kazakh National University": "https://www.kaznu.kz/en/",
        "L.N. Gumilyov Eurasian National University": "https://www.enu.kz/en/"
      },
      engineering: {
        "Kazakh-British Technical University": "https://www.kbtu.edu.kz/en/",
        "Kazakhstan Institute of Management, Economics and Strategic Research": "https://www.kimes.kz/en/",
        "Kazakh National Technical University": "https://www.kazntu.kz/en/"
      }
    } ,

      


    romania: {
      mbbs: {
        "Carol Davila University of Medicine and Pharmacy": "https://www.umfcd.ro/en/",
        "Iuliu Hațieganu University of Medicine and Pharmacy": "https://www.umfcluj.ro/en/",
        "Grigore T. Popa University of Medicine and Pharmacy": "https://www.umfiasi.ro/en/",
        "Victor Babeș University of Medicine and Pharmacy": "https://www.umft.ro/en/",
        "Ovidius University of Constanța": "https://www.univ-ovidius.ro/en/"
      },
      nursing: {
        'Carol Davila University Nursing School': 'https://www.umfcd.ro/en/',
        'Iuliu Hațieganu University Nursing College': 'https://www.umfcluj.ro/en/',
        'Grigore T. Popa University Nursing Department': 'https://www.umfiasi.ro/en/',
        'Victor Babeș University Nursing Institute': 'https://www.umft.ro/en/',
        'Ovidius University Nursing School': 'https://www.univ-ovidius.ro/en/'
      },
      artsandscience: {
        "University of Bucharest": "https://unibuc.ro/",
        "Babeș-Bolyai University": "https://www.ubbcluj.ro/",
        "Alexandru Ioan Cuza University": "https://www.uaic.ro/",
        "West University of Timișoara": "https://www.uvt.ro/"
      },
      engineering: {
        "Politehnica University of Bucharest": "https://upb.ro/",
        "Gheorghe Asachi Technical University of Iași": "https://www.tuiasi.ro/",
        "West University of Timișoara Faculty of Engineering": "https://www.uvt.ro/"

      }
    },
    russia: {
      mbbs: {
        "Moscow State University of Medicine and Dentistry": "https://www.msmds.ru/en/",
        "Saint Petersburg State Medical University": "https://www.spbmu.ru/en/",
        "Kazan Federal University": "https://kpfu.ru/eng",
        "Novosibirsk State University": "https://english.nsu.ru/",
        "Sechenov University": "https://www.sechenov.ru/eng/"
      },
      nursing: {
        'Moscow State Nursing Academy': 'https://www.msna.ru/en/',
        'Saint Petersburg Nursing College': 'https://www.spbnc.ru/en/',
        'Kazan Nursing Institute': 'https://kpfu.ru/eng',
        'Novosibirsk Nursing School': 'https://english.nsu.ru/',
        'Sechenov Nursing Department': 'https://www.sechenov.ru/eng/'
      },
      artsandscience: {
        "Moscow State University": "https://www.msu.ru/en/",
        "Saint Petersburg State University": "https://english.spbu.ru/",
        "Kazan Federal University": "https://kpfu.ru/eng",
        "Novosibirsk State University": "https://english.nsu.ru/"
      },
      engineering: {
        "Moscow Institute of Physics and Technology": "https://mipt.ru/english/",
        "Bauman Moscow State Technical University": "https://www.bmstu.ru/en/",
        "Saint Petersburg State Polytechnical University": "https://english.spbstu.ru/",
        "Kazan Federal University Faculty of Engineering": "https://kpfu.ru/eng",
        "Novosibirsk State University Faculty of Engineering": "https://english.nsu.ru/"
      }
    },
    turkey: {
      mbbs: {
        "Hacettepe University": "https://www.hacettepe.edu.tr/english/",
        "Istanbul University": "https://www.istanbul.edu.tr/en/",
        "Ankara University": "https://www.ankara.edu.tr/en/",
        "Ege University": "https://www.ege.edu.tr/en/",
        "Marmara University": "https://www.marmara.edu.tr/en/"
      },
      nursing: {
        'Hacettepe University Nursing School': 'https://www.hacettepe.edu.tr/english/',
        'Istanbul University Nursing Department': 'https://www.istanbul.edu.tr/en/',
        'Ankara University Nursing College': 'https://www.ankara.edu.tr/en/',
        'Ege University Nursing Institute': 'https://www.ege.edu.tr/en/',
        'Marmara University Nursing School': 'https://www.marmara.edu.tr/en/'
      },
      artsandscience: {
        "Hacettepe University": "https://www.hacettepe.edu.tr/english/",
        "Istanbul University": "https://www.istanbul.edu.tr/en/",
        "Ankara University": "https://www.ankara.edu.tr/en/"
      },
      engineering: {
        "Istanbul Technical University": "https://www.itu.edu.tr/en/",
        "Middle East Technical University": "https://metu.edu.tr/en",
        "Bogazici University": "https://boun.edu.tr/en_US"
      }
    },
    ukraine: {
      mbbs: {
        "Bogomolets National Medical University": "https://bsmu.edu.ua/en/",
        "Kharkiv National Medical University": "https://knmu.edu.ua/en/",
        "Lviv National Medical University": "https://lnmu.edu.ua/en/",
        "Dnipropetrovsk State Medical University": "https://dmu.edu.ua/en/",
        "Odessa National Medical University": "https://onu.edu.ua/en/"
      },
      nursing: {
        'Bogomolets National Nursing Academy': 'https://bsmu.edu.ua/en/',
        'Kharkiv National Nursing College': 'https://knmu.edu.ua/en/',
        'Lviv National Nursing Institute': 'https://lnmu.edu.ua/en/',
        'Dnipropetrovsk State Nursing School': 'https://dmu.edu.ua/en/',
        'Odessa National Nursing Department': 'https://onu.edu.ua/en/'
      },
      artsandscience: {
        "Taras Shevchenko National University of Kyiv": "https://www.univ.kiev.ua/en/",
        "V.N. Karazin Kharkiv National University": "https://www.univer.kharkov.ua/en/",
        "Ivan Franko National University of Lviv": "https://lnu.edu.ua/en/"
      },
      engineering: {
        "National Technical University of Ukraine Kyiv Polytechnic Institute": "https://kpi.ua/en",
        "Lviv Polytechnic National University": "https://lpnu.ua/en",
        "Kharkiv Polytechnic Institute": "https://kpi.kharkov.ua/en/"
      }
    },
    uzbekistan: {
      mbbs: {
        "Tashkent Medical Academy": "https://tma.uz/en/",
        "Samarkand State Medical Institute": "https://ssmi.uz/en/",
        "Bukhara State Medical Institute": "https://bsmi.uz/en/"
      },
      nursing: {
        'Tashkent Nursing College': 'https://tnc.uz/en/',
        'Samarkand Nursing Institute': 'https://sni.uz/en/',
        'Bukhara Nursing School': 'https://bnc.uz/en/'
      },
      artsandscience: {
        "National University of Uzbekistan": "https://nuu.uz/en/",
        "Tashkent State University of Economics": "https://tsue.uz/en/"
      },
      engineering: {
        "Tashkent State Technical University": "https://tstu.uz/en/",
        "Tashkent University of Information Technologies": "https://tuit.uz/en/"
      }
    },


    serbia: {
      mbbs: {
        "University of Belgrade": "https://www.bg.ac.rs/en/",
        "University of Novi Sad": "https://www.uns.ac.rs/en/",
        "University of Niš": "https://www.ni.ac.rs/en/",
        "University of Kragujevac": "https://www.kg.ac.rs/en/",
        "University of Priština": "https://www.pr.ac.rs/en/"
      },
      nursing: {
        'University of Belgrade Nursing School': 'https://www.bg.ac.rs/en/',
        'University of Novi Sad Nursing Department': 'https://www.uns.ac.rs/en/',
        'University of Niš Nursing College': 'https://www.ni.ac.rs/en/',
        'University of Kragujevac Nursing Institute': 'https://www.kg.ac.rs/en/',
        'University of Priština Nursing School': 'https://www.pr.ac.rs/en/'
      },
      artsandscience: {
        "University of Belgrade": "https://www.bg.ac.rs/en/",
        "University of Novi Sad": "https://www.uns.ac.rs/en/",
        "University of Niš": "https://www.ni.ac.rs/en/"
      },
      engineering: {
        "University of Belgrade Faculty of Engineering": "https://www.bg.ac.rs/en/",
        "University of Novi Sad Faculty of Technical Sciences": "https://www.uns.ac.rs/en/",
        "University of Niš Faculty of Mechanical Engineering": "https://www.ni.ac.rs/en/"
      }
    },
    Australia: {
      mbbs: {
        "University of Sydney": "https://www.sydney.edu.au/",
        "University of Melbourne": "https://www.unimelb.edu.au/",
        "University of Queensland": "https://www.uq.edu.au/",
        "Monash University": "https://www.monash.edu/",
        "University of New South Wales": "https://www.unsw.edu.au/"
      },
      nursing: {
        'University of Sydney Nursing School': 'https://www.sydney.edu.au/',
        'University of Melbourne Nursing Department': 'https://www.unimelb.edu.au/',
        'University of Queensland Nursing College': 'https://www.uq.edu.au/',
        'Monash University Nursing Institute': 'https://www.monash.edu/',
        'University of New South Wales Nursing School': 'https://www.unsw.edu.au/'
      },
      artsandscience: {
        "University of Sydney": "https://www.sydney.edu.au/",
        "University of Melbourne": "https://www.unimelb.edu.au/",
        "University of Queensland": "https://www.uq.edu.au/"
      },
      engineering: {
        "University of Sydney Faculty of Engineering": "https://www.sydney.edu.au/",
        "University of Melbourne Faculty of Engineering": "https://www.unimelb.edu.au/",
        "University of Queensland Faculty of Engineering": "https://www.uq.edu.au/"
      }
    },
    canada: {
      mbbs: {
        "University of Toronto": "https://www.utoronto.ca/",
        "McGill University": "https://www.mcgill.ca/",
        "University of British Columbia": "https://www.ubc.ca/",
        "University of Alberta": "https://www.ualberta.ca/",
        "McMaster University": "https://www.mcmaster.ca/"
      },
      nursing: {
        'University of Toronto Nursing School': 'https://www.utoronto.ca/',
        'McGill University Nursing Department': 'https://www.mcgill.ca/',
        'University of British Columbia Nursing College': 'https://www.ubc.ca/',
        'University of Alberta Nursing Institute': 'https://www.ualberta.ca/',
        'McMaster University Nursing School': 'https://www.mcmaster.ca/'
      },
      artsandscience: {
        "University of Toronto": "https://www.utoronto.ca/",
        "McGill University": "https://www.mcgill.ca/",
        "University of British Columbia": "https://www.ubc.ca/"
      },
      engineering: {
        "University of Toronto Faculty of Engineering": "https://www.utoronto.ca/",
        "McGill University Faculty of Engineering": "https://www.mcgill.ca/",
        "University of British Columbia Faculty of Engineering": "https://www.ubc.ca/"
      }
    },

    Italy: {
      mbbs: {
        "University of Milan": "https://www.unimi.it/en",
        "Sapienza University of Rome": "https://www.uniroma1.it/en",
        "University of Bologna": "https://www.unibo.it/en",
        "University of Padua": "https://www.unipd.it/en",
        "University of Turin": "https://www.unito.it/en"
      },
      nursing: {
        'University of Milan Nursing School': 'https://www.unimi.it/en',
        'Sapienza University of Rome Nursing Department': 'https://www.uniroma1.it/en',
        'University of Bologna Nursing College': 'https://www.unibo.it/en',
        'University of Padua Nursing Institute': 'https://www.unipd.it/en',
        'University of Turin Nursing School': 'https://www.unito.it/en'
      },
      artsandscience: {
        "University of Milan": "https://www.unimi.it/en",
        "Sapienza University of Rome": "https://www.uniroma1.it/en",
        "University of Bologna": "https://www.unibo.it/en"
      },
      engineering: {
        "Polytechnic University of Milan": "https://www.polimi.it/en",
        "Sapienza University of Rome Faculty of Engineering": "https://www.uniroma1.it/en",
        "University of Bologna Faculty of Engineering": "https://www.unibo.it/en"
      }
    },
    Spain: {
      mbbs: {
        "University of Barcelona": "https://www.ub.edu/web/ub/en/",
        "Autonomous University of Madrid": "https://www.uam.es/",
        "University of Valencia": "https://www.uv.es/",
        "University of Granada": "https://www.ugr.es/",
        "Complutense University of Madrid": "https://www.ucm.es/"
      },
      nursing: {
        'University of Barcelona Nursing School': 'https://www.ub.edu/web/ub/en/',
        'Autonomous University of Madrid Nursing Department': 'https://www.uam.es/',
        'University of Valencia Nursing College': 'https://www.uv.es/',
        'University of Granada Nursing Institute': 'https://www.ugr.es/',
        'Complutense University of Madrid Nursing School': 'https://www.ucm.es/'
      },
      artsandscience: {
        "University of Barcelona": "https://www.ub.edu/web/ub/en/",
        "Autonomous University of Madrid": "https://www.uam.es/",
        "University of Valencia": "https://www.uv.es/"
      },
      engineering: {
        "Polytechnic University of Catalonia": "https://www.upc.edu/en",
        "Polytechnic University of Madrid": "https://www.upm.es/",
        "University of Valencia Faculty of Engineering": "https://www.uv.es/"
      }
    },
    france: {
      mbbs: {
        "Sorbonne University": "https://www.sorbonne-universite.fr/en",
        "University of Paris": "https://u-paris.fr/en/",
        "University of Lyon": "https://www.univ-lyon.fr/en/",
        "University of Bordeaux": "https://www.u-bordeaux.com/",
        "University of Strasbourg": "https://www.unistra.fr/en/"
      },
      nursing: {
        'Sorbonne University Nursing School': 'https://www.sorbonne-universite.fr/en',
        'University of Paris Nursing Department': 'https://u-paris.fr/en/',
        'University of Lyon Nursing College': 'https://www.univ-lyon.fr/en/',
        'University of Bordeaux Nursing Institute': 'https://www.u-bordeaux.com/',
        'University of Strasbourg Nursing School': 'https://www.unistra.fr/en/'
      },
      artsandscience: {
        "Sorbonne University": "https://www.sorbonne-universite.fr/en",
        "University of Paris": "https://u-paris.fr/en/",
        "University of Lyon": "https://www.univ-lyon.fr/en/"
      },
      engineering: {
        "École Polytechnique": "https://www.polytechnique.edu/en",
        "Sorbonne University Faculty of Engineering": "https://www.sorbonne-universite.fr/en",
        "University of Paris Faculty of Engineering": "https://u-paris.fr/en/"
      }
    },
    germany: {
      mbbs: {
        "Charité - Universitätsmedizin Berlin": "https://www.charite.de/en/",
        "Ludwig Maximilian University of Munich": "https://www.en.uni-muenchen.de/",
        "Heidelberg University": "https://www.uni-heidelberg.de/en",
        "University of Freiburg": "https://www.uni-freiburg.de/",
        "University of Tübingen": "https://www.uni-tuebingen.de/en/"
      },
      nursing: {
        'Charité Nursing School': 'https://www.charite.de/en/',
        'Ludwig Maximilian University Nursing Department': 'https://www.en.uni-muenchen.de/',
        'Heidelberg University Nursing College': 'https://www.uni-heidelberg.de/en',
        'University of Freiburg Nursing Institute': 'https://www.uni-freiburg.de/',
        'University of Tübingen Nursing School': 'https://www.uni-tuebingen.de/en/'
      },
      artsandscience: {
        "Ludwig Maximilian University of Munich": "https://www.en.uni-muenchen.de/",
        "Heidelberg University": "https://www.uni-heidelberg.de/en",
        "University of Freiburg": "https://www.uni-freiburg.de/"
      },
      engineering: {
        "Technical University of Munich": "https://www.tum.de/en/",
        "RWTH Aachen University": "https://www.rwth-aachen.de/go/id/a/?lidx=1",
        "Karlsruhe Institute of Technology": "https://www.kit.edu/english/"
      }
    },
    poland: {
      mbbs: {
        "Medical University of Warsaw": "https://www.wum.edu.pl/en",
        "Jagiellonian University Medical College": "https://www.cm-uj.krakow.pl/en/",
        "Medical University of Gdańsk": "https://www.gumed.edu.pl/en/",
        "Poznan University of Medical Sciences": "https://www.ump.edu.pl/en/",
        "Wroclaw Medical University": "https://www.umed.wroc.pl/en/"
      },
      nursing: {
        'Medical University of Warsaw Nursing School': 'https://www.wum.edu.pl/en',
        'Jagiellonian University Nursing Department': 'https://www.cm-uj.krakow.pl/en/',
        'Medical University of Gdańsk Nursing College': 'https://www.gumed.edu.pl/en/',
        'Poznan University of Medical Sciences Nursing Institute': 'https://www.ump.edu.pl/en/',
        'Wroclaw Medical University Nursing School': 'https://www.umed.wroc.pl/en/'
      },
      artsandscience: {
        "University of Warsaw": "https://en.uw.edu.pl/",
        "Jagiellonian University": "https://en.uj.edu.pl/",
        "Adam Mickiewicz University in Poznań": "https://amu.edu.pl/en/"
      },
      engineering: {
        "Warsaw University of Technology": "https://www.pw.edu.pl/engpw",
        "AGH University of Science and Technology": "https://www.agh.edu.pl/en/",
        "Wrocław University of Science and Technology": "https://pwr.edu.pl/en/"
      }
    },
    Japan: {
      mbbs: {
        "University of Tokyo": "https://www.u-tokyo.ac.jp/en/",
        "Kyoto University": "https://www.kyoto-u.ac.jp/en",
        "Osaka University": "https://www.osaka-u.ac.jp/en",
        "Tohoku University": "https://www.tohoku.ac.jp/en/",
        "Nagoya University": "https://en.nagoya-u.ac.jp/"
      },
      nursing: {
        'University of Tokyo Nursing School': 'https://www.u-tokyo.ac.jp/en/',
        'Kyoto University Nursing Department': 'https://www.kyoto-u.ac.jp/en',
        'Osaka University Nursing College': 'https://www.osaka-u.ac.jp/en',
        'Tohoku University Nursing Institute': 'https://www.tohoku.ac.jp/en/',
        'Nagoya University Nursing School': 'https://en.nagoya-u.ac.jp/'
      },
      artsandscience: {
        "University of Tokyo": "https://www.u-tokyo.ac.jp/en/",
        "Kyoto University": "https://www.kyoto-u.ac.jp/en",
        "Osaka University": "https://www.osaka-u.ac.jp/en"
      },
      engineering: {
        "Tokyo Institute of Technology": "https://www.titech.ac.jp/english/",
        "Kyoto University Faculty of Engineering": "https://www.kyoto-u.ac.jp/en",
        "Osaka University Faculty of Engineering": "https://www.osaka-u.ac.jp/en"
      }
    },
    southkorea: {
      mbbs: {
        "Seoul National University": "https://en.snu.ac.kr/",
        "Korea University": "https://www.korea.ac.kr/mbshome/mbs/en/index.do",
        "Yonsei University": "https://www.yonsei.ac.kr/en_sc/",
        "Hanyang University": "https://www.hanyang.ac.kr/web/eng",
        "Sungkyunkwan University": "https://www.skku.edu/eng/"
      },
      nursing: {
        'Seoul National University Nursing School': 'https://en.snu.ac.kr/',
        'Korea University Nursing Department': 'https://www.korea.ac.kr/mbshome/mbs/en/index.do',
        'Yonsei University Nursing College': 'https://www.yonsei.ac.kr/en_sc/',
        'Hanyang University Nursing Institute': 'https://www.hanyang.ac.kr/web/eng',
        'Sungkyunkwan University Nursing School': 'https://www.skku.edu/eng/'
      },
      artsandscience: {
        "Seoul National University": "https://en.snu.ac.kr/",
        "Korea University": "https://www.korea.ac.kr/mbshome/mbs/en/index.do",
        "Yonsei University": "https://www.yonsei.ac.kr/en_sc/"
      },
      engineering: {
        "Korea Advanced Institute of Science and Technology (KAIST)": "https://www.kaist.ac.kr/en/",
        "Seoul National University Faculty of Engineering": "https://en.snu.ac.kr/",
        "Korea University Faculty of Engineering": "https://www.korea.ac.kr/mbshome/mbs/en/index.do"
      }
    },
 
    hungary: {
      mbbs: {
        "Semmelweis University": "https://semmelweis.hu/english/",
        "University of Szeged": "https://u-szeged.hu/english",
        "University of Debrecen": "https://unideb.hu/en",
        "Pécs University": "https://international.pte.hu/",
        "University of Miskolc": "https://www.uni-miskolc.hu/"
      },
      nursing: {
        'Semmelweis University Nursing School': 'https://semmelweis.hu/english/',
        'University of Szeged Nursing Department': 'https://u-szeged.hu/english',
        'University of Debrecen Nursing College': 'https://unideb.hu/en',
        'Pécs University Nursing Institute': 'https://international.pte.hu/',
        'University of Miskolc Nursing School': 'https://www.uni-miskolc.hu/'
      },
      artsandscience: {
        "Eötvös Loránd University": "https://www.elte.hu/en",
        "University of Szeged": "https://u-szeged.hu/english",
        "University of Debrecen": "https://unideb.hu/en"
      },
      engineering: {
        "Budapest University of Technology and Economics": "https://www.bme.hu/?language=en",
        "University of Szeged Faculty of Engineering": "https://u-szeged.hu/english",
        "University of Debrecen Faculty of Engineering": "https://unideb.hu/en"
      }
    },
    greece: {
      mbbs: {
        "National and Kapodistrian University of Athens": "https://en.uoa.gr/",
        "Aristotle University of Thessaloniki": "https://www.auth.gr/en",
        "University of Patras": "https://www.upatras.gr/en/",
        "University of Crete": "https://www.uoc.gr/en/",
        "University of Ioannina": "https://www.uoi.gr/en/"
      },
      nursing: {
        'National and Kapodistrian University of Athens Nursing School': 'https://en.uoa.gr/',
        'Aristotle University of Thessaloniki Nursing Department': 'https://www.auth.gr/en',
        'University of Patras Nursing College': 'https://www.upatras.gr/en/',
        'University of Crete Nursing Institute': 'https://www.uoc.gr/en/',
        'University of Ioannina Nursing School': 'https://www.uoi.gr/en/'
      },
      artsandscience: {
        "National and Kapodistrian University of Athens": "https://en.uoa.gr/",
        "Aristotle University of Thessaloniki": "https://www.auth.gr/en",
        "University of Patras": "https://www.upatras.gr/en/"
      },
      engineering: {
        "National Technical University of Athens": "https://www.ntua.gr/en/",
        "Aristotle University of Thessaloniki Faculty of Engineering": "https://www.auth.gr/en",
        "University of Patras Faculty of Engineering": "https://www.upatras.gr/en/"
      }
    },
    sweden: {
      mbbs: {
        "Karolinska Institutet": "https://ki.se/en",
        "Uppsala University": "https://www.uu.se/en",
        "Lund University": "https://www.lunduniversity.lu.se/",
        "Gothenburg University": "https://www.gu.se/english",
        "Stockholm University": "https://www.su.se/english/"
      },
      nursing: {
        'Karolinska Institutet Nursing School': 'https://ki.se/en',
        'Uppsala University Nursing Department': 'https://www.uu.se/en',
        'Lund University Nursing College': 'https://www.lunduniversity.lu.se/',
        'Gothenburg University Nursing Institute': 'https://www.gu.se/english',
        'Stockholm University Nursing School': 'https://www.su.se/english/'
      },
      artsandscience: {
        "Uppsala University": "https://www.uu.se/en",
        "Lund University": "https://www.lunduniversity.lu.se/",
        "Gothenburg University": "https://www.gu.se/english"
      },
      engineering: {
        "KTH Royal Institute of Technology": "https://www.kth.se/en",
        "Chalmers University of Technology": "https://www.chalmers.se/en",
        "Lund University Faculty of Engineering": "https://www.lunduniversity.lu.se/"
      }
    },
    Switzerland: {
      mbbs: {
        "University of Zurich": "https://www.uzh.ch/en.html",
        "University of Geneva": "https://www.unige.ch/en/",
        "University of Basel": "https://www.unibas.ch/en.html",
        "University of Bern": "https://www.unibe.ch/index_eng.html",
        "University of Lausanne": "https://www.unil.ch/central/en/home.html"
      },
      nursing: {
        'University of Zurich Nursing School': 'https://www.uzh.ch/en.html',
        'University of Geneva Nursing Department': 'https://www.unige.ch/en/',
        'University of Basel Nursing College': 'https://www.unibas.ch/en.html',
        'University of Bern Nursing Institute': 'https://www.unibe.ch/index_eng.html',
        'University of Lausanne Nursing School': 'https://www.unil.ch/central/en/home.html'
      },
      artsandscience: {
        "University of Zurich": "https://www.uzh.ch/en.html",
        "University of Geneva": "https://www.unige.ch/en/",
        "University of Basel": "https://www.unibas.ch/en.html"
      },
      engineering: {
        "ETH Zurich": "https://ethz.ch/en.html",
        "EPFL (École Polytechnique Fédérale de Lausanne)": "https://www.epfl.ch/en/",
        "University of Zurich Faculty of Engineering": "https://www.uzh.ch/en.html"
      }
    },
    Ireland: {
      mbbs: {
        "Trinity College Dublin": "https://www.tcd.ie/",
        "University College Dublin": "https://www.ucd.ie/",
        "Royal College of Surgeons in Ireland": "https://www.rcsi.com/",
        "National University of Ireland, Galway": "https://www.nuigalway.ie/",
        "University of Limerick": "https://www.ul.ie/"
      },
      nursing: {
        'Trinity College Dublin Nursing School': 'https://www.tcd.ie/',
        'University College Dublin Nursing Department': 'https://www.ucd.ie/',
        'Royal College of Surgeons in Ireland Nursing College': 'https://www.rcsi.com/',
        'National University of Ireland, Galway Nursing Institute': 'https://www.nuigalway.ie/',
        'University of Limerick Nursing School': 'https://www.ul.ie/'
      },
      artsandscience: {
        "Trinity College Dublin": "https://www.tcd.ie/",
        "University College Dublin": "https://www.ucd.ie/",
        "National University of Ireland, Galway": "https://www.nuigalway.ie/"
      },
      engineering: {
        "Trinity College Dublin Faculty of Engineering": "https://www.tcd.ie/",
        "University College Dublin Faculty of Engineering": "https://www.ucd.ie/",
        "University of Limerick Faculty of Engineering": "https://www.ul.ie/"
      }
    },

    Newzealand: {
      mbbs: {
        "University of Auckland": "https://www.auckland.ac.nz/en.html",
        "University of Otago": "https://www.otago.ac.nz/",
        "University of Canterbury": "https://www.canterbury.ac.nz/",
        "Massey University": "https://www.massey.ac.nz/",
        "Victoria University of Wellington": "https://www.wgtn.ac.nz/"
      },
      nursing: {
        'University of Auckland Nursing School': 'https://www.auckland.ac.nz/en.html',
        'University of Otago Nursing Department': 'https://www.otago.ac.nz/',
        'University of Canterbury Nursing College': 'https://www.canterbury.ac.nz/',
        'Massey University Nursing Institute': 'https://www.massey.ac.nz/',
        'Victoria University of Wellington Nursing School': 'https://www.wgtn.ac.nz/'
      },
      artsandscience: {
        "University of Auckland": "https://www.auckland.ac.nz/en.html",
        "University of Otago": "https://www.otago.ac.nz/",
        "University of Canterbury": "https://www.canterbury.ac.nz/"
      },
      engineering: {
        "University of Auckland Faculty of Engineering": "https://www.auckland.ac.nz/en.html",
        "University of Canterbury Faculty of Engineering": "https://www.canterbury.ac.nz/",
        "Massey University Faculty of Engineering": "https://www.massey.ac.nz/"
      }
    }
    
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' && { institutionType: '', institution: '' }),
      ...(name === 'institutionType' && { institution: '' })
    }));
  };

  const getInstitutionTypes = () => {
    if (!filters.country || !institutionLinks[filters.country]) return [];
    return Object.keys(institutionLinks[filters.country]);
  };

  const getInstitutions = () => {
    if (!filters.country || !filters.institutionType || !institutionLinks[filters.country]) return [];
    return institutionLinks[filters.country][filters.institutionType] || {};
  };

  const handleSearch = () => {
    const institutions = getInstitutions();
    const selectedInstitution = institutions[filters.institution];
    
    if (selectedInstitution) {
      window.open(selectedInstitution, '_blank');
    } else {
      console.log('Searching with filters:', filters);
      alert(`Searching for ${filters.institutionType} programs in ${filters.country}`);
    }
  };

  const countries = Object.keys(institutionLinks);
  const institutionTypes = getInstitutionTypes();
  const institutions = getInstitutions();

  return (
    <section className="course-finder">
      <h1>Find Your Course</h1>
      <div className="subtitle">Do you want to fly high?</div>
      <p className="description">
        Make your aspirations come alive with the Best Study Abroad Consultants in Kerala. 
        Find your ambitious course here.
      </p>
      
      <div className="education-level">Select Education Level</div>
      
      <div className="filters">
        <div className="filter-item">
          <div className="filter-label">Select Country</div>
          <select 
            name="country" 
            value={filters.country}
            onChange={handleFilterChange}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country} value={country}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-item">
          <div className="filter-label">Select Course Type</div>
          <select 
            name="institutionType" 
            value={filters.institutionType}
            onChange={handleFilterChange}
            disabled={!filters.country}
          >
            <option value="">Select Course Type</option>
            {institutionTypes.map(type => (
              <option key={type} value={type}>
                {type === 'mbbs' ? 'MBBS' : 
                 type === 'artsandscience' ? 'Arts & Science' :
                 type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-item">
          <div className="filter-label">Select Institution</div>
          <select 
            name="institution" 
            value={filters.institution}
            onChange={handleFilterChange}
            disabled={!filters.institutionType}
          >
            <option value="">Select Institution</option>
            {Object.keys(institutions).map(institution => (
              <option key={institution} value={institution}>
                {institution}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <button 
        className="search-btn" 
        onClick={handleSearch}
        disabled={!filters.institution}
      >
        {filters.institution ? 'Visit Institution Website →' : 'Search →'}
      </button>

      {filters.institution && institutions[filters.institution] && (
        <div className="institution-info">
          <p>Selected: <strong>{filters.institution}</strong></p>
          <p>Click "Visit Institution Website" to learn more about this institution.</p>
        </div>
      )}
    </section>
  );
};

export default CourseFinder;