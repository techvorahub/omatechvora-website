// ==========================================
// TECHVORA HUB LIMITED
// PREMIUM WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const mobileMenu = document.querySelector(".menu");
    const navLinks = document.getElementById("navLinks");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove("show");
                }
            });
        });
    }

    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // ==========================================
    // STICKY NAVBAR EFFECT
    // ==========================================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // ==========================================
    // ACTIVE NAVIGATION LINKS
    // ==========================================

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (
                window.scrollY >=
                sectionTop - 150
            ) {
                current = section.getAttribute("id");
            }
        });

        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {
                    link.classList.add("active");
                }
            });
    });

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================

    const counters =
        document.querySelectorAll(".counter");

    function startCounters() {

        counters.forEach(counter => {

            const target =
                parseInt(
                    counter.dataset.target
                );

            let count = 0;

            const increment =
                Math.ceil(target / 100);

            const timer =
                setInterval(() => {

                    count += increment;

                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }

                    counter.innerText =
                        count + "+";

                }, 20);
        });
    }

    const stats =
        document.getElementById("stats");

    if (stats) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                startCounters();

                                observer.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.3
                }
            );

        observer.observe(stats);
    }

    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================

    const revealElements =
        document.querySelectorAll(
            ".service-card, .portfolio-card, .testimonial, .faq-item"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity = "1";
                            entry.target.style.transform =
                                "translateY(0)";
                        }
                    }
                );
            },
            {
                threshold: 0.1
            }
        );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
            "translateY(40px)";
        el.style.transition =
            "all .8s ease";

        revealObserver.observe(el);
    });

    // ==========================================
    // FAQ ACCORDION
    // ==========================================

    document
        .querySelectorAll(".faq-answer")
        .forEach(answer => {
            answer.style.display = "none";
        });

    document
        .querySelectorAll(".faq-question")
        .forEach(question => {

            question.addEventListener(
                "click",
                () => {

                    const answer =
                        question.nextElementSibling;

                    if (!answer) return;

                    if (
                        answer.style.display ===
                        "block"
                    ) {

                        answer.style.display =
                            "none";

                    } else {

                        document
                            .querySelectorAll(
                                ".faq-answer"
                            )
                            .forEach(item => {
                                item.style.display =
                                    "none";
                            });

                        answer.style.display =
                            "block";
                    }
                }
            );
        });

    // ==========================================
    // CONTACT FORM VALIDATION
    // ==========================================

    const form =
        document.getElementById(
            "contactForm"
        );

    if (form) {

        form.addEventListener(
            "submit",
            e => {

                e.preventDefault();

                const inputs =
                    form.querySelectorAll(
                        "input, textarea"
                    );

                let valid = true;

                inputs.forEach(input => {

                    if (
                        input.value.trim() === ""
                    ) {

                        valid = false;

                        input.style.borderColor =
                            "red";

                    } else {

                        input.style.borderColor =
                            "#E2E8F0";
                    }
                });

                if (!valid) {

                    alert(
                        "Please complete all fields."
                    );

                    return;
                }

                alert(
                    "Thank you for contacting Techvora Hub Limited. We will get back to you shortly."
                );

                form.reset();
            }
        );
    }

    // ==========================================
    // SCROLL TO TOP BUTTON
    // ==========================================

    const scrollBtn =
        document.getElementById(
            "scrollTop"
        );

    if (scrollBtn) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 400
                ) {
                    scrollBtn.classList.add(
                        "show"
                    );
                } else {
                    scrollBtn.classList.remove(
                        "show"
                    );
                }
            }
        );

        scrollBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }

    // ==========================================
    // BUTTON HOVER EFFECT
    // ==========================================

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .cta-btn, .submit-btn"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {
                button.style.transform =
                    "translateY(-3px)";
            }
        );

        button.addEventListener(
            "mouseleave",
            () => {
                button.style.transform =
                    "translateY(0)";
            }
        );
    });

    // ==========================================
    // HERO FADE IN EFFECT
    // ==========================================

    const hero =
        document.querySelector(
            ".hero-content"
        );

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform =
            "translateY(40px)";

        setTimeout(() => {

            hero.style.transition =
                "all 1s ease";

            hero.style.opacity = "1";

            hero.style.transform =
                "translateY(0)";

        }, 300);
    }

});