$(window).load(function () {
    $('body').removeClass('loading');
    $('body').addClass('loaded');
    $('.animate').bind('inview', function(event, isInView) {
        if (isInView) {
            var animate = $(this).attr('data-animation');
            var speedDuration = $(this).attr('data-duration');
            var $t = $(this);
            setTimeout(function(){
                $t.addClass(animate + ' animated');
            }, speedDuration);
        }
    });
});
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(document).ready(function(){



    var queryString = getParameterByName("q", location.href)

    var pathnamefull = window.location.pathname;
    hrefdocument = String(window.location.pathname).replace("index.html", "");
    if (queryString != null && queryString != undefined && queryString != "") {
        hrefdocument = hrefdocument + "?q=" + queryString;
    }
    var pageurl = pathnamefull.replace(pathnamefull, "/ar/" + hrefdocument);
    $(".lang_change a").attr("href", pageurl);


    $('.profileDropDown').click(function(){
        $(this).find('ul').stop().slideToggle();
    });
    if(!$('body').hasClass('inner') && $(window).width() > 1024){
        var fullPageInst = $('#fullpage').fullpage({
            anchors: ['home-section', 'about-section', 'discover-section', 'map-section', 'news-section', 'footer-section'],
            autoScrolling: false,
            fitToSection: false,
            navigation: true,
            scrollingSpeed: 1000,
            paddingBottom: '0px',
            navigationPosition: 'right',
            navigationTooltips: ['Home', 'About Us', 'Our Services', 'Our Facilities', 'New & Media', 'Footer'],
            scrollOverflow: false,
            showActiveTooltip: false
        });
    }

    if($(window).width() > 1024){
       /* $('.main-menu > ul > li').hover(function(){
            $(this).find('.first-menu').stop().slideDown('fast');
        });
        $('.main-menu > ul > li').mouseleave(function(){
            $(this).find('.first-menu').stop().fadeOut('fast');
        });*/
        $('.main-menu > ul > li').hover(function(){
            $(this).find('.first-menu').stop().slideToggle('fast');
        });
    }
    if($(window).width() <= 1024){
        $('.click-menu').on('click' , function(){
            $(this).next().slideToggle("slow");
            $(this).toggleClass('rotate');
        });
        $('.child-link').on('click', function(){
            $(this).next('.second-menu').stop().slideToggle('fast');
            $(this).toggleClass('rotate');
        });
    }
    $('.brand-logos').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        nav:true,
        dots: false,
        navText:[
            "<i class='icon-angle-left'></i>",
            "<i class='icon-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
                nav:true
            },
            480:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
    /*setTimeout(function(){
     $('body').addClass('loaded');
     }, 1600);*/
    setTimeout(function(){

    }, 1800);
    $('.menu-open').click(function(){
        $('html').toggleClass('open-html');
    });
    $('#nav-icon3').click(function(){
        $(this).toggleClass('click');
    });
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none',
        padding : 'none',
        helpers: {
            title: {
                type: 'over'
            }
        },
        // helpers
        beforeShow: function() {
            this.title = '' + (this.index + 1) + ' / ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });
    $('.fancybox-media').fancybox({
        padding : 'none',
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
//form validation
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var letters = /^[a-zA-Z\u0600-\u06FF\ ]+$/;
    var phone_number = /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 ]{1,45})(([\:]{1,11})?[0-9]{1,4}?)$/;
    var specialchar = /^[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$/;

    $('input[type="file"]').inputfile({
        uploadText: 'Browse',
        removeText: '<span class="glyphicon glyphicon-trash"></span>',
        restoreText: '',
        uploadButtonClass: 'btn btn-primary',
        removeButtonClass: 'btn btn-default'
    });
    $( "#datepicker" ).datepicker();

    var academicType = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        academicMajor = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        academicUniversity = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        academicMonth = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        academicYear = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        bookIndex = 0;

    var employerWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        jobWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        startMonthWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        startYearWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        endMonthWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        endYearWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        specializationWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        responsibilityWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        experienceWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        licenceWork = {
            validators: {
                notEmpty: {
                    message: ' '
                }
            }
        },
        workIndex = 0;


    var MAX_OPTIONS = 5;
    $('#profile')
        .find('[name="marital"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#profile').formValidation('revalidateField', 'marital');
        })
        .end()
        .find('[name="country"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#profile').formValidation('revalidateField', 'country');
        })
        .end()
        .find('[name="nationality"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#profile').formValidation('revalidateField', 'nationality');
        })
        .end()
        .find('[name="date"]').datepicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#profile').formValidation('revalidateField', 'date');
        })
        .end()
        .formValidation({
        framework: 'bootstrap',
        excluded: ':disabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-ok'
        },
        fields: {
            options: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            name: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    regexp: {
                        regexp: letters,
                        message: ' '
                    }
                }
            },
            lname: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    regexp: {
                        regexp: letters,
                        message: ' '
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }, regexp: {
                        regexp: emailRegex,
                        message: ' '
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    date: {
                        format: 'DD/MM/YYYY'
                       /* min: '01/01/2010',
                        max: '12/30/2020',
                        message: 'The date is not a valid'*/
                    }
                }
            },
            marital: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            street: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            nationality: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            contact: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            contact2: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            },
            fileUpload: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    file: {
                        extension: 'pdf,jpeg,jpg,png',
                        type: 'application/pdf,image/jpeg,image/png',
                        /*maxSize: 2 * 1024 * 1024,*/
                        message: ' '
                    }
                }
            },
            fileUpload2: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    file: {
                        extension: 'pdf,jpeg,jpg,png',
                        type: 'application/pdf,image/jpeg,image/png',
                        /*maxSize: 2 * 1024 * 1024,*/
                        message: ' '
                    }
                }
            },
            fileUpload3: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    file: {
                        extension: 'pdf,jpeg,jpg,png',
                        type: 'application/pdf,image/jpeg,image/png',
                        /*maxSize: 2 * 1024 * 1024,*/
                        message: ' '
                    }
                }
            },
            fileUpload4: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    file: {
                        extension: 'pdf,jpeg,jpg,png',
                        type: 'application/pdf,image/jpeg,image/png',
                        /*maxSize: 2 * 1024 * 1024,*/
                        message: ' '
                    }
                }
            },
            'book[0].academicType': academicType,
            'book[0].academicMajor': academicMajor,
            'book[0].academicUniversity': academicUniversity,
            'book[0].academicMonth': academicMonth,
            'book[0].academicYear': academicYear,
            'work[0].employer': employerWork,
            'work[0].job': jobWork,
            'work[0].startMonth': startMonthWork,
            'work[0].startYear': startYearWork,
            'work[0].endMonth': endMonthWork,
            'work[0].endYear': endYearWork,
            'work[0].specialization': specializationWork,
            'work[0].responsibility': responsibilityWork,
            'work[0].experience': experienceWork,
            'work[0].licence': licenceWork,
            'option[]': {
                validators: {
                    notEmpty: {
                        message: ' '
                    }
                }
            }
        },


        onSuccess: function (e) {
            e.preventDefault();
            var $form = $(e.target),
                formId = '#' + $form[0].id;
            $('body,html').animate({
                scrollTop: $(formId).offset().top - 100
            }, 800);
            $(formId).addClass('loading').append('<div class="loader"></div>');
            $.ajax({
                type: 'post',
                url: '/en/contact-us/Post.aspx',
                data: $(formId).serialize(),
                success: function (Response) {

                    var firstLine = Response.split('\n')[0];
                    firstLine = firstLine.trim();
                    if (firstLine == "success") {
                        setTimeout(function () {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            // Then reset the form
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            setTimeout(function () {
                                $('.thanks').hide();
                                $(formId).data('formValidation').resetForm(true);
                            }, 2000);
                        }, 1500);
                        refreshCaptcha();
                        $("#errorNewsletter").hide();
                    }
                    else if (firstLine == "fail") {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").show();
                    }
                    else if (firstLine == "datainvalid") {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").html("Please fill all required fields");
                        $("#errorNewsletter").show();
                    }
                    else {
                        //alert("There seems to be some problem, PLease try later");
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").html("Your details cannot be sent at this time, please try later");
                        $("#errorNewsletter").show();
                    }
                }
            });
        }
    })
    // Add button click handler
        .on('click', '.addButton', function() {
            var $template = $('#uploadTemplate'),
                $clone    = $template
                    .clone()
                    .removeClass('hide')
                    .removeAttr('id')
                    .insertBefore($template),
                $option   = $clone.find('[name="option[]"]');

            // Add new field
            $('#profile').formValidation('addField', $option);
        })

        // Remove button click handler
        .on('click', '.removeButton', function() {
            var $row    = $(this).parents('.new-feild'),
                $option = $row.find('[name="option[]"]');

            // Remove element containing the option
            $row.remove();

            // Remove field
            $('#profile').formValidation('removeField', $option);
        })

        // Called after adding new field
        .on('added.field.fv', function(e, data) {
            // data.field   --> The field name
            // data.element --> The new field element
            // data.options --> The new field options

            if (data.field === 'option[]') {
                if ($('#profile').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                    $('#profile').find('.addButton').attr('disabled', 'disabled');
                }
            }
        })

        // Called after removing the field
        .on('removed.field.fv', function(e, data) {
            if (data.field === 'option[]') {
                if ($('#profile').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                    $('#profile').find('.addButton').removeAttr('disabled');
                }
            }
        })



        .on('click', '.addAcademic', function() {
        bookIndex++;
        var $template = $('#bookTemplate'),
            $clone    = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-book-index', bookIndex)
                .insertBefore($template);

        // Update the name attributes
        $clone
            .find('[name="academicType"]').attr('name', 'book[' + bookIndex + '].academicType').end()
            .find('[name="academicMajor"]').attr('name', 'book[' + bookIndex + '].academicMajor').end()
            .find('[name="academicUniversity"]').attr('name', 'book[' + bookIndex + '].academicUniversity').end()
            .find('[name="academicMonth"]').attr('name', 'book[' + bookIndex + '].academicMonth').end()
            .find('[name="academicYear"]').attr('name', 'book[' + bookIndex + '].academicYear').end();

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        $('#profile')
            .formValidation('addField', 'book[' + bookIndex + '].academicType', academicType)
            .formValidation('addField', 'book[' + bookIndex + '].academicMajor', academicMajor)
            .formValidation('addField', 'book[' + bookIndex + '].academicUniversity', academicUniversity)
            .formValidation('addField', 'book[' + bookIndex + '].academicMonth', academicMonth)
            .formValidation('addField', 'book[' + bookIndex + '].academicYear', academicYear);
        })
        .on('click', '.removeAcademicDetails', function() {
            var $row  = $(this).parents('.academicDetails'),
                index = $row.attr('data-book-index');

            // Remove fields
            $('#profile')
                .formValidation('removeField', $row.find('[name="book[' + index + '].academicType"]'))
                .formValidation('removeField', $row.find('[name="book[' + index + '].academicMajor"]'))
                .formValidation('removeField', $row.find('[name="book[' + index + '].academicUniversity"]'))
                .formValidation('removeField', $row.find('[name="book[' + index + '].academicMonth"]'))
                .formValidation('removeField', $row.find('[name="book[' + index + '].academicYear"]'));

            // Remove element containing the fields
            $row.remove();
        })

        .on('click', '.addWork', function() {
            workIndex++;
        var $template = $('#workExperience'),
            $clone    = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-book-index', workIndex)
                .insertBefore($template);

        // Update the name attributes
        $clone
            .find('[name="employer"]').attr('name', 'work[' + workIndex + '].employerWork').end()
            .find('[name="job"]').attr('name', 'work[' + workIndex + '].jobWork').end()
            .find('[name="startMonth"]').attr('name', 'work[' + workIndex + '].startMonthWork').end()
            .find('[name="startYear"]').attr('name', 'work[' + workIndex + '].startYearWork').end()
            .find('[name="endYear"]').attr('name', 'work[' + workIndex + '].endYearWork').end()
            .find('[name="endMonth"]').attr('name', 'work[' + workIndex + '].endMonthWork').end()
            .find('[name="specialization"]').attr('name', 'work[' + workIndex + '].specializationWork').end()
            .find('[name="responsibility"]').attr('name', 'work[' + workIndex + '].responsibilityWork').end()
            .find('[name="experience"]').attr('name', 'work[' + workIndex + '].experienceWork').end()
            .find('[name="licence"]').attr('name', 'work[' + workIndex + '].licenceWork').end();

        // Add new fields
        // Note that we also pass the validator rules for new field as the third parameter
        $('#profile')
            .formValidation('addField', 'book[' + workIndex + '].employer', employerWork)
            .formValidation('addField', 'book[' + workIndex + '].job', jobWork)
            .formValidation('addField', 'book[' + workIndex + '].startMonth', startMonthWork)
            .formValidation('addField', 'book[' + workIndex + '].startYear', startYearWork)
            .formValidation('addField', 'book[' + workIndex + '].endYear', endYearWork)
            .formValidation('addField', 'book[' + workIndex + '].endMonth', endMonthWork)
            .formValidation('addField', 'book[' + workIndex + '].specialization', specializationWork)
            .formValidation('addField', 'book[' + workIndex + '].responsibility', responsibilityWork)
            .formValidation('addField', 'book[' + workIndex + '].experience', experienceWork)
            .formValidation('addField', 'book[' + workIndex + '].licence', licenceWork);
    })
        .on('click', '.removeWork', function() {
            var $row  = $(this).parents('.workExperience'),
                index = $row.attr('data-work-index');

            // Remove fields
            $('#profile')
                .formValidation('removeField', $row.find('[name="work[' + index + '].employerWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].jobWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].startMonthWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].startYearWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].endMonthWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].endYearWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].specializationWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].responsibilityWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].experienceWork"]'))
                .formValidation('removeField', $row.find('[name="work[' + index + '].licenceWork"]'));

            // Remove element containing the fields
            $row.remove();
        });









    $('#newsleeter').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-ok'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: ' '
                    }, regexp: {
                        regexp: emailRegex,
                        message: ' '
                    }
                }
            },
            captcha: {
                validators: {
                    notEmpty: {
                        message: ' '
                    },
                    identical: {
                        field: 'captcha-match',
                        message: ' '
                    }
                }
            }
        },
        onSuccess: function (e) {
            e.preventDefault();
            var $form = $(e.target),
                formId = '#' + $form[0].id;
            $('body,html').animate({
                scrollTop: $(formId).offset().top - 100
            }, 800);
            $(formId).addClass('loading').append('<div class="loader"></div>');
            $.ajax({
                type: 'post',
                url: '/en/contact-us/Post.aspx',
                data: $(formId).serialize(),
                success: function (Response) {

                    var firstLine = Response.split('\n')[0];
                    firstLine = firstLine.trim();
                    if (firstLine == "success") {
                        setTimeout(function () {
                            var fields = $(formId).data('formValidation').getOptions().fields,
                                $parent, $icon;
                            for (var field in fields) {
                                $parent = $('[name="' + field + '"]').parents('.form-group');
                            }
                            // Then reset the form
                            $('.alert-success').addClass('in');
                            $(formId).data('formValidation').resetForm(true);
                            $("input[type=text], textarea").val("");
                            $('.thanks').show();
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            setTimeout(function () {
                                $('.thanks').hide();
                                $(formId).data('formValidation').resetForm(true);
                            }, 2000);
                        }, 1500);
                        refreshCaptcha();
                        $("#errorNewsletter").hide();
                    }
                    else if (firstLine == "fail") {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").show();
                    }
                    else if (firstLine == "datainvalid") {
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").html("Please fill all required fields");
                        $("#errorNewsletter").show();
                    }
                    else {
                        //alert("There seems to be some problem, PLease try later");
                        $(formId).removeClass('loading');
                        $(formId).find('.loader').remove();
                        $(".error").show();
                        refreshCaptcha();
                        $("#errorNewsletter").html("Your details cannot be sent at this time, please try later");
                        $("#errorNewsletter").show();
                    }
                }
            });
        }
    });


    $('#generalContact')
        .find('[name="aboutUs"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#generalContact').formValidation('revalidateField', 'aboutUs');
        })
        .end()
        .formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-ok'
            },
            fields: {
                fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }, regexp: {
                            regexp: emailRegex,
                            message: ' '
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: phone_number,
                            message: ' '
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                aboutUs: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },

                message: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: specialchar,
                            message: ' '
                        }
                    }
                },
                captcha: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        identical: {
                            field: 'captcha-match',
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function (e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $('body,html').animate({
                    scrollTop: $(formId).offset().top - 100
                }, 800);
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: '/en/contact-us/Post.aspx',
                    data: $(formId).serialize(),

                    success: function (Response) {

                        var firstLine = Response.split('\n')[0];
                        firstLine = firstLine.trim();
                        if (firstLine == "success") {
                            setTimeout(function () {
                                var fields = $(formId).data('formValidation').getOptions().fields,
                                    $parent, $icon;
                                for (var field in fields) {
                                    $parent = $('[name="' + field + '"]').parents('.form-group');
                                }
                                // Then reset the form
                                $('.alert-success').addClass('in');
                                $(formId).data('formValidation').resetForm(true);
                                $("input[type=text], textarea").val("");
                                $('select').selectpicker('render');
                                $('.thanks').show();
                                $(formId).removeClass('loading');
                                $(formId).find('.loader').remove();
                                setTimeout(function () {
                                    ($('.captchaa').trigger('click'));
                                    $('.thanks').hide();
                                    $(formId).data('formValidation').resetForm(true);
                                }, 2000);
                            }, 1500);
                            refreshCaptcha();
                            $("#errorCaptcha").hide();
                        }
                        else if (firstLine == "fail") {
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").show();
                        }
                        else if (firstLine == "datainvalid") {

                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Please fill all required fields");
                            $("#errorCaptcha").show();
                        }
                        else {
                            //alert("There seems to be some problem, PLease try later");
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Your details cannot be sent at this time, please try later");
                            $("#errorCaptcha").show();
                        }


                    }
                });
            }
        });
    $('#vendorRegistration')
        .find('[name="aboutUs"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#vendorRegistration').formValidation('revalidateField', 'aboutUs');
        })
        .end()
        .formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-ok'
            },
            fields: {
                fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }, regexp: {
                            regexp: emailRegex,
                            message: ' '
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: phone_number,
                            message: ' '
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                aboutUs: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                vender: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: specialchar,
                            message: ' '
                        }
                    }
                },
                captcha: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        identical: {
                            field: 'captcha-match',
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function (e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $('body,html').animate({
                    scrollTop: $(formId).offset().top - 100
                }, 800);
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: '/en/contact-us/Post.aspx',
                    data: $(formId).serialize(),
                    success: function (Response) {

                        var firstLine = Response.split('\n')[0];
                        firstLine = firstLine.trim();
                        if (firstLine == "success") {
                            setTimeout(function () {
                                var fields = $(formId).data('formValidation').getOptions().fields,
                                    $parent, $icon;
                                for (var field in fields) {
                                    $parent = $('[name="' + field + '"]').parents('.form-group');
                                }
                                // Then reset the form
                                $('.alert-success').addClass('in');
                                $(formId).data('formValidation').resetForm(true);
                                $("input[type=text], textarea").val("");
                                $('select').selectpicker('render');
                                $('.thanks').show();
                                $(formId).removeClass('loading');
                                $(formId).find('.loader').remove();
                                setTimeout(function () {
                                    ($('.captchaa').trigger('click'));
                                    $('.thanks').hide();
                                    $(formId).data('formValidation').resetForm(true);
                                }, 2000);
                            }, 1500);
                            refreshCaptcha();
                            $("#errorCaptcha").hide();
                        }
                        else if (firstLine == "fail") {
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();

                            $("#errorCaptcha").show();
                        }
                        else if (firstLine == "datainvalid") {
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Please fill all required fields");
                            $("#errorCaptcha").show();
                        }
                        else {
                            //alert("There seems to be some problem, PLease try later");
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Your details cannot be sent at this time, please try later");
                            $("#errorCaptcha").show();
                        }

                    }
                });
            }
        });
    $('#customerCare')
        .find('[name="aboutUs"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#customerCare').formValidation('revalidateField', 'aboutUs');
        })
        .end()
        .find('[name="country"]').selectpicker()
        .change(function (e) {
            // revalidate the language when it is changed
            $('#customerCare').formValidation('revalidateField', 'country');
        })
        .end()
        .formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-ok'
            },
            fields: {
                fname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                lname: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: letters,
                            message: ' '
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }, regexp: {
                            regexp: emailRegex,
                            message: ' '
                        }
                    }
                },
                phone: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: phone_number,
                            message: ' '
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        regexp: {
                            regexp: specialchar,
                            message: ' '
                        }
                    }
                },
                message: {
                    validators: {
                        regexp: {
                            regexp: specialchar,
                            message: ' '
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                aboutUs: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                country: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        }
                    }
                },
                captcha: {
                    validators: {
                        notEmpty: {
                            message: ' '
                        },
                        identical: {
                            field: 'captcha-match',
                            message: ' '
                        }
                    }
                }
            },
            onSuccess: function (e) {
                e.preventDefault();
                var $form = $(e.target),
                    formId = '#' + $form[0].id;
                $('body,html').animate({
                    scrollTop: $(formId).offset().top - 100
                }, 800);
                $(formId).addClass('loading').append('<div class="loader"></div>');
                $.ajax({
                    type: 'post',
                    url: '/en/contact-us/Post.aspx',
                    data: $(formId).serialize(),
                    success: function (Response) {

                        var firstLine = Response.split('\n')[0];
                        firstLine = firstLine.trim();

                        if (firstLine == "success") {

                            setTimeout(function () {
                                var fields = $(formId).data('formValidation').getOptions().fields,
                                    $parent, $icon;
                                for (var field in fields) {
                                    $parent = $('[name="' + field + '"]').parents('.form-group');
                                }
                                // Then reset the form
                                $('.alert-success').addClass('in');
                                $(formId).data('formValidation').resetForm(true);
                                $("input[type=text], textarea").val("");
                                $('select').selectpicker('render');
                                $('.thanks').show();
                                $(formId).removeClass('loading');
                                $(formId).find('.loader').remove();
                                setTimeout(function () {
                                    ($('.captchaa').trigger('click'));
                                    $('.thanks').hide();
                                    $(formId).data('formValidation').resetForm(true);
                                }, 2000);
                            }, 1500);
                            refreshCaptcha();
                            $("#errorCaptcha").hide();
                        }
                        else if (firstLine == "fail") {
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").show();
                        }
                        else if (firstLine == "datainvalid") {

                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Please fill all required fields");
                            $("#errorCaptcha").show();
                        }
                        else {
                           // alert("There seems to be some problem, PLease try later");
                            $(formId).removeClass('loading');
                            $(formId).find('.loader').remove();
                            $(".error").show();
                            refreshCaptcha();
                            $("#errorCaptcha").html("Your details cannot be sent at this time, please try later");
                            $("#errorCaptcha").show();
                        }
                    }
                });
            }
        });









    $('.captcha').click(function () {
        refreshCaptcha();
    });
    $('.refresh-c').click(function () {
        refreshCaptcha();
    });
    function refreshCaptcha() {
        $("#imgCaptcha").attr("src", "/en/captcha/JpegImage.aspx?" + new Date().getMilliseconds());

        $("#imgFCaptcha").attr("src", "/en/captcha/JpegImage.aspx?" + new Date().getMilliseconds());
    }


    //}
    $('.main-menu ul li').each(function (e) {
        if (isURL($(this).find('a').attr('href'))) {
            var parent = $(this).find('a').attr('href');
            if (parent.length > 1) {
                $("a[href='" + parent + "']").parent('li').addClass('active');
                if ($("a[href='" + parent + "']").parent('li').parents('ul').hasClass('first-menu')) {
                    var parentHref = $("a[href='" + parent + "']").parent('li').parent('ul').parent('li').find('a').attr('href');



                    $(".ft-listing a[href='" + parentHref + "']").parent('li').addClass('active');
                    $("a[href='" + parent + "']").parent('li').parents('ul').parent('li').addClass('active');
                }
            } else {
                if (window.location.pathname == parent) {
                    $("a[href='" + parent + "']").parent('li').addClass('active');

                }

            }
        }
    });
    $('footer ul li').each(function () {
        if (isURL($(this).find('a').attr('href'))) {
            var parent = $(this).find('a').attr('href');
            $("footer ul li a[href='" + parent + "']").parent('li').addClass('active');
        }
    });
    $('.bottom ul li').each(function () {
        if (isURL($(this).find('a').attr('href'))) {
            var parent = $(this).find('a').attr('href');
            $(".bottom ul li a[href='" + parent + "']").parent('li').addClass('active');
        }
    });
    $('.top-nav ul li').each(function () {
        if (isURL($(this).find('a').attr('href'))) {
            $('.top-nav ul li').removeClass('active');
            var parent = $(this).find('a').attr('href');
            $("a[href='" + parent + "']").parent('li').addClass('active');
        }
    });

});

function isURL(str) {
    var path = window.location.pathname;
    if (path.match(str)) {
        return true;
    } else {
        return false;
    }
}
$(window).load(function(){
    $('.homeSlider').bxSlider({
        mode: 'fade',
        pager: false,
        pause: 7000,
      /*  onSlideNext: function(currentSlideNumber){
            $('.bx-prev').html(currentSlideNumber.prev('li').html());
            $('.bx-next').html(currentSlideNumber.next('li').html());
        },
        onSlidePrev: function(currentSlideNumber){
            $('.bx-prev').html(currentSlideNumber.prev('li').html());
            $('.bx-next').html(currentSlideNumber.next('li').html());
        },*/
        infiniteLoop: true,
        hideControlOnEnd: true,
        auto : true
    });
    setTimeout(function(){
        /*$('.bx-next').html($('.homeSlider').find('li').next().html());*/
    },50);
    if($(window).width() > 1024){
        var sectionHeight = $( window ).height();
        $('.home-banner .bx-wrapper .bx-viewport').css('height', parseInt(sectionHeight));
        $('.homeSlider > li').css('height', parseInt(sectionHeight));
        $('.homeSlider > li >img').css('height', parseInt(sectionHeight));
    }
    if($(window).width() > 676){
        $('.click-detail').on('click', function(){
            $(this).parent().next().removeClass('active');
            $(this).parent().next().addClass('active');
            /*$('html, body').animate({
             scrollTop: $(this).parent().parent().offset().top
             }, 800);*/
        });

        $('.close-btn').on('click', function(){
            $(this).closest('.read-more').removeClass('active');

        });
    }
    if($(window).width() <= 676){
        $('.click-detail').on('click', function(){
            $(this).parent().next().slideToggle();
            $('html, body').animate({
                scrollTop: $(this).parent().parent().offset().top
            }, 800);
        });

        $('.close-btn').on('click', function(){
            $(this).closest('.read-more').slideUp();
        });
    }
    $('.newsTicker').bxSlider({
        mode: 'vertical',
        pager: false,
        controls: false,
        touchEnabled:false,
        auto: true,
        pause : 7000,
        adaptiveHeight: true
    });
    setTimeout(function(){
        $('.recent-events').bxSlider({
            pager : false
        });
    },1000);


    $('.recent-awards').bxSlider({
        pager : false
    });

    $('.lastest-news').bxSlider({
        pager : false
    });
    $('.featured-promotion').bxSlider({
        pager : false
    });

    $('.pink-slider').bxSlider({
        pager: false
    });
});
$(document).ready(function(){
    $("#fp-nav").find('a').bind('click', function(){
        var anchor = $(this).attr('href').replace('#', '');
        $("#fullpage").find(".section").each(function(){
            //console.log($(this).attr('data-anchor') + " - " + $(this).offset().top);
            if($(this).attr('data-anchor') == anchor){
                var that = $(this);
                setTimeout(function(){
                    var offsetTop = that.offset().top - 100;
                    console.log(offsetTop);

                    $('html, body').stop().animate({
                        scrollTop: offsetTop
                    }, 800);
                },200)
            }
        });
    });
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });
    $('a.scroll').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top -130
        }, 'slow');
        e.preventDefault();
    });
    $('.plusClick').click(function(){
        $(this).toggleClass('plusClick2');
        $(this).parent().find('.textHide').slideToggle();
        var $this = $(this);
        $this.toggleClass('plusClick');
        if($this.hasClass('plusClick')){
            $this.text('Read More');
        } else {
            $this.text('Read Less');
        }
    });
    $('.mainTabs li').on('click', function(){
        $(this).parent().toggleClass('active');
    });

    $('.mainTabs li ').dblclick(function(e){
        e.preventDefault();
    });

    $('.close').click(function() {
        $('#textareaID').val("");
    });

    $('#search').on('shown.bs.modal', function () {
        $('#textareaID').focus();
    })
});
$(window).scroll(function() {
    if($(window).width() > 1199){
        if ($(this).scrollTop() > 1){
            $('header').addClass("sticky");
            $('.div_menu').css("top","80px");
        }
        else{
            $('header').removeClass("sticky");
            $('.div_menu').css("top","")
        }
    }
});
$(window).resize(function () {
    var windowwidth = $(window).width();
    if(windowwidth > 1200){
        var sectionHeight = $( window ).height();
        $('.home-banner .bx-wrapper .bx-viewport').css('height', parseInt(sectionHeight));
        $('.homeSlider > li').css('height', parseInt(sectionHeight));
        $('.homeSlider > li >img').css('height', parseInt(sectionHeight));
    }
});

$(window).load(function(){
    $('.conut').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 7000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

$(function() {
    var loc = window.location.href; // returns the full URL
    if(/enoc-for-motorists/.test(loc)) {
        $('.expo-logo').addClass('active');
    }
});

function setFocusToTextBox(){

}

/*
 $('#search-open').click(function() {
 $('#search-inpt').focus();
 });*/