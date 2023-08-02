class Project {
    constructor(title, description, image_link, link) {
        this.title = title;
        this.description = description;
        this.image_link = image_link;
        this.link = link;
    }
}

const projects = [
    new Project(
        "مسیر یاب دو بعدی",
        "پروژه ای نسبتا سنگین (طراحی شده برای ویندوز). این پروژه تنها روی دیوایث کنونی ران می شود. این بدین معنا می باشد که پس از ورود به پروژه و باز شدن کامل وب, ارتباط وب با سرور کاملا قطع می شود.",
        "/src/sample-project-thumbnails/path-finder.png",
        "/sample-projects/pathfinder.ejs"
    ),
    new Project(
      "انیمیشن و جذاب سازی وبسایت",
      "این نمونه پروژه بر مبنای انیمشن های متحرک ساخته شده است, که به حرکت صفحه واکنش نشان می دهند. علاوه بر آن, خطوط و اشکال مختلفی برای جالب کردن صفحه ساخته شده اند. حتی در بخش آموزشی وبسایت, می توان توهم فضای سه بعدی را مشاهده کرد! علاوه, تمامی این حالت ها, مناسب با هر سایز صفحه طراحی شده اند.",
      "/src/sample-project-thumbnails/fadein-effect.png",
      "/sample-projects/fadein-effect.ejs"
    ),
    new Project(
        "استفاده از فریم ورک vueJS",
        "این پروژه برای نشان دادن امکانات فریم ورک vueJS, در زمینه ی فرانت اند ساخته شده است. نکته ی قابل توجه این پروژه, مقایسه ی سرعت حرکت قسمت های مختلف می باشد, که توهم فضای سه بعدی و عمق تصویر را ایجاد می کند.",
        "/src/sample-project-thumbnails/health-care.png",
        "/sample-projects/health-care.ejs"
    ),
    new Project(
        "استفاده از فریم ورک React",
        "این نمونه پروژه (که بیشتر برای موس و کیبورد ساخته شده است) یک نمونه کار ساده با فریم ورک React میباشد. این فریم ورک فرانت اند, مناسب برای ساخت پروژه های ریسپانسیو می باشد, و امروزه خیلی برای افزایش سرعت عمل برنامه نویسان فرانت اند, مورد استفاده قرار می گیرد.",
        "/src/sample-project-thumbnails/react-interact.png",
        "/sample-projects/react-interact.ejs"
    ),new Project(
        "استفاده از فریم ورک bootstrap",
        "فریم ورک bootstrap یکی از برترین فریم ورک های css میباشد, که قابلیت ساخت به سرعت وبسایت های ریسپانسیو را به برنامه نویس می دهد. از مهم ترین مضیت های این فریم ورک, قابلیت استفاده از آن همراه با سایر فریم ورک های فرانت اند می باشد. این وبسایت جالب در کمتر از سه ساعت درست شده است.",
        "/src/sample-project-thumbnails/bootstrap-A.png",
        "/sample-projects/bootstrap-A.ejs"
    ),
    new Project(
        "طراحی منوی ورودی کریستال آبی",
        "این وبسیات برای نمایش قدرت HTML و CSS در طراحی یک وب ساخته شده است. چیدمان وبسایت با استفاده از تکنیک های گوناگون ساخته شده که با توجه به سایز صفحه تغییر می کند.",
        "/src/sample-project-thumbnails/menu-design.png",
        "/sample-projects/menu-design.ejs"
    ),
    new Project(
        "الگوریتم مرتب سازی",
        "این الگوریتم ساده برای نمایش توانایی کد در ساخت انیمیشن ساخته شد است. الگوریتم ساخته شده bubble sorter نامیده شده است, که می توان در مورد شیوه ی کار این الگوریتم مطالعه کرد. پروژه کاملا داینامیک (dynamic) می باشد",
        "/src/sample-project-thumbnails/sorting-visualizer.png",
        "/sample-projects/sorting-visualizer.ejs"
    ),
    new Project(
      "الگوریتم سه بعدی مرتب سازی!",
      "این پروژه تنها با جاوااسکریپت ساخته شده و HTML و CSS. این بدین معنا میباشد که حالت سه بعدی که نمایش داده می شود تنها یک توحم تصویری می باشد و با استفاده از تکنیک های متونع به اجراعی رسیده است. نکته ی قابل توجه این وبسایت, انیمشن های آن می باشد و شیوه ی چیدمان آنها." ,
      "/src/sample-project-thumbnails/sorting3D.png",
      "/sample-projects/sorting3D.ejs"
    ),
    new Project(
        "منوی وب یک کمپانی",
        "مانند مثال قبلی, این وب نیز برای نمایش قدرت طراحی وب ساخته شده است. در این پروژه از تعدادی icon نیز از فرمت svg استفاده شده است که مناسب هر سایز صفحه میباشند.",
        "/src/sample-project-thumbnails/future-design.png",
        "/sample-projects/future-design.ejs"
    ),
    new Project(
        "نگهداری متن روی سرور",
        "این پروژه برای نمایش ارتباط میان سرور و وب ساخته شده. روند به گونه ای می باشد که سرور مجموعه جملات ارسال می کند و کلاینت نیز می تواند با این ارتباط, متن خود را ارسال کند.",
        "/src/sample-project-thumbnails/text-share.png",
        "/sample-projects/text-share.ejs"
    ),
    new Project(
        "گرفتن اطلاعات از وبسایت های دیگر",
        "یکی از کار هایی که می توان در طراحی وبسایت انجام داد, ایجاد ارتباط میان دو یا چند وبسایت می باشد. در اینجا نمونه ای ساده از کانال آپارات بنده آمده است, به طوری که تصاویر هر ویدیو به طور مستقیم از دامنه ی آپارات درخواست می شود.",
        "/src/sample-project-thumbnails/aparat-copy.png",
        "/sample-projects/aparat-copy.ejs"
    ),
    new Project(
        "نمایش نمودار سینوسی",
        "این پروژه تنها برای نمیاش قدرت Canvas در HTML ساخته شده است. تصویر سازی های ویژه مثل trail و یا shadow (light) در این پروژه به نمایش گزاشته شده است. مقادیر مختلف کد را به طور زنده با کنترل های لمسی تغییر دهید.",
        "/src/sample-project-thumbnails/sin-wave.png",
        "/sample-projects/sin-wave.ejs"
    ),
    new Project(
        "نمیاش سه بعدی",
        "نمونه ای ساده برای نمایش امکان استفاده از کتابخانه ی three.js برای تصویر سازی سه بعدی",
        "/src/sample-project-thumbnails/three.png",
        "/sample-projects/three.ejs"
    ),
    new Project(
        "الگوریتم تقسیم هورنر",
        "این الگوریتم برای تقسیم چند جمله ای بر چند جمله ای ساخته شده است که در این مورد بسیار حساس است. لطفا به نکات ذکر شده توجه کنید.",
        "/src/sample-project-thumbnails/horner-algo.png",
        "/sample-projects/horner-algo.ejs"
    ),
];

module.exports = projects;