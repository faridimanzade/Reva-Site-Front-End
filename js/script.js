$(document).ready(function () {


    let flag = true; // ---------------------------- FLAG GOR HAMBURGER MENU


    // ========================================================================== NAVIGATION SHRINK AND ENLARGE (jQuery)
    $('.preloader').delay(3000).fadeOut(1000);

    // ========================================================================== NAVIGATION SHRINK AND ENLARGE (jQuery)
    navigationOpener();

    // ========================================================================== NAVIGATION AND CONTENT OPEN (JavaScript)
    navigationContentOpen();

    // ========================================================================== ABOUT PART NAVIGATION (JavaScript)
    aboutPartNavigation();

    // ========================================================================== ABOUT ---------------> HIRE ME TO OPEN CONTACT (jQuery)
    hireToContactOpener();

    // ========================================================================== PORTFOLIO ---------------> PORTFOLIO OPEN (jQuery)
    protfolioOpenerButton();

    // ========================================================================== CONTACT -----------> MAP OPENER (jQuery)
    openTheMap();

    // ========================================================================== Testimonials -----------> IMAGE SOURCE CHANGE (JavaScript)
    imageSourceChanger();

    // ========================================================================== MODAL OPENER (JavaScript)
    modalOpen();

    // ========================================================================== MODAL VIDEO OPENER (JavaScript)
    modalOpenVideo();

    // ========================================================================== HAMBURGER MENU (jQuery)
    hamburgerOpener();

    // ========================================================================== PORTFOLIO SORTER (JavaScript)
    portfolioSort();


    navigationOpener();



    // ========================================================================== NAVIGATION SHRINK AND ENLARGE
    function navigationOpener() {
        let open = true;
        $(".navigationMoveIcon").click(function () {
            if (open == true) {
                $(".navigationArea").addClass("navigationAreaWidthMinimum");
                $(".navigationArea").removeClass("navigationArea-hamburger");
                $(".contentsArea").width("calc(100vw - 100px)");
                $(".navigationBar ul li span:nth-child(2)").hide(300);
                $(".contactIcons").hide(300);
                $(".navigationBar").addClass("navigationBar-to-middle");
                $(".mainLogo").addClass("mainLogo-move-bottom");
                $(".navigationMoveIcon").addClass("navigationMoveIcon-to-center");
                $(".navigationMoveIcon i").addClass("fa-angle-right").removeClass("fa-angle-left");
                $(".mySlides").width("100%");
                $(".imageDarker").width("100%");
                open = false;
                flag = false;
            } else {
                $(".navigationArea").addClass("navigationArea-hamburger");
                $(".navigationArea").removeClass("navigationAreaWidthMinimum");
                $(".contentsArea").width("calc(100vw - 240px)");
                $(".navigationBar ul li span:nth-child(2)").show(300);
                $(".contactIcons").show(300);
                $(".navigationBar").removeClass("navigationBar-to-middle");
                $(".mainLogo").removeClass("mainLogo-move-bottom");
                $(".navigationMoveIcon").removeClass("navigationMoveIcon-to-center");
                $(".navigationMoveIcon i").addClass("fa-angle-left").removeClass("fa-angle-right");
                open = true;
                flag = true;
            }
            width = $(".navigationArea").width();
        })
    }


    // ========================================================================== NAVIGATION AND CONTENT OPEN
    function navigationContentOpen() {
        let contentNavigation = document.querySelectorAll(".navigationBar ul li");
        let contents = document.querySelectorAll(".mainContent");
        document.querySelector(".contentsArea").style.width = "calc(100vw - 220px)";
        for (let i = 0; i < contentNavigation.length; i++) {
            contentNavigation[i].addEventListener("click", function () {
                for (let j = 0; j < contents.length; j++) {
                    contents[j].style.display = "none";
                    contentNavigation[j].classList.remove("navigationBarUlLiSelected");
                }
                contentNavigation[i].classList.add("navigationBarUlLiSelected");
                contents[i].style.display = "block";
                contents[i].style.display = "flex";
            });
        }
    }


    // ========================================================================== ABOUT PART NAVIGATION
    function aboutPartNavigation() {
        let navigationPath = document.querySelectorAll(".navigationPath");
        let aboutCard = document.querySelectorAll(".aboutCard");

        for (let i = 0; i < navigationPath.length; i++) {
            navigationPath[i].addEventListener("click", function () {
                for (let j = 0; j < aboutCard.length; j++) {
                    aboutCard[j].style.display = "none";
                    navigationPath[j].classList.remove("navigationPathSelected");
                }
                navigationPath[i].classList.add("navigationPathSelected");
                aboutCard[i].style.display = "block";
            });
        }
    }


    // ========================================================================== ABOUT ---------------> HIRE ME TO OPEN CONTACT
    function hireToContactOpener() {
        $(".hireButton").click(function () {
            clearTimeout(idTimeOut);
            $(".mainContent").hide();
            $(".navigationBar ul li").removeClass("navigationBarUlLiSelected");
            $(".contactArea").show();
            $(".contactManipulate").addClass("navigationBarUlLiSelected");
        })
    }


    // ========================================================================== PORTFOLIO ---------------> PORTFOLIO OPEN
    function protfolioOpenerButton() {
        $(".portfolioButton").click(function () {
            $(".mainContent").hide();
            $(".navigationBar ul li").removeClass("navigationBarUlLiSelected");
            $(".portfolioArea").show();
            $(".portfolioManipulate").addClass("navigationBarUlLiSelected");
        })
    }

    // ========================================================================== CONTACT -----------> MAP OPENER
    function openTheMap() {
        $(".map iframe").slideUp(1);
        let open = true;
        $(".mapOpener").click(function () {
            if (open == true) {
                $(".map iframe").slideDown();
                $(".mapOpener i").addClass("fa-arrow-circle-up").removeClass("fa-arrow-circle-down");
                $(".mapOpener span").text("Close Map");
                open = false;
            } else {
                $(".map iframe").slideUp();
                $(".mapOpener i").addClass("fa-arrow-circle-down").removeClass("fa-arrow-circle-up");
                $(".mapOpener span").text("Open Map");
                open = true;
            }
        })
    }


    // ========================================================================== Testimonials -----------> IMAGE SOURCE CHANGE
    function imageSourceChanger() {
        let imageSources = document.querySelectorAll(".allUsers li");
        let mainImage = document.querySelector(".quoteArea img");
        for (let index = 0; index < imageSources.length; index++) {
            imageSources[index].addEventListener("click", function () {
                for (let j = 0; j < imageSources.length; j++) {
                    imageSources[j].classList.remove("allUsersLiSelected");
                }
                imageSources[index].classList.add("allUsersLiSelected");
                mainImage.setAttribute("src", "media/testim" + (index + 1) + ".jpg");

                switch (index) {
                    case 0:
                        document.querySelector(".quoteAreaText").innerText = "Duis aute irure dolor in relore eu fugiat nulla pariatur. Excepteur.";
                        document.querySelector(".quoteAreaName").innerText = "John Doe";
                        break;
                    case 1:
                        document.querySelector(".quoteAreaText").innerText = "Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolor.";
                        document.querySelector(".quoteAreaName").innerText = "Joshua Earle";
                        break;
                    case 2:
                        document.querySelector(".quoteAreaText").innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum minus, cum soluta asperiores quae necessitatibus.";
                        document.querySelector(".quoteAreaName").innerText = "Matthew Dix";
                        break;
                    case 3:
                        document.querySelector(".quoteAreaText").innerText = "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem.";
                        document.querySelector(".quoteAreaName").innerText = "Mike Petrucci";
                        break;
                    case 4:
                        document.querySelector(".quoteAreaText").innerText = "Dlum dolore eu fugiat nulla pariatur. Excepteur";
                        document.querySelector(".quoteAreaName").innerText = "Lauren Dix";
                        break;
                }
            });
        }
    }


    // ========================================================================== MODAL OPENER
    function modalOpen() {
        let images = document.querySelectorAll(".fa-arrows-alt");
        let modalImage = document.querySelectorAll(".modal-content img")[0];
        let modal = document.getElementsByClassName("modal")[0];

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener("click", function () {
                modal.style.display = "block";
                modal.style.cursor = "zoom-out";
                modalImage.style.cursor = "context-menu";
                document.querySelector(".mainContainer").style.overflowY = "hidden";
                if (i + 1 == 3) {
                    modalImage.setAttribute("src", "media/0" + (i + 1) + ".jpeg");
                } else {
                    modalImage.setAttribute("src", "media/0" + (i + 1) + ".jpg");

                }
                modalImage.style.width = "100%";
            })
        }

        let exit = document.querySelector(".modal-content span");

        exit.addEventListener("click", function () {
            modal.style.display = "none";
            document.querySelector(".mainContainer").style.overflowY = "auto";
        })

        window.addEventListener("click", function () {
            if (event.target == modal) {
                document.querySelector(".mainContainer").style.overflowY = "auto";
                modal.style.display = "none";
            }
        })
    }


    // ========================================================================== MODAL VIDEO OPENER
    function modalOpenVideo() {
        let playIcon = document.querySelector(".serviceVideo");
        let modalVIdeo = document.querySelectorAll(".modal-content-video iframe")[0];
        let modal = document.getElementsByClassName("modal-video")[0];

        playIcon.addEventListener("click", function () {
            modal.style.display = "block";
            document.querySelector(".mainContainer").style.overflowY = "hidden";

            modalVIdeo.style.width = "100%";
        })

        let exit = document.querySelector(".modal-content-video span");

        exit.addEventListener("click", function () {
            modal.style.display = "none";
            document.querySelector(".mainContainer").style.overflowY = "auto";
        })

        window.addEventListener("click", function () {
            if (event.target == modal) {
                document.querySelector(".mainContainer").style.overflowY = "auto";
                modal.style.display = "none";
            }
        })
    }


    // ========================================================================== HAMBURGER MENU
    function hamburgerOpener() {
        $(".hamburgerBar").click(function () {

            if (flag == true) {
                $(".navigationArea").removeClass("navigationAreaWidthMinimum");
                $(".navigationArea").toggleClass("navigationArea-hamburger");
            } else if (flag == false) {
                $(".navigationArea").removeClass("navigationArea-hamburger");
                $(".navigationArea").toggleClass("navigationAreaWidthMinimum");
            }
            $(".hamburgerBar i").toggleClass("fa-bars").toggleClass("fa-times");
        });
    }


    // ========================================================================== PORTFOLIO SORTER
    function portfolioSort() {
        let portfolioNav = document.querySelectorAll(".portfolioCategories p");
        let portfolioCards = document.querySelectorAll(".portfolioPatterns li");
        let hoverCardInfo = document.querySelectorAll(".cardInfo");

        removeClassFromAllCards();

        for (let i = 0; i < portfolioNav.length; i++) {
            portfolioNav[i].addEventListener("click", function () {
                for (let j = 0; j < portfolioNav.length; j++) {
                    portfolioNav[j].classList.remove("portfolioCategoriesP-selected");
                }
                portfolioNav[i].classList.add("portfolioCategoriesP-selected");

                if (portfolioNav[i].innerText == "All") {
                    removeClassFromAllCards();
                } else if (portfolioNav[i].innerText == "Web Design") {
                    removeClassFromAllCards();
                    portfolioCards[0].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[0].classList.add("cardInfoNotVisible");
                    portfolioCards[1].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[1].classList.add("cardInfoNotVisible");
                    portfolioCards[3].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[3].classList.add("cardInfoNotVisible");
                    portfolioCards[5].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[5].classList.add("cardInfoNotVisible");
                    portfolioCards[6].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[6].classList.add("cardInfoNotVisible");
                    portfolioCards[7].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[7].classList.add("cardInfoNotVisible");
                } else if (portfolioNav[i].innerText == "Graphic Design") {
                    removeClassFromAllCards();
                    portfolioCards[0].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[0].classList.add("cardInfoNotVisible");
                    portfolioCards[2].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[2].classList.add("cardInfoNotVisible");
                    portfolioCards[3].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[3].classList.add("cardInfoNotVisible");
                    portfolioCards[4].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[4].classList.add("cardInfoNotVisible");
                    portfolioCards[6].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[6].classList.add("cardInfoNotVisible");
                    portfolioCards[8].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[8].classList.add("cardInfoNotVisible");
                } else if (portfolioNav[i].innerText == "Marketing") {
                    removeClassFromAllCards();
                    portfolioCards[1].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[1].classList.add("cardInfoNotVisible");
                    portfolioCards[2].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[2].classList.add("cardInfoNotVisible");
                    portfolioCards[4].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[4].classList.add("cardInfoNotVisible");
                    portfolioCards[5].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[5].classList.add("cardInfoNotVisible");
                    portfolioCards[7].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[7].classList.add("cardInfoNotVisible");
                    portfolioCards[8].classList.add("portfolioPatternsLi-opacity");
                    hoverCardInfo[8].classList.add("cardInfoNotVisible");
                }
            });

        }
    }

    function removeClassFromAllCards() {
        let portfolioCards = document.querySelectorAll(".portfolioPatterns li");
        let hoverCardInfo = document.querySelectorAll(".cardInfo");

        for (let z = 0; z < portfolioCards.length; z++) {
            portfolioCards[z].classList.remove("portfolioPatternsLi-opacity");
            hoverCardInfo[z].classList.remove("cardInfoNotVisible");
        }
    }


    // ============================================================================================== HOME PAGE SLIDER

    // ========================================================================== AUTO SLIDER
    let idTimeOut;
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let number;
        let slides = document.querySelectorAll(".mySlides img");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";
            // sliderImageHIDE(i);
            checkToShowTextOfSlider(i);
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        number = slideIndex - 1;

        slides[number].style.opacity = "1";
        // sliderImageSHOW(number);
        checkToShowTextOfSlider(number);

        console.log("id is -> " + number);

        idTimeOut = setTimeout(showSlides, 7000); // Change image every 2 seconds
    }

    // ========================================================================== SLIDER WITH BUTTONS
    slideButtonChange();

    function slideButtonChange() {
        let buttons = document.querySelectorAll(".buttons button");
        let images = document.querySelectorAll(".mySlides img");
        let sliderText = document.querySelector(".movingTest");

        images[0].style.display = "block";
        sliderText.style.display = "block";

        let i = 0;
        buttons[1].addEventListener("click", function () {
            clearTimeout(idTimeOut);
            i++;
            for (let k = 0; k < images.length; k++) {
                images[k].style.opacity = "0";
                sliderText.style.display = "none";
            }
            if (i < images.length) {
                images[i].style.opacity = "1";
                checkToShowTextOfSlider(i);
            } else {
                i = 0;
                images[i].style.opacity = "1";
                checkToShowTextOfSlider(i);
            }
            console.log(i);
        })

        buttons[0].addEventListener("click", function () {
            clearTimeout(idTimeOut);
            i--;
            for (let k = 0; k < images.length; k++) {
                images[k].style.opacity = "0";
                sliderText.style.display = "none";
            }
            if (i >= 0) {
                images[i].style.opacity = "1";
                checkToShowTextOfSlider(i);
            } else {
                i = images.length - 1;
                images[i].style.opacity = "1";
                checkToShowTextOfSlider(i);
            }
            console.log(i);
        })
    }


    function checkToShowTextOfSlider(index) {
        let sliderText = document.querySelector(".movingTest");
        if (index == 0) {
            document.querySelector(".movingTest").style.display = "block";
            document.querySelector(".imageDarker .text").style.top = "40%";
            document.querySelector(".portfolioButton").style.top = "55%";
        } else {
            document.querySelector(".movingTest").style.display = "none";
            document.querySelector(".imageDarker .text").style.top = "45%";
            document.querySelector(".portfolioButton").style.top = "53%";
        }
    }


    // ========================================================================== AUTO TYPER
    autoTyper();

    function autoTyper() {
        let Typer = function (element) {
            this.element = element;
            let delim = element.dataset.delim || ",";
            let words = element.dataset.words || "override these,sample typing";
            this.words = words.split(delim).filter((v) => v); // non empty words
            this.delayVariance = parseInt(element.dataset.delayVariance) || 0;
            this.delay = parseInt(element.dataset.delay) || 200;
            this.loop = element.dataset.loop || "true";
            if (this.loop === "false") {
                this.loop = 1
            }
            this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

            this.progress = {
                word: 0,
                char: 0,
                building: true,
                looped: 0
            };
            this.typing = true;

            let colors = element.dataset.colors || "black";
            this.colors = colors.split(",");
            this.element.style.color = this.colors[0];
            this.colorIndex = 0;

            this.doTyping();
        };

        Typer.prototype.start = function () {
            if (!this.typing) {
                this.typing = true;
                this.doTyping();
            }
        };
        Typer.prototype.stop = function () {
            this.typing = false;
        };
        Typer.prototype.doTyping = function () {
            let e = this.element;
            let p = this.progress;
            let w = p.word;
            let c = p.char;
            let currentDisplay = [...this.words[w]].slice(0, c).join("");
            let atWordEnd;
            let timeoutDelay = ((2 * Math.random() - 1) * this.delayVariance) + this.delay;
            if (this.cursor) {
                this.cursor.element.style.opacity = "1";
                this.cursor.on = true;
                clearInterval(this.cursor.interval);
                this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
            }

            e.innerHTML = currentDisplay;

            if (p.building) {
                atWordEnd = p.char === this.words[w].length;
                if (atWordEnd) {
                    p.building = false;
                } else {
                    p.char += 1;
                }
            } else {
                if (p.char === 0) {
                    p.building = true;
                    p.word = (p.word + 1) % this.words.length;
                    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
                    this.element.style.color = this.colors[this.colorIndex];
                } else {
                    p.char -= 1;
                }
            }

            if (p.word === this.words.length - 1) {
                p.looped += 1;
            }

            if (!p.building && this.loop <= p.looped) {
                this.typing = false;
            }

            setTimeout(() => {
                if (this.typing) {
                    this.doTyping()
                };
            }, atWordEnd ? this.deleteDelay : timeoutDelay);
        };

        function TyperSetup() {
            let typers = {};
            for (let e of document.getElementsByClassName("typer")) {
                typers[e.id] = new Typer(e);
            }
            for (let e of document.getElementsByClassName("cursor")) {
                let t = new Cursor(e);
                t.owner = typers[e.dataset.owner];
                t.owner.cursor = t;
            }
        }

        TyperSetup();
    }



    // ========================================================================== HAPPY END

});