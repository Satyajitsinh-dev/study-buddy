/* =====================================================
   i18n.js – Translations for AI Study Buddy
   Supports: English (en), Hindi (hi), Gujarati (gu)
   To add a language: copy the 'en' block and translate.
   ===================================================== */

const TRANSLATIONS = {
  en: {
    /* ---- Nav ---- */
    app_name:           'AI Study Buddy',
    select_class:       '🎓 Select Class',
    lang_btn:           'EN',

    /* ---- Home ---- */
    home_greeting:      'Hey there, Scholar! 👋',
    home_sub_default:   'Your AI-powered study partner for any class.',
    home_sub_loaded:    'Your AI-powered study partner for Class {cls}. 🎓',
    home_sub_noclass:   'Your AI-powered study partner. Select your class to begin! 🚀',
    home_load_prompt:   '📂 No questions loaded yet!',
    btn_load_sample:    '📦 Load 2368 Sample Questions',
    btn_upload_bank:    '➕ Upload Your Own Question Bank',
    stat_questions:     'Questions',
    stat_attempts:      'Attempts',
    stat_correct:       'Correct',
    stat_accuracy:      'Accuracy',

    /* ---- Feature cards ---- */
    feat_tutor:         'Ask AI Tutor',
    feat_tutor_sub:     'Get instant doubt help!',
    feat_quiz:          'Practice Quiz',
    feat_quiz_sub:      'Test chapter by chapter',
    feat_daily:         'Daily Practice',
    feat_daily_sub:     '20 mixed questions',
    feat_mock:          'Mock Exam',
    feat_mock_sub:      'Full exam simulation',
    feat_term:          'Term Exam',
    feat_term_sub:      '50 marks · mixed paper',
    feat_annual:        'Annual Exam',
    feat_annual_sub:    '80 marks · full paper',
    feat_progress:      'My Progress',
    feat_progress_sub:  'Track your scores',
    feat_bank:          'Question Bank',
    feat_bank_sub:      'Upload CSV questions',
    feat_admin:         'Admin Panel',
    feat_admin_sub:     'Branding & settings',
    feat_review:        'Review Answers',
    feat_review_sub:    'Mark student papers',

    /* ---- Exam student name modal ---- */
    exam_modal_title:   'Before you begin…',
    exam_modal_sub:     'Enter your name so it appears on your result and PDF.',
    exam_modal_name:    'Your name',
    exam_modal_section: 'Section / Class (optional)',
    exam_modal_start:   'Start Exam ✍️',
    exam_modal_skip:    'Skip',

    /* ---- Exam ---- */
    exam_write_here:    'Write your answer here…',
    exam_write_long:    'Write your detailed answer here… 📝',
    exam_write_essay:   'Write your essay here… ✍️',
    exam_submit:        'Submit Exam',
    exam_time_left:     '⏱ Time Remaining:',
    exam_warning:       '⚠️ Less than 5 mins!',
    exam_download_pdf:  '📄 Download Paper PDF',
    exam_try_again:     'Try Again 🔄',

    /* ---- Quiz ---- */
    quiz_start:         'Start Quiz',
    quiz_all_subjects:  '🌈 All Subjects',
    quiz_all_chapters:  '📚 All Chapters',
    quiz_correct:       '✅ Correct! 🌟',
    quiz_wrong:         '❌ Wrong',
    quiz_next:          'Next Question →',
    quiz_new_chapter:   'New Chapter 📚',
    quiz_home:          'Home 🏠',

    /* ---- Daily ---- */
    daily_practice_done:'Daily Practice Done!',
    daily_again:        'Practice Again 🔄',

    /* ---- Progress ---- */
    prog_total:         'Total Attempts',
    prog_correct:       'Correct Answers',
    prog_accuracy:      'Accuracy',
    prog_streak:        'Best Streak',
    prog_subjects:      '📚 Subject Breakdown',
    prog_achievements:  '🏆 Achievements',
    prog_reset:         '🗑️ Reset Progress',

    /* ---- Admin ---- */
    admin_title:        '⚙️ Admin Panel',
    admin_branding:     'Institute Branding',
    admin_sections:     'Classes & Sections',
    admin_students:     'Student Import',
    admin_institute:    'Institute Name',
    admin_logo:         'Logo URL',
    admin_address:      'Address',
    admin_phone:        'Phone',
    admin_email:        'Email',
    admin_footer:       'Footer Text',
    admin_color_primary:'Primary Colour',
    admin_color_sec:    'Secondary Colour',
    admin_save:         '💾 Save Branding',
    admin_add_section:  '+ Add Section',
    admin_bulk_import:  '📥 Import Students CSV',

    /* ---- Teacher review ---- */
    review_title:       '📝 Answer Review',
    review_pending:     'Pending Review',
    review_reviewed:    'Reviewed',
    review_mark_full:   'Full marks',
    review_mark_partial:'Partial',
    review_mark_zero:   'No marks',
    review_save:        '💾 Save Marks',
    review_empty:       'No pending answers to review.',

    /* ---- Auth ---- */
    auth_title:         'Sign in to AI Study Buddy',
    auth_email:         'Your email address',
    auth_send_link:     'Send Magic Link 🔗',
    auth_sent:          '✅ Check your email for the login link!',
    auth_skip:          'Continue without signing in',
    auth_signed_in:     'Signed in as',
    auth_sign_out:      'Sign out',

    /* ---- Misc ---- */
    back:               '← Back',
    save:               'Save',
    cancel:             'Cancel',
    delete:             'Delete',
    preview:            '👁️ Preview',
    loading:            'Loading…',
    offline_badge:      '📴 Offline',
    online_badge:       '🟢 Online',
    sync_pending:       '🔄 {n} unsynced',
    sync_done:          '✅ Synced',
  },

  hi: {
    app_name:           'AI स्टडी बडी',
    select_class:       '🎓 क्लास चुनें',
    lang_btn:           'हिं',

    home_greeting:      'नमस्ते, Scholar! 👋',
    home_sub_default:   'आपका AI पढ़ाई का साथी, किसी भी क्लास के लिए।',
    home_sub_loaded:    'आपका AI पढ़ाई का साथी, Class {cls} के लिए। 🎓',
    home_sub_noclass:   'आपका AI पढ़ाई का साथी। शुरू करने के लिए क्लास चुनें! 🚀',
    home_load_prompt:   '📂 अभी तक कोई सवाल नहीं लोड हुए!',
    btn_load_sample:    '📦 2368 Sample सवाल लोड करें',
    btn_upload_bank:    '➕ अपना Question Bank Upload करें',
    stat_questions:     'सवाल',
    stat_attempts:      'कोशिशें',
    stat_correct:       'सही',
    stat_accuracy:      'सटीकता',

    feat_tutor:         'AI Tutor से पूछो',
    feat_tutor_sub:     'तुरंत शंका दूर करें!',
    feat_quiz:          'Practice Quiz',
    feat_quiz_sub:      'Chapter के हिसाब से टेस्ट',
    feat_daily:         'रोज़ का अभ्यास',
    feat_daily_sub:     '20 मिले-जुले सवाल',
    feat_mock:          'Mock परीक्षा',
    feat_mock_sub:      'पूरी परीक्षा का अभ्यास',
    feat_term:          'Term परीक्षा',
    feat_term_sub:      '50 नंबर · मिश्रित प्रश्न',
    feat_annual:        'Annual परीक्षा',
    feat_annual_sub:    '80 नंबर · पूरा पेपर',
    feat_progress:      'मेरी Progress',
    feat_progress_sub:  'अपने अंक देखें',
    feat_bank:          'Question Bank',
    feat_bank_sub:      'CSV अपलोड करें',
    feat_admin:         'Admin Panel',
    feat_admin_sub:     'Branding और settings',
    feat_review:        'उत्तर जांचें',
    feat_review_sub:    'Student papers mark करें',

    exam_modal_title:   'शुरू करने से पहले…',
    exam_modal_sub:     'अपना नाम डालें — result और PDF पर दिखेगा।',
    exam_modal_name:    'आपका नाम',
    exam_modal_section: 'Section / Class (ऐच्छिक)',
    exam_modal_start:   'परीक्षा शुरू करें ✍️',
    exam_modal_skip:    'छोड़ें',

    exam_write_here:    'यहाँ अपना जवाब लिखें…',
    exam_write_long:    'यहाँ विस्तृत उत्तर लिखें… 📝',
    exam_write_essay:   'यहाँ निबंध लिखें… ✍️',
    exam_submit:        'परीक्षा जमा करें',
    exam_time_left:     '⏱ बचा हुआ समय:',
    exam_warning:       '⚠️ 5 मिनट से कम बचे!',
    exam_download_pdf:  '📄 Paper PDF डाउनलोड करें',
    exam_try_again:     'फिर से करें 🔄',

    quiz_start:         'Quiz शुरू करें',
    quiz_all_subjects:  '🌈 सभी विषय',
    quiz_all_chapters:  '📚 सभी अध्याय',
    quiz_correct:       '✅ सही जवाब! 🌟',
    quiz_wrong:         '❌ गलत',
    quiz_next:          'अगला सवाल →',
    quiz_new_chapter:   'नया अध्याय 📚',
    quiz_home:          'Home 🏠',

    daily_practice_done:'रोज़ का अभ्यास पूरा!',
    daily_again:        'फिर से अभ्यास करें 🔄',

    prog_total:         'कुल कोशिशें',
    prog_correct:       'सही जवाब',
    prog_accuracy:      'सटीकता',
    prog_streak:        'सबसे लंबी streak',
    prog_subjects:      '📚 विषय-वार प्रगति',
    prog_achievements:  '🏆 उपलब्धियाँ',
    prog_reset:         '🗑️ Progress मिटाएँ',

    admin_title:        '⚙️ Admin Panel',
    admin_branding:     'संस्था का नाम और रंग',
    admin_sections:     'Classes और Sections',
    admin_students:     'Student Import',
    admin_institute:    'संस्था का नाम',
    admin_logo:         'Logo URL',
    admin_address:      'पता',
    admin_phone:        'फ़ोन',
    admin_email:        'ईमेल',
    admin_footer:       'Footer Text',
    admin_color_primary:'मुख्य रंग',
    admin_color_sec:    'दूसरा रंग',
    admin_save:         '💾 Branding सेव करें',
    admin_add_section:  '+ Section जोड़ें',
    admin_bulk_import:  '📥 Students CSV Import',

    review_title:       '📝 उत्तर जाँच',
    review_pending:     'जाँच बाकी',
    review_reviewed:    'जाँच हो गई',
    review_mark_full:   'पूरे नंबर',
    review_mark_partial:'आधे नंबर',
    review_mark_zero:   'शून्य नंबर',
    review_save:        '💾 नंबर सेव करें',
    review_empty:       'जाँचने के लिए कोई उत्तर नहीं है।',

    auth_title:         'AI Study Buddy में साइन इन करें',
    auth_email:         'आपका ईमेल पता',
    auth_send_link:     'Magic Link भेजें 🔗',
    auth_sent:          '✅ आपके ईमेल में लॉगिन link भेजा गया!',
    auth_skip:          'बिना साइन इन जारी रखें',
    auth_signed_in:     'साइन इन हैं',
    auth_sign_out:      'साइन आउट',

    back:               '← वापस',
    save:               'सेव करें',
    cancel:             'रद्द करें',
    delete:             'मिटाएँ',
    preview:            '👁️ देखें',
    loading:            'लोड हो रहा है…',
    offline_badge:      '📴 Offline',
    online_badge:       '🟢 Online',
    sync_pending:       '🔄 {n} unsynced',
    sync_done:          '✅ Synced',
  },

  gu: {
    app_name:           'AI સ્ટડી બડી',
    select_class:       '🎓 Class પસંદ કરો',
    lang_btn:           'ગુ',

    home_greeting:      'નમસ્તે, Scholar! 👋',
    home_sub_default:   'તમારો AI અભ્યાસ સાથી, કોઈ પણ ક્લાસ માટે।',
    home_sub_loaded:    'તમારો AI અભ્યાસ સાથી, Class {cls} માટે। 🎓',
    home_sub_noclass:   'તમારો AI અભ્યાસ સાથી। શરૂ કરવા Class પસંદ કરો! 🚀',
    home_load_prompt:   '📂 હજી કોઈ સવાલ લોડ નથી!',
    btn_load_sample:    '📦 2368 Sample સવાલ લોડ કરો',
    btn_upload_bank:    '➕ પોતાનો Question Bank Upload કરો',
    stat_questions:     'સવાલ',
    stat_attempts:      'પ્રયત્ન',
    stat_correct:       'સાચા',
    stat_accuracy:      'ચોકસાઈ',

    feat_tutor:         'AI Tutor ને પૂછો',
    feat_tutor_sub:     'તુરંત શંકા દૂર કરો!',
    feat_quiz:          'Practice Quiz',
    feat_quiz_sub:      'Chapter મુજબ ટેસ્ટ',
    feat_daily:         'રોજ અભ્યાસ',
    feat_daily_sub:     '20 મિશ્ર સવાલ',
    feat_mock:          'Mock પરીક્ષા',
    feat_mock_sub:      'પૂરી પરીક્ષાનો અભ્યાસ',
    feat_term:          'Term પરીક્ષા',
    feat_term_sub:      '50 ગુણ · મિશ્ર પ્રશ્ન',
    feat_annual:        'Annual પરીક્ષા',
    feat_annual_sub:    '80 ગુણ · પૂરો પેપર',
    feat_progress:      'મારી Progress',
    feat_progress_sub:  'ગુણ જુઓ',
    feat_bank:          'Question Bank',
    feat_bank_sub:      'CSV Upload કરો',
    feat_admin:         'Admin Panel',
    feat_admin_sub:     'Branding અને settings',
    feat_review:        'જવાબ તપાસો',
    feat_review_sub:    'Student papers mark કરો',

    exam_modal_title:   'શરૂ કરતાં પહેલાં…',
    exam_modal_sub:     'નામ દાખલ કરો — result અને PDF પર દેખાશે।',
    exam_modal_name:    'તમારું નામ',
    exam_modal_section: 'Section / Class (વૈકલ્પિક)',
    exam_modal_start:   'પરીક્ષા શરૂ કરો ✍️',
    exam_modal_skip:    'છોડો',

    exam_write_here:    'અહીં જવાબ લખો…',
    exam_write_long:    'અહીં વિસ્તૃત જવાબ લખો… 📝',
    exam_write_essay:   'અહીં નિબંધ લખો… ✍️',
    exam_submit:        'પરીક્ષા જમા કરો',
    exam_time_left:     '⏱ બાકી સમય:',
    exam_warning:       '⚠️ 5 મિનિટ કરતાં ઓછો!',
    exam_download_pdf:  '📄 Paper PDF ડાઉનલોડ કરો',
    exam_try_again:     'ફરી કરો 🔄',

    quiz_start:         'Quiz શરૂ કરો',
    quiz_all_subjects:  '🌈 બધા વિષય',
    quiz_all_chapters:  '📚 બધા અધ્યાય',
    quiz_correct:       '✅ સાચો જવાબ! 🌟',
    quiz_wrong:         '❌ ખોટો',
    quiz_next:          'આગળ →',
    quiz_new_chapter:   'નવો અધ્યાય 📚',
    quiz_home:          'Home 🏠',

    daily_practice_done:'રોજ અભ્યાસ પૂર્ણ!',
    daily_again:        'ફરી અભ્યાસ કરો 🔄',

    prog_total:         'કુલ પ્રયત્ન',
    prog_correct:       'સાચા જવાબ',
    prog_accuracy:      'ચોકસાઈ',
    prog_streak:        'સૌથી લાંબી streak',
    prog_subjects:      '📚 વિષય-વાર પ્રગતિ',
    prog_achievements:  '🏆 સિદ્ધિઓ',
    prog_reset:         '🗑️ Progress ભૂંસો',

    admin_title:        '⚙️ Admin Panel',
    admin_branding:     'સંસ્થાનું નામ અને રંગ',
    admin_sections:     'Classes અને Sections',
    admin_students:     'Student Import',
    admin_institute:    'સંસ્થાનું નામ',
    admin_logo:         'Logo URL',
    admin_address:      'સરનામું',
    admin_phone:        'ફોન',
    admin_email:        'ઈ-મેઈલ',
    admin_footer:       'Footer Text',
    admin_color_primary:'મુખ્ય રંગ',
    admin_color_sec:    'ગૌણ રંગ',
    admin_save:         '💾 Branding સેવ કરો',
    admin_add_section:  '+ Section ઉમેરો',
    admin_bulk_import:  '📥 Students CSV Import',

    review_title:       '📝 જવાબ તપાસ',
    review_pending:     'તપાસ બાકી',
    review_reviewed:    'તપાસ થઈ',
    review_mark_full:   'પૂરા ગુણ',
    review_mark_partial:'અડધા ગુણ',
    review_mark_zero:   'શૂન્ય ગુણ',
    review_save:        '💾 ગુણ સેવ કરો',
    review_empty:       'તપાસ માટે કોઈ જવાબ નથી।',

    auth_title:         'AI Study Buddy માં Sign in કરો',
    auth_email:         'તમારો ઈ-મેઈલ',
    auth_send_link:     'Magic Link મોકલો 🔗',
    auth_sent:          '✅ ઈ-મેઈલ માં login link મોકલ્યો!',
    auth_skip:          'Sign in વગર ચાલુ રાખો',
    auth_signed_in:     'Sign in છો',
    auth_sign_out:      'Sign out',

    back:               '← પાછળ',
    save:               'સેવ કરો',
    cancel:             'રદ કરો',
    delete:             'ભૂંસો',
    preview:            '👁️ જુઓ',
    loading:            'લોડ થઈ રહ્યું છે…',
    offline_badge:      '📴 Offline',
    online_badge:       '🟢 Online',
    sync_pending:       '🔄 {n} unsynced',
    sync_done:          '✅ Synced',
  }
};

/* ---- Runtime ---- */
let currentLang = localStorage.getItem('studyBuddy_lang') || 'en';

function t(key, vars) {
  let str = TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS['en']?.[key] ?? key;
  if (vars) Object.keys(vars).forEach(k => { str = str.replace('{' + k + '}', vars[k]); });
  return str;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('studyBuddy_lang', lang);
  applyTranslations();
  document.documentElement.lang = lang;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;   // e.g. data-i18n-attr="placeholder"
    const val  = t(key);
    if (attr) el.setAttribute(attr, val);
    else      el.textContent = val;
  });
}
