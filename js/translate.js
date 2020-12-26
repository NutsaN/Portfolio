
const AVAILABLE_LANGUAGES = ['ge', 'en'];

const DICTIONARY = {
        'jan': {'en': 'January', 'ge': 'იანვარი'},
        'feb': {'en': 'February', 'ge': 'თებერვალი'},
        'mar': {'en': 'March', 'ge': 'მარტი'},
        'apr': {'en': 'April', 'ge': 'აპრილი'},
        'may': {'en': 'May', 'ge': 'მაისი'},
        'jun': {'en': 'June', 'ge': 'ივნისი'},
        'jul': {'en': 'July', 'ge': 'ივლისი'},
        'aug': {'en': 'August', 'ge': 'აგვისტო'},
        'sep': {'en': 'September', 'ge': 'სექტემბერი'},
        'oct': {'en': 'October', 'ge': 'ოქტომბერი'},
        'nov': {'en': 'November', 'ge': 'ნოემბერი'},
        'dec': {'en': 'December', 'ge': 'დეკემბერი'},
        'present': {'en': 'Present', 'ge': "დღემდე"},
        '': {'en': '', 'ge': ''},
        'name': {'en': 'Nutsa Ninua', 'ge': 'ნუცა ნინუა'},
        'dig_market': {'en': 'Social Media Manager, Copywriter ', 'ge': 'სოციალური მედიის მენეჯერი, ქოფირაითერი'},
        'marketing_manager': {'en': 'Marketing Manager', 'ge': 'მარკეტინგის მენეჯერი'},
        'edu': {'en': 'Education', 'ge': 'განათლება'},
        'school': {'en': '21 Public School', 'ge': '21-ე საჯარო სკოლა'},
        'midhigh': {'en': 'Middle/High School', 'ge': 'საშუალო სკოლა'},
        'agruni': {'en': 'Agricultural University Of Georgia', 'ge': 'საქართველოს აგრარული უნივერსიტეტი'},
        'degree': {'en': 'Bachelor of Biology', 'ge': 'ბიოლოგიის ბაკალავრი'},
        'date': {'en': 'September 2017 - Present', 'ge': 'სექტემბერი 2017 - დღემდე'},
        'work': {'en': 'Work', 'ge': 'სამუშაო გამოცდილება'},
        'about': {'en': 'About', 'ge': 'ჩემ შესახებ'},
        'about_2': {'en': 'About me', 'ge': 'ჩემ შესახებ'},
        'down_cv': {'small': true, 'en': 'Download resume', 'ge': 'გადმოწერეთ რეზიუმე'},
        'resume': {'en': 'Resume', 'ge': 'რეზიუმე'},
        'self_titles': {'en': 'Self-aclaimed titles', 'ge': 'თვითმინიჭებული ტიტულები'},
        'titles_list': {'en': 'Duolingo Sage • Netflix Bingewatcher • glittery MUA', 'ge': 'დუოლინგოს სწავლული • ნეტფლიქსის სულსწრაფად მაყურებელი • ბრჭყვიალა ჩრდილების უსტაბაში'},
        'contact': {'en': 'Contact', 'ge': 'დამიკავშირდით'},
        'portfolio': {'en': 'Examples', 'ge': 'მაგალითები'},
        'examples': {'en': 'Exemplary [CTRL+C]s and more magic', 'ge': '[CTRL+C]-ების მაგალითები და სხვა ჯადოქრობები'},
        'about_me': {
            'small': true,
            'en': 'My experience with writing in the digital realm starts in 2011 when having a WordPress blog for your every shower thought was considered a personality trait. Since then I have worked as a social media manager for small startups and big companies, however, coming up with clever wordplay or dad jokes are my specialty.',
            'ge': 'ჩემი და ციფრული სამყაროს ურთიერთობა 2011 წელს დაიწყო, როცა წვრილმანი ამბების გაზიარების ადგილი ვორდპრესის ბლოგები იყო. მას შემდეგ ბევრგან მიმუშავია სოციალურ მედიაში, როგორც პატარა სტარტაპებისთვის, ასევე - დიდი კომპანიებისთვის, თუმცა, ჩემს კალამს კალამბურების ამბებს არაფერი ურჩევნია.'
        },
        'methodology': {'en': 'Programming Methodology', 'ge': 'პროგრამირების მეთოდოლოგა', 'small': true},
        'abstractions': {'en': 'Programming Abstractions', 'ge': 'პროგრამირების აბსტრაქციები', 'small': true},
        'paradigms': {
            'en': 'Programming Paradigms (Computer Organization & Systems)',
            'ge': 'პროგრამირების პარადიგმები / კომპიუტერების წყობა და სისტემები ', 'small': true
        },
        'rdbms': {
            'en': 'Relational Database Management Systems',
            'ge': 'მონაცემთა ბაზების მართვის რელაციური სისტემები',
            'small': true
        },
        'algo': {'en': 'Algorithms and Data Structures', 'ge': 'მონაცემთა სტრუქტურები და ალგორითმები', 'small': true},
        'oop': {
            'en': 'Object Oriented Programming (Software Engineering)',
            'ge': 'ობიექტზე ორიენტირებული პროგრამირება / პროგრამული უზრუნველყოფის ინჟინერია',
            'small': true
        },
        'coursework': {'en': 'Related Coursework:', 'ge': 'გავლილი კურსები:'},
        'seclead': {'en': 'Teaching Assistant (Section Leader)', 'ge': 'ლექტორის ასისტენტი (სექციის ლიდერი)'},
        'seclead_date': {
            'en': 'March 2017 - July 2017 | October 2017 - present',
            'ge': 'მარტი 2017 - ივლისი 2017 | ოქტომბერი 2017 - დღემდე',
            'small': true
        },
        'seclead_description': {
            'small': true,
            'en': 'Responsible for grading programming homeworks of 8-10 students (functionality, efficiency,' +
                ' styling and documenting), explaining their mistakes and providing consultations\n' +
                '\n' +
                'if necessary.',
            'ge': 'სექციის ლიდერებს ევალებათ კონსულტაციები  გაუწიონ სტუდენტებს კომპიუტერული მეცნიერებების\n' +
                'ძირითად კურსებში და შეაფასონ მათ მიერ შესრულებული დავალებები აღნიშნულ კურსებში' +
                ' ფუნქციონალურობის, ეფექტურობის, სტილის და დოკუმენტაციის მიხედვით.'
        },
        'phone_number': {'en': 'Phone Number', 'ge': 'საკონტაქტო ნომერი', 'small': true},
        'gifts': {'en': 'Send me cool gadgets at', 'ge': 'ამავსეთ საჩუქრებით: '},
        'skills': {'en': 'Skills', 'ge': 'უნარები'},
        'soft': {'en': 'Software', 'ge': 'პროგრამები'},
        'personal': {'en': 'Personal', 'ge': 'პიროვნული'},
        'around_web': {'en': 'Around the Web', 'ge': 'მიპოვეთ ინტერნეტში'},
        'email_me': {'small': true, 'en': 'Email me at', 'ge': 'მომწერეთ ელ-ფოსტაზე '},
        'content_man': {'en': 'Content Manager, Copywriter', 'ge': 'კონტენტ მენეჯერი, ქოფირაითერი'},
        'nebula_resp': {
            'small': true,
            'en': 'Responsible for creating, posting, advertising (using the ads manager) content for social media,\n' +
                '                  writing copy for web-site and responding to inbox messages.',
            'ge': 'კონტენტის მოფიქრება და განთავსება სოციალურ მედიაში,\n' +
                'ვებ-საიტის ქოფირაითინგი,\n' +
                'ინბოქსში შემოსულ მესიჯებზე პასუხი'
        },
        'nebula_date': {
            'en': 'February 2017 - February 2018',
            'ge': 'თებერვალი 2017 - თებერვალი 2018',
            'small': true
        },

        'cpywrt': {'en': 'Copywriter', 'ge': 'ქოფირაითერი'},
        'bookgeo_descr': {
            'small': true,
            'en': 'Writing articles about Georgia in English.\n',
            'ge': 'სტატიების წერა ინგლისურად საქართველოს სხვადასხვა კუთხეზე.'
        },
        'bookgeo_date': {'en': '2017 August - present', 'ge': 'აგვისტო 2017 - დღემდე', 'small': true},
        'languages': {'en': 'Languages', 'ge': 'ენები'},
        'lang_ge': {'en': 'Georgian', 'ge': 'ქართული'},
        'lang_en': {'en': 'English', 'ge': 'ინგლისური'},
        'lang_ru': {'en': 'Russian', 'ge': 'რუსული'},
        'lang_de': {'en': 'German', 'ge': 'გერმანული'},
        'lang_fr': {'en': 'French', 'ge': 'ფრანგული'},
        'lang_nat': {'en': 'Native', 'ge': 'მშობლიურად'},
        'lang_flu': {'en': 'Fluent', 'ge': 'თავისუფლად'},
        'lang_int': {'en': 'Intermediate', 'ge': 'საშუალოდ'},
        'lang_lim': {'en': 'Limited', 'ge': 'ნაკლებად'},
        'lang_beg': {'en': 'Beginner', 'ge': 'დამწყები'},
        'advanced': {'en': 'Advanced', 'ge': 'კარგად'},
        'basic': {'en': 'Basic', 'ge': 'საწყისები'},
        'goal_ori': {'en': 'Goal oriented writing', 'ge': 'მიზანზე ორიენტირებული წერა'},
        'func_writing': {'en': 'Functional and laconic writing', 'ge': 'ფუნქციურად და ლაკონიურად წერა'},
        'punctuation': {'en': 'Giving personal space to every punctuation mark', 'ge': 'ყოველ სასვენ ნიშანს პირადი სფეისი'},
        'fast': {'en': 'Fast learner', 'ge': 'სწრაფად ათვისება'},
        'space_det': {'en': 'Detecting extra whitespaces in texts', 'ge': 'ზედმეტი Space-ების შემჩნევა'},
        'googling': {'en': 'Googling', 'ge': 'დაგუგლვა'},
        'trans_edit': {'en': 'Translator and Video Editor', 'ge': 'მთარგმნელი და ვიდეოების მემონტაჟე'},
        'chcd_position': {'en': 'Junior Social Media Manager for \"My wife\'s friends\"', 'ge': 'სერიალ \"ჩემი ცოლის დაქალების\" სოციალური მედიის მენეჯერის ასისტენტი'},
        'intern_soc': {'en': 'Intern Social Media Manager', 'ge': 'სტაჟიორი სოციალური მედიის მენეჯერი'},
        'chcd_date': {'en': 'October 2017 - May 2019', 'ge': 'ოქტომბერი 2017 - მაისი 2019'},
        'mkr_position': {'en': 'Social Media Manager for \"My Kitchen Rules Georgia\"', 'ge': 'სატელევიზიო გადაცემის \"ჩემი სამზარეულოს წესების\" სოციალური მედიის მენეჯერი'},
        'mkr_date': {'en': 'March 2018 - August 2018', 'ge': 'მარტი 2018 - აგვისტო 2018'},
        'soc_man': {'en': 'Social Media Manager', 'ge': 'სოციალური მედიის მენეჯერი'},
        'free_jour': {'en': 'Freelance Journalist', 'ge': 'ფრილანსერი ჟურნალისტი'},
        'jour': {'en': 'Journalist', 'ge': 'ჟურნალისტი'},
        'our_express_date': {'en': '2012 September - 2013 June', 'ge': 'სექტემბერი 2012 - ივნისი 2013'},
        'ishare_date': {'en': '2017 January - 2017 February', 'ge': 'იანვარი 2017 - თებერვალი 2017'},
        'gingers_date': {'en': 'October 2018 - November 2018', 'ge': 'ოქტომბერი 2018 - ნოემბერი 2018'},
        'gingers_resp': {
            'en': 'Responsible for managing different social media pages, advertising and making reports.',
            'ge': 'სხვადასხვა გვერდების მართვა, დარეკლამება და შესაბამისი რეპორტების კეთება',
            'small': true
        },
        'soc_media': {'en': 'Social Media Manager', 'ge': 'სოციალური მედიის მენეჯერი'},
        'vendoo_date': {'en': 'February 2019 - present', 'ge': 'თებერვალი 2018 - დღემდე'},
        'vendoo_resp': {
            'en': '',
            'ge': '',
            'small': true
        }
    }
;

function translate(lang) {
    function removeLanguages($, args) {
        for (var i in args) {

            jQuery(this).removeClass('lang-' + args[i]);

            jQuery(this).removeClass('lang-' + args[i] + '-small');
        }
    }

    $('.lang').each(function (index, element) {
        var key = $(this).attr('data-key');
        removeLanguages($(this), AVAILABLE_LANGUAGES);

        try {

            $(this).html(DICTIONARY[key][lang]);

            $(this).addClass('lang-' + lang + (DICTIONARY[key]['small'] === true ? '-small' : ''));
        } catch (e) {
            console.error(key)
        }
    });

}

function initTranslation() {

    $('.translate').click(function () {
        var lang = $(this).attr('id');
        translate(lang);
    });
    var currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    if (AVAILABLE_LANGUAGES.indexOf(currentLang.toLowerCase()) !== -1) {
        translate(currentLang);
    }
}
