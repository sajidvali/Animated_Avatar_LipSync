import nltk.corpus
import nltk


def word_to_viseme_list(words):
    a = nltk.corpus.cmudict.dict()
    l = []
    for w in words:
        if w == '.':
            for i in range(11):
                l.append(phoneme_to_viseme_index(''))
        elif w == ',':
            for i in range(8):
                l.append(phoneme_to_viseme_index(''))
        elif w in '?!':
            for i in range(10):
                l.append(phoneme_to_viseme_index(''))
        elif w.lower() in a:
            for i in a[w.lower()][0]:
                p = phoneme_to_viseme_index(i[:2])
                l.append(p)
        else:
            print('key error:', w)
    l.append(0)
    return l


f = {0: 'julia_full.png',
     2: 'julia_mouth_wide5.png',
     1: 'julia_mouth_wide5.png',
     3: 'julia_mouth_narrow_o.png',
     9: 'julia_mouth_wide_d_f_k_r_s.png',
     11: 'julia_mouth_wide5.png',
     21: 'julia_mouth_closed.png',
     16: 'julia_mouth_wide_sh.png',
     19: 'julia_mouth_wide_sh.png',
     17: 'julia_mouth_wide_th.png',
     4: 'julia_mouth_wide_y.png',
     5: 'julia_mouth_wide5.png',
     18: 'julia_mouth_wide_f.png',
     20: 'julia_mouth_wide_d_f_k_r_s.png',
     12: 'julia_mouth_wide_d_f_k_r_s.png',
     6: 'julia_mouth_wide_d_f_k_r_s.png',
     14: 'julia_mouth_wide5.png',
     8: 'julia_mouth_narrow_o.png',
     10: 'julia_mouth_narrow_u.png',
     13: 'julia_mouth_wide_sh.png',
     15: 'julia_mouth_wide_sh.png',
     7: 'julia_mouth_narrow_w.png'}


def phoneme_to_viseme_index(phoneme):
    m = {'': 0,
         'AA': 2,
         'AE': 1,
         'AH': 1,
         'AO': 3,
         'AW': 9,
         'AY': 11,
         'B': 21,
         'CH': 16,
         'D': 19,
         'DH': 17,
         'EH': 4,
         'ER': 5,
         'EY': 4,
         'F': 18,
         'G': 20,
         'HH': 12,
         'IH': 6,
         'IY': 6,
         'JH': 16,
         'K': 20,
         'L': 14,
         'M': 21,
         'N': 19,
         'NG': 20,
         'OW': 8,
         'OY': 10,
         'P': 21,
         'R': 13,
         'S': 15,
         'SH': 16,
         'T': 19,
         'TH': 17,
         'UH': 4,
         'UW': 7,
         'V': 18,
         'W': 7,
         'Y': 6,
         'Z': 15,
         'ZH': 16,
        }
    return m[phoneme]


def viseme_index(sent):
    words = nltk.word_tokenize(sent.replace('\n', '!'))
    new_words = [i for j in words for i in j.split('-')]
    print(new_words)
    return word_to_viseme_list(new_words)


