/*! Cashier v.0.14.4, built at 2017-02-03 */ ! function(a, b) {
    var c = function(b, c, d) {
        this.parentEl = "body", this.element = a(b);
        var e = '<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled"></button>&nbsp;<button class="cancelBtn"></button></div></div></div>';

        ("object" != typeof c || null === c) && (c = {}), this.parentEl = "object" == typeof c && c.parentEl && a(c.parentEl) || a(this.parentEl),
            this.container = a(e).appendTo(this.parentEl), this.setOptions(c, d);
        var f = this.container;

        a.each(this.buttonClasses, function(a, b) {
            f.find("button").addClass(b)
        }), this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel),
            this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel),
        this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass),
        this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass),
            this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel),
            this.container.find(".calendar").on("click.daterangepicker", ".prev", a.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", a.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", a.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", a.proxy(this.enterDate, this)).on("mouseleave.daterangepicker", "td.available", a.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", a.proxy(this.updateMonthYear, this)).on("change.daterangepicker", ".hourselect,.minuteselect,select.ampmselect", a.proxy(this.updateTime, this)),
            this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", a.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", a.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", a.proxy(this.showCalendars, this)).on("click.daterangepicker", "li", a.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", a.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", a.proxy(this.updateFormInputs, this)),
            this.element.is("input") ? this.element.on({
                    "click.daterangepicker": a.proxy(this.show, this),
                    "focus.daterangepicker": a.proxy(this.show, this),
                    "keyup.daterangepicker": a.proxy(this.updateFromControl, this)
                }) : this.element.on("click.daterangepicker", a.proxy(this.toggle, this))
    };
    c.prototype = {
        constructor: c,
        setOptions: function(c, d) {
            if (this.startDate = b().startOf("day"), this.endDate = b().endOf("day"),
                    this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.showDropdowns = !1, this.showWeekNumbers = !1,
                    this.timePicker = !1, this.timePickerIncrement = 30, this.timePicker12Hour = !0, this.singleDatePicker = !1,
                    this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"),
                    this.buttonClasses = ["btn", "btn-small"], this.applyClass = "btn-success", this.cancelClass = "btn-default",
                    this.format = "MM/DD/YYYY", this.separator = " - ", this.locale = {
                    applyLabel: "Apply",
                    cancelLabel: "Cancel",
                    fromLabel: "From",
                    toLabel: "To",
                    weekLabel: "W",
                    customRangeLabel: "Custom Range",
                    daysOfWeek: b.localeData()._weekdaysMin.slice(),
                    monthNames: b.localeData()._monthsShort.slice(),
                    firstDay: 0
                }, this.cb = function() {}, "string" == typeof c.format && (this.format = c.format),
                "string" == typeof c.separator && (this.separator = c.separator), "string" == typeof c.startDate && (this.startDate = b(c.startDate, this.format)),
                "string" == typeof c.endDate && (this.endDate = b(c.endDate, this.format)), "string" == typeof c.minDate && (this.minDate = b(c.minDate, this.format)),
                "string" == typeof c.maxDate && (this.maxDate = b(c.maxDate, this.format)), "object" == typeof c.startDate && (this.startDate = b(c.startDate)),
                "object" == typeof c.endDate && (this.endDate = b(c.endDate)), "object" == typeof c.minDate && (this.minDate = b(c.minDate)),
                "object" == typeof c.maxDate && (this.maxDate = b(c.maxDate)), "string" == typeof c.applyClass && (this.applyClass = c.applyClass),
                "string" == typeof c.cancelClass && (this.cancelClass = c.cancelClass), "object" == typeof c.dateLimit && (this.dateLimit = c.dateLimit),
                "object" == typeof c.locale) {
                if ("object" == typeof c.locale.daysOfWeek && (this.locale.daysOfWeek = c.locale.daysOfWeek.slice()),
                    "object" == typeof c.locale.monthNames && (this.locale.monthNames = c.locale.monthNames.slice()),
                    "number" == typeof c.locale.firstDay) {
                    this.locale.firstDay = c.locale.firstDay;
                    for (var e = c.locale.firstDay; e > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),
                        e--
                }
                "string" == typeof c.locale.applyLabel && (this.locale.applyLabel = c.locale.applyLabel),
                "string" == typeof c.locale.cancelLabel && (this.locale.cancelLabel = c.locale.cancelLabel),
                "string" == typeof c.locale.fromLabel && (this.locale.fromLabel = c.locale.fromLabel), "string" == typeof c.locale.toLabel && (this.locale.toLabel = c.locale.toLabel),
                "string" == typeof c.locale.weekLabel && (this.locale.weekLabel = c.locale.weekLabel), "string" == typeof c.locale.customRangeLabel && (this.locale.customRangeLabel = c.locale.customRangeLabel);

            }
            "string" == typeof c.opens && (this.opens = c.opens), "boolean" == typeof c.showWeekNumbers && (this.showWeekNumbers = c.showWeekNumbers),
            "string" == typeof c.buttonClasses && (this.buttonClasses = [c.buttonClasses]), "object" == typeof c.buttonClasses && (this.buttonClasses = c.buttonClasses),
            "boolean" == typeof c.showDropdowns && (this.showDropdowns = c.showDropdowns), "boolean" == typeof c.singleDatePicker && (this.singleDatePicker = c.singleDatePicker),
            "boolean" == typeof c.timePicker && (this.timePicker = c.timePicker), "number" == typeof c.timePickerIncrement && (this.timePickerIncrement = c.timePickerIncrement),
            "boolean" == typeof c.timePicker12Hour && (this.timePicker12Hour = c.timePicker12Hour);
            var f, g, h;
            if ("undefined" == typeof c.startDate && "undefined" == typeof c.endDate && a(this.element).is("input[type=text]")) {
                var i = a(this.element).val(),
                    j = i.split(this.separator);
                f = g = null, 2 == j.length ? (f = b(j[0], this.format),
                        g = b(j[1], this.format)) : this.singleDatePicker && (f = b(i, this.format), g = b(i, this.format)),
                null !== f && null !== g && (this.startDate = f, this.endDate = g)
            }
            if ("object" == typeof c.ranges) {
                for (h in c.ranges) f = b(c.ranges[h][0]), g = b(c.ranges[h][1]), this.minDate && f.isBefore(this.minDate) && (f = b(this.minDate)),
                this.maxDate && g.isAfter(this.maxDate) && (g = b(this.maxDate)), this.minDate && g.isBefore(this.minDate) || this.maxDate && f.isAfter(this.maxDate) || (this.ranges[h] = [f, g]);

                var k = "<ul>";
                for (h in this.ranges) k += "<li>" + h + "</li>";
                k += "<li>" + this.locale.customRangeLabel + "</li>",
                    k += "</ul>", this.container.find(".ranges ul").remove(), this.container.find(".ranges").prepend(k);

            }
            if ("function" == typeof d && (this.cb = d), this.timePicker || (this.startDate = this.startDate.startOf("day"),
                    this.endDate = this.endDate.endOf("day")), this.singleDatePicker ? (this.opens = "right",
                        this.container.find(".calendar.right").show(), this.container.find(".calendar.left").hide(),
                        this.container.find(".ranges").hide(), this.container.find(".calendar.right").hasClass("single") || this.container.find(".calendar.right").addClass("single")) : (this.container.find(".calendar.right").removeClass("single"),
                        this.container.find(".ranges").show()), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(),
                    this.oldChosenLabel = this.chosenLabel, this.leftCalendar = {
                    month: b([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute()]),
                    calendar: []
                }, this.rightCalendar = {
                    month: b([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()]),
                    calendar: []
                }, "right" == this.opens) {
                var l = this.container.find(".calendar.left"),
                    m = this.container.find(".calendar.right");

                l.removeClass("left").addClass("right"), m.removeClass("right").addClass("left")
            }
            "undefined" != typeof c.ranges || this.singleDatePicker || this.container.addClass("show-calendar"),
                this.container.addClass("opens" + this.opens), this.updateView(), this.updateCalendars();

        },
        setStartDate: function(a) {
            "string" == typeof a && (this.startDate = b(a, this.format)),
            "object" == typeof a && (this.startDate = b(a)), this.timePicker || (this.startDate = this.startDate.startOf("day")),
                this.oldStartDate = this.startDate.clone(), this.updateView(), this.updateCalendars();

        },
        setEndDate: function(a) {
            "string" == typeof a && (this.endDate = b(a, this.format)), "object" == typeof a && (this.endDate = b(a)),
            this.timePicker || (this.endDate = this.endDate.endOf("day")), this.oldEndDate = this.endDate.clone(),
                this.updateView(), this.updateCalendars()
        },
        updateView: function() {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateFormInputs();

        },
        updateFormInputs: function() {
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)),
                this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)),
                this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled");

        },
        updateFromControl: function() {
            if (this.element.is("input") && this.element.val().length) {
                var a = this.element.val().split(this.separator),
                    c = b(a[0], this.format),
                    d = b(a[1], this.format);

                this.singleDatePicker && (c = b(this.element.val(), this.format), d = c), d.isBefore(c) || (this.oldStartDate = this.startDate.clone(),
                    this.oldEndDate = this.endDate.clone(), this.startDate = c, this.endDate = d, this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(),
                    this.updateCalendars())
            }
        },
        notify: function() {
            this.updateView(), this.cb(this.startDate, this.endDate, this.chosenLabel);

        },
        move: function() {
            var b = {
                top: 0,
                left: 0
            };
            this.parentEl.is("body") || (b = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }), "left" == this.opens ? (this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - b.top,
                    right: a(window).width() - this.element.offset().left - this.element.outerWidth() - b.left,
                    left: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : (this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - b.top,
                    left: this.element.offset().left - b.left,
                    right: "auto"
                }), this.container.offset().left + this.container.outerWidth() > a(window).width() && this.container.css({
                    left: "auto",
                    right: 0
                }))
        },
        toggle: function() {
            this.element.hasClass("active") ? this.hide() : this.show();

        },
        show: function() {
            this.element.addClass("active"), this.container.show(), this.move(),
                a(document).on("click.daterangepicker", a.proxy(this.outsideClick, this)), a(document).on("click.daterangepicker", "[data-toggle=dropdown]", a.proxy(this.outsideClick, this)),
                this.element.trigger("show.daterangepicker", this)
        },
        outsideClick: function(b) {
            var c = a(b.target);

            c.closest(this.element).length || c.closest(this.container).length || c.closest(".calendar-date").length || this.hide();

        },
        hide: function() {
            this.element.removeClass("active"), this.container.hide(), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.notify(),
                this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), a(document).off("click.daterangepicker", this.outsideClick),
                this.element.trigger("hide.daterangepicker", this)
        },
        enterRange: function(a) {
            var b = a.target.innerHTML;

            if (b == this.locale.customRangeLabel) this.updateView();
            else {
                var c = this.ranges[b];
                this.container.find("input[name=daterangepicker_start]").val(c[0].format(this.format)),
                    this.container.find("input[name=daterangepicker_end]").val(c[1].format(this.format));

            }
        },
        showCalendars: function() {
            this.container.addClass("show-calendar"), this.move()
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar")
        },
        updateInputText: function() {
            this.element.is("input") && !this.singleDatePicker ? this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format)) : this.element.is("input") && this.element.val(this.startDate.format(this.format));

        },
        clickRange: function(a) {
            var b = a.target.innerHTML;
            if (this.chosenLabel = b, b == this.locale.customRangeLabel) this.showCalendars();
            else {
                var c = this.ranges[b];
                this.startDate = c[0], this.endDate = c[1], this.timePicker || (this.startDate.startOf("day"),
                    this.endDate.endOf("day")), this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()),
                    this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()),
                    this.updateCalendars(), this.updateInputText(), this.hideCalendars(), this.hide(), this.element.trigger("apply.daterangepicker", this);

            }
        },
        clickPrev: function(b) {
            var c = a(b.target).parents(".calendar");
            c.hasClass("left") ? this.leftCalendar.month.subtract(1, "month") : this.rightCalendar.month.subtract(1, "month"),
                this.updateCalendars()
        },
        clickNext: function(b) {
            var c = a(b.target).parents(".calendar");

            c.hasClass("left") ? this.leftCalendar.month.add(1, "month") : this.rightCalendar.month.add(1, "month"),
                this.updateCalendars()
        },
        enterDate: function(b) {
            var c = a(b.target).attr("data-title"),
                d = c.substr(1, 1),
                e = c.substr(3, 1),
                f = a(b.target).parents(".calendar");

            f.hasClass("left") ? this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[d][e].format(this.format)) : this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[d][e].format(this.format));

        },
        clickDate: function(c) {
            var d, e, f = a(c.target).attr("data-title"),
                g = f.substr(1, 1),
                h = f.substr(3, 1),
                i = a(c.target).parents(".calendar");

            if (i.hasClass("left")) {
                if (d = this.leftCalendar.calendar[g][h], e = this.endDate, "object" == typeof this.dateLimit) {
                    var j = b(d).add(this.dateLimit).startOf("day");
                    e.isAfter(j) && (e = j)
                }
            } else if (d = this.startDate,
                    e = this.rightCalendar.calendar[g][h], "object" == typeof this.dateLimit) {
                var k = b(e).subtract(this.dateLimit).startOf("day");

                d.isBefore(k) && (d = k)
            }
            if (this.singleDatePicker && i.hasClass("left") ? e = d.clone() : this.singleDatePicker && i.hasClass("right") && (d = e.clone()),
                    i.find("td").removeClass("active"), d.isSame(e) || d.isBefore(e)) a(c.target).addClass("active"),
                this.startDate = d, this.endDate = e, this.chosenLabel = this.locale.customRangeLabel;
            else if (d.isAfter(e)) {
                a(c.target).addClass("active");
                var l = this.endDate.diff(this.startDate);
                this.startDate = d,
                    this.endDate = b(d).add(l, "ms"), this.chosenLabel = this.locale.customRangeLabel
            }
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()), this.updateCalendars(),
            this.singleDatePicker && this.clickApply()
        },
        clickApply: function() {
            this.updateInputText(),
                this.hide(), this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function() {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.chosenLabel = this.oldChosenLabel,
                this.updateView(), this.updateCalendars(), this.hide(), this.element.trigger("cancel.daterangepicker", this);

        },
        updateMonthYear: function(b) {
            var c = a(b.target).closest(".calendar").hasClass("left"),
                d = c ? "left" : "right",
                e = this.container.find(".calendar." + d),
                f = parseInt(e.find(".monthselect").val(), 10),
                g = e.find(".yearselect").val();

            this[d + "Calendar"].month.month(f).year(g), this.updateCalendars()
        },
        updateTime: function(b) {
            var c = a(b.target).closest(".calendar").hasClass("left"),
                d = c ? "left" : "right",
                e = this.container.find(".calendar." + d),
                f = parseInt(e.find(".hourselect").val(), 10) || 0,
                g = parseInt(e.find(".minuteselect").val(), 10) || 0;

            if (this.timePicker12Hour) {
                var h = e.find(".ampmselect").val();
                "PM" === h && 12 > f && (f += 12),
                "AM" === h && 12 === f && (f = 0)
            }
            if (c) {
                var i = this.startDate.clone();
                i.hour(f), i.minute(g),
                    this.startDate = i, this.leftCalendar.month.hour(f).minute(g)
            } else {
                var j = this.endDate.clone();

                j.hour(f), j.minute(g), this.endDate = j, this.rightCalendar.month.hour(f).minute(g)
            }
            this.updateCalendars();

        },
        updateCalendars: function() {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), "left"),
                this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), "right"),
                this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate)),
                this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate)),
                this.container.find(".ranges li").removeClass("active");
            var a = !0,
                b = 0;
            for (var c in this.ranges) this.timePicker ? this.startDate.isSame(this.ranges[c][0]) && this.endDate.isSame(this.ranges[c][1]) && (a = !1,
                    this.container.find(".ranges li:eq(" + b + ")").addClass("active")) : this.startDate.format("YYYY-MM-DD") == this.ranges[c][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[c][1].format("YYYY-MM-DD") && (a = !1,
                    this.container.find(".ranges li:eq(" + b + ")").addClass("active")), b++;
            a && this.container.find(".ranges li:last").addClass("active");

        },
        buildCalendar: function(a, c, d, e) {
            var f, g = b([c, a, 1]),
                h = b(g).subtract(1, "month").month(),
                i = b(g).subtract(1, "month").year(),
                j = b([i, h]).daysInMonth(),
                k = g.day(),
                l = [];

            for (f = 0; 6 > f; f++) l[f] = [];
            var m = j - k + this.locale.firstDay + 1;
            m > j && (m -= 7), k == this.locale.firstDay && (m = j - 6);

            var n, o, p = b([i, h, m, 12, e]);
            for (f = 0, n = 0, o = 0; 42 > f; f++, n++, p = b(p).add(24, "hour")) f > 0 && n % 7 === 0 && (n = 0,
                o++), l[o][n] = p.clone().hour(d), p.hour(12);
            return l
        },
        renderDropdowns: function(a, b, c) {
            for (var d = a.month(), e = '<select class="monthselect">', f = !1, g = !1, h = 0; 12 > h; h++)(!f || h >= b.month()) && (!g || h <= c.month()) && (e += "<option value='" + h + "'" + (h === d ? " selected='selected'" : "") + ">" + this.locale.monthNames[h] + "</option>");

            e += "</select>";
            for (var i = a.year(), j = c && c.year() || i + 5, k = b && b.year() || i - 50, l = '<select class="yearselect">', m = k; j >= m; m++) l += '<option value="' + m + '"' + (m === i ? ' selected="selected"' : "") + ">" + m + "</option>";

            return l += "</select>", e + l
        },
        renderCalendar: function(b, c, d, e) {
            var f = '<div class="calendar-date">';

            f += '<table class="table-condensed">', f += "<thead>", f += "<tr>", this.showWeekNumbers && (f += "<th></th>"),
                f += !d || d.isBefore(b[1][1]) ? '<th class="prev available"><i class="fa fa-arrow-left icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>' : "<th></th>";

            var g = this.locale.monthNames[b[1][1].month()] + b[1][1].format(" YYYY");
            this.showDropdowns && (g = this.renderDropdowns(b[1][1], d, e)),
                f += '<th colspan="5" class="month">' + g + "</th>", f += !e || e.isAfter(b[1][1]) ? '<th class="next available"><i class="fa fa-arrow-right icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>' : "<th></th>",
                f += "</tr>", f += "<tr>", this.showWeekNumbers && (f += '<th class="week">' + this.locale.weekLabel + "</th>"),
                a.each(this.locale.daysOfWeek, function(a, b) {
                    f += "<th>" + b + "</th>"
                }), f += "</tr>", f += "</thead>",
                f += "<tbody>";
            for (var h = 0; 6 > h; h++) {
                f += "<tr>", this.showWeekNumbers && (f += '<td class="week">' + b[h][0].week() + "</td>");

                for (var i = 0; 7 > i; i++) {
                    var j = "available ";
                    j += b[h][i].month() == b[1][1].month() ? "" : "off",
                        d && b[h][i].isBefore(d) || e && b[h][i].isAfter(e) ? j = " off disabled " : b[h][i].format("YYYY-MM-DD") == c.format("YYYY-MM-DD") ? (j += " active ",
                                b[h][i].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && (j += " start-date "),
                                b[h][i].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && (j += " end-date ")) : b[h][i] >= this.startDate && b[h][i] <= this.endDate && (j += " in-range ",
                                b[h][i].isSame(this.startDate) && (j += " start-date "), b[h][i].isSame(this.endDate) && (j += " end-date "));

                    var k = "r" + h + "c" + i;
                    f += '<td class="' + j.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + k + '">' + b[h][i].date() + "</td>";

                }
                f += "</tr>"
            }
            f += "</tbody>", f += "</table>", f += "</div>";
            if (this.timePicker) {
                var l = c.format("HH"),
                    m = c.format("mm");

                f += '<div class="calendar-time">', f += '<input class="hourselect" value="' + l + '">', f += "&nbsp;:&nbsp;",
                    f += '<input class="minuteselect" value="' + m + '">', f += "</div>"
            }
            return f
        },
        remove: function() {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData("daterangepicker");

        }
    }, a.fn.daterangepicker = function(b, d) {
        return this.each(function() {
            var e = a(this);
            e.data("daterangepicker") && e.data("daterangepicker").remove(),
                e.data("daterangepicker", new c(e, b, d))
        }), this
    }
}(window.jQuery, window.moment),
    function(a, b) {
        "use strict";

        function c() {
            if ("pageYOffset" in a) return {
                scrollTop: pageYOffset,
                scrollLeft: pageXOffset
            };
            var b, c, d = document,
                e = d.documentElement,
                f = d.body;
            return b = e.scrollLeft || f.scrollLeft || 0,
                c = e.scrollTop || f.scrollTop || 0, {
                scrollTop: c,
                scrollLeft: b
            }
        }

        function d(b, c) {
            return b === a ? "clientWidth" === c ? a.innerWidth : a.innerHeight : b[c];

        }

        function e(b, d) {
            return b === a ? c()[d] : b[d]
        }

        function f(b, d, e) {
            var f = b.getBoundingClientRect()[e ? "left" : "top"],
                g = d === a ? 0 : d.getBoundingClientRect()[e ? "left" : "top"],
                h = f - g + (d === a ? c() : d)[e ? "scrollLeft" : "scrollTop"];

            return h
        }
        var g = document.documentElement,
            h = g.matches ? "matches" : g.matchesSelector ? "matchesSelector" : g.webkitMatches ? "webkitMatches" : g.webkitMatchesSelector ? "webkitMatchesSelector" : g.msMatches ? "msMatches" : g.msMatchesSelector ? "msMatchesSelector" : g.mozMatches ? "mozMatches" : g.mozMatchesSelector ? "mozMatchesSelector" : null,
            i = b.element.prototype.closest || function(a) {
                    for (var c = this[0].parentNode; c !== document.documentElement && null != c && !c[h](a);) c = c.parentNode;

                    return c && c[h](a) ? b.element(c) : b.element()
                },
            j = b.module("vs-repeat", []).directive("vsRepeat", ["$compile", "$parse", function(c, g) {
                return {
                    restrict: "A",
                    scope: !0,
                    compile: function(h, j) {
                        var k, l, m, n, o, p, q = b.isDefined(j.vsRepeatContainer) ? b.element(h[0].querySelector(j.vsRepeatContainer)) : h,
                            r = q.children().eq(0),
                            s = r[0].outerHTML,
                            t = "$vs_collection",
                            u = !1,
                            v = {
                                vsRepeat: "elementSize",
                                vsOffsetBefore: "offsetBefore",
                                vsOffsetAfter: "offsetAfter",
                                vsScrolledToEndOffset: "scrolledToEndOffset",
                                vsExcess: "excess"
                            };
                        if (r.attr("ng-repeat")) p = "ng-repeat",
                            k = r.attr("ng-repeat");
                        else if (r.attr("data-ng-repeat")) p = "data-ng-repeat", k = r.attr("data-ng-repeat");
                        else if (r.attr("ng-repeat-start")) u = !0, p = "ng-repeat-start", k = r.attr("ng-repeat-start");
                        else {
                            if (!r.attr("data-ng-repeat-start")) throw new Error("angular-vs-repeat: no ng-repeat directive on a child element");

                            u = !0, p = "data-ng-repeat-start", k = r.attr("data-ng-repeat-start")
                        }
                        if (l = /^\s*(\S+)\s+in\s+([\S\s]+?)(track\s+by\s+\S+)?$/.exec(k),
                                m = l[1], n = l[2], o = l[3], u)
                            for (var w = 0, x = q.children().eq(0); null == x.attr("ng-repeat-end") && null == x.attr("data-ng-repeat-end");) w++,
                                x = q.children().eq(w), s += x[0].outerHTML;
                        return q.empty(), {
                            pre: function(h, j, k) {
                                function l() {
                                    if (!G || G.length < 1) h[t] = [], C = 0, h.sizesCumulative = [0];
                                    else if (C = G.length, L) {
                                        h.sizes = G.map(function(a) {
                                            var c = h.$new(!1);
                                            b.extend(c, a), c[m] = a;
                                            var d = k.vsSize || k.vsSizeProperty ? c.$eval(k.vsSize || k.vsSizeProperty) : h.elementSize;

                                            return c.$destroy(), d
                                        });
                                        var a = 0;
                                        h.sizesCumulative = h.sizes.map(function(b) {
                                            var c = a;

                                            return a += b, c
                                        }), h.sizesCumulative.push(a)
                                    } else q();
                                    y()
                                }

                                function q() {
                                    K && h.$$postDigest(function() {
                                        if (D[0].offsetHeight || D[0].offsetWidth) {
                                            for (var a = D.children(), b = 0, c = !1, d = !1; b < a.length;) {
                                                if (null != a[b].attributes[p] || d) {
                                                    if (c || (h.elementSize = 0), c = !0, a[b][P] && (h.elementSize += a[b][P]), !u) break;
                                                    if (null != a[b].attributes["ng-repeat-end"] || null != a[b].attributes["data-ng-repeat-end"]) break;

                                                    d = !0
                                                }
                                                b++
                                            }
                                            c && (y(), K = !1, h.$root && !h.$root.$$phase && h.$apply())
                                        } else var e = h.$watch(function() {
                                            (D[0].offsetHeight || D[0].offsetWidth) && (e(), q())
                                        })
                                    })
                                }

                                function r() {
                                    var a = "tr" === F ? "" : "min-",
                                        b = H ? a + "width" : a + "height";

                                    return b
                                }

                                function w() {
                                    B() && h.$digest()
                                }

                                function x() {
                                    "undefined" != typeof k.vsAutoresize && (K = !0,
                                        q(), h.$root && !h.$root.$$phase && h.$apply()), B() && h.$apply()
                                }

                                function y() {
                                    R = void 0,
                                        S = void 0, T = C, U = 0, z(L ? h.sizesCumulative[C] : h.elementSize * C), B(), h.$emit("vsRepeatReinitialized", h.startIndex, h.endIndex);

                                }

                                function z(a) {
                                    h.totalSize = h.offsetBefore + a + h.offsetAfter
                                }

                                function A() {
                                    var a = d(M[0], O);

                                    a !== V && (y(), h.$root && !h.$root.$$phase && h.$apply()), V = a
                                }

                                function B() {
                                    var a = e(M[0], Q),
                                        b = d(M[0], O),
                                        c = D[0] === M[0] ? 0 : f(D[0], M[0], H),
                                        i = h.startIndex,
                                        j = h.endIndex;

                                    if (L) {
                                        for (i = 0; h.sizesCumulative[i] < a - h.offsetBefore - c;) i++;
                                        for (i > 0 && i--, i = Math.max(Math.floor(i - h.excess / 2), 0),
                                                 j = i; h.sizesCumulative[j] < a - h.offsetBefore - c + b;) j++;
                                        j = Math.min(Math.ceil(j + h.excess / 2), C);

                                    } else i = Math.max(Math.floor((a - h.offsetBefore - c) / h.elementSize) - h.excess / 2, 0), j = Math.min(i + Math.ceil(b / h.elementSize) + h.excess, C);

                                    T = Math.min(i, T), U = Math.max(j, U), 2 === i && (i = 0), h.startIndex = N.latch ? T : i, h.endIndex = N.latch ? U : j;

                                    var l = !1;
                                    if (null == R ? l = !0 : null == S && (l = !0), l || (N.hunked ? Math.abs(h.startIndex - R) >= h.excess / 2 || 0 === h.startIndex && 0 !== R ? l = !0 : (Math.abs(h.endIndex - S) >= h.excess / 2 || h.endIndex === C && S !== C) && (l = !0) : l = h.startIndex !== R || h.endIndex !== S),
                                            l) {
                                        if (h[t] = G.slice(h.startIndex, h.endIndex), h.$emit("vsRepeatInnerCollectionUpdated", h.startIndex, h.endIndex, R, S),
                                                k.vsScrolledToEnd) {
                                            var m = G.length - (h.scrolledToEndOffset || 0);
                                            (h.endIndex >= m && m > S || G.length && h.endIndex === G.length) && h.$eval(k.vsScrolledToEnd);

                                        }
                                        R = h.startIndex, S = h.endIndex;
                                        var n = L ? "(sizesCumulative[$index + startIndex] + offsetBefore)" : "(($index + startIndex) * elementSize + offsetBefore)",
                                            o = g(n),
                                            p = o(h, {
                                                $index: 0
                                            }),
                                            q = o(h, {
                                                $index: h[t].length
                                            }),
                                            s = h.totalSize;
                                        I.css(r(), p + "px"), J.css(r(), s - q + "px");

                                    }
                                    return l
                                }
                                var C, D = b.isDefined(k.vsRepeatContainer) ? b.element(j[0].querySelector(k.vsRepeatContainer)) : j,
                                    E = b.element(s),
                                    F = E[0].tagName.toLowerCase(),
                                    G = [],
                                    H = "undefined" != typeof k.vsHorizontal,
                                    I = b.element("<" + F + ' class="vs-repeat-before-content"></' + F + ">"),
                                    J = b.element("<" + F + ' class="vs-repeat-after-content"></' + F + ">"),
                                    K = !k.vsRepeat,
                                    L = !!k.vsSize || !!k.vsSizeProperty,
                                    M = k.vsScrollParent ? "window" === k.vsScrollParent ? b.element(a) : i.call(D, k.vsScrollParent) : D,
                                    N = "vsOptions" in k ? h.$eval(k.vsOptions) : {},
                                    O = H ? "clientWidth" : "clientHeight",
                                    P = H ? "offsetWidth" : "offsetHeight",
                                    Q = H ? "scrollLeft" : "scrollTop";

                                if (h.totalSize = 0, !("vsSize" in k) && "vsSizeProperty" in k && console.warn("vs-size-property attribute is deprecated. Please use vs-size attribute which also accepts angular expressions."),
                                    0 === M.length) throw "Specified scroll parent selector did not match any element";
                                h.$scrollParent = M,
                                L && (h.sizesCumulative = []), h.elementSize = +k.vsRepeat || d(M[0], O) || 50, h.offsetBefore = 0,
                                    h.offsetAfter = 0, h.excess = 2, H ? (I.css("height", "100%"), J.css("height", "100%")) : (I.css("width", "100%"),
                                        J.css("width", "100%")), Object.keys(v).forEach(function(a) {
                                    k[a] && k.$observe(a, function(b) {
                                        h[v[a]] = +b, y()
                                    })
                                }), h.$watchCollection(n, function(a) {
                                    G = a || [], l()
                                }), E.eq(0).attr(p, m + " in " + t + (o ? " " + o : "")),
                                    E.addClass("vs-repeat-repeated-element"), D.append(I), D.append(E), c(E)(h), D.append(J),
                                    h.startIndex = 0, h.endIndex = 0, M.on("scroll", w), b.element(a).on("resize", x), h.$on("$destroy", function() {
                                    b.element(a).off("resize", x), M.off("scroll", w)
                                }), h.$on("vsRepeatTrigger", l), h.$on("vsRepeatResize", function() {
                                    K = !0, q()
                                });
                                var R, S, T, U;
                                h.$on("vsRenderAll", function() {
                                    N.latch && setTimeout(function() {
                                        var a = C;
                                        U = Math.max(a, U), h.endIndex = N.latch ? U : a, h[t] = G.slice(h.startIndex, h.endIndex),
                                            S = h.endIndex, h.$$postDigest(function() {
                                            I.css(r(), 0), J.css(r(), 0)
                                        }), h.$apply(function() {
                                            h.$emit("vsRenderAllDone")
                                        })
                                    })
                                });
                                var V;
                                h.$watch(function() {
                                    "function" == typeof a.requestAnimationFrame ? a.requestAnimationFrame(A) : A();

                                })
                            }
                        }
                    }
                }
            }]);
        "undefined" != typeof module && module.exports && (module.exports = j.name)
    }(window, window.angular),
    function(a) {
        "use strict";
        a.module("vcRecaptcha", [])
    }(angular),
    function(a) {
        "use strict";

        var b = a.module("vcRecaptcha");
        b.service("vcRecaptchaService", ["$window", "$q", function(b, c) {
            function d() {
                return f ? c.when(f) : h
            }

            function e() {
                if (!f) throw new Error("reCaptcha has not been loaded yet.");

            }
            var f, g = c.defer(),
                h = g.promise;
            return b.vcRecaptchaApiLoaded = function() {
                f = b.grecaptcha,
                    g.resolve(f)
            }, a.isDefined(b.grecaptcha) && b.vcRecaptchaApiLoaded(), {
                create: function(a, b, c, e) {
                    return e.callback = c, e.sitekey = b, d().then(function(b) {
                        return b.render(a, e)
                    })
                },
                reload: function(a) {
                    e(), f.reset(a)
                },
                getResponse: function(a) {
                    return e(), f.getResponse(a)
                }
            }
        }])
    }(angular),
    function(a) {
        "use strict";

        function b() {
            throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create');

        }
        var c = a.module("vcRecaptcha");
        c.directive("vcRecaptcha", ["$document", "$timeout", "vcRecaptchaService", function(a, c, d) {
            return {
                restrict: "A",
                require: "?^^form",
                scope: {
                    response: "=?ngModel",
                    key: "=",
                    theme: "=?",
                    size: "=?",
                    tabindex: "=?",
                    onCreate: "&",
                    onSuccess: "&",
                    onExpire: "&"
                },
                link: function(e, f, g, h) {
                    function i() {
                        h && h.$setValidity("recaptcha", null), k && (c.cancel(k), k = null), j()
                    }

                    function j() {
                        angular.element(a[0].querySelectorAll(".pls-container")).parent().remove()
                    }
                    g.hasOwnProperty("key") || b(),
                        e.widgetId = null;
                    var k, l = e.$watch("key", function(a) {
                        if (a) {
                            40 !== a.length && b();
                            var j = function(a) {
                                c(function() {
                                    h && h.$setValidity("recaptcha", !0), e.response = a, e.onSuccess({
                                        response: a,
                                        widgetId: e.widgetId
                                    })
                                }), k = c(function() {
                                    h && h.$setValidity("recaptcha", !1), e.response = "",
                                        e.onExpire({
                                            widgetId: e.widgetId
                                        })
                                }, 5e3)
                            };
                            d.create(f[0], a, j, {
                                element: g.id || null,
                                theme: e.theme || g.theme || null,
                                tabindex: e.tabindex || g.tabindex || null,
                                size: e.size || g.size || null
                            }).then(function(a) {
                                h && h.$setValidity("recaptcha", !1), e.widgetId = a, e.onCreate({
                                    widgetId: a
                                }), e.$on("$destroy", i);

                            }), l()
                        }
                    })
                }
            }
        }])
    }(angular), angular.module("ngIOS9UIWebViewPatch", ["ng"]).config(["$provide", function(a) {
    "use strict";
    a.decorator("$browser", ["$delegate", "$window", function(a, b) {
        function c(a) {
            return /(iPhone|iPad|iPod).* OS 9_\d/.test(a) && !/Version\/9\./.test(a)
        }

        function d(a) {
            function b() {
                c = null
            }
            var c = null,
                d = a.url;
            return a.url = function() {
                return arguments.length ? (c = arguments[0],
                        d.apply(a, arguments)) : c || d.apply(a, arguments)
            }, window.addEventListener("popstate", b, !1),
                window.addEventListener("hashchange", b, !1), a
        }
        return c(b.navigator.userAgent) ? d(a) : a;

    }])
}]);
var app = angular.module("cashier", ["ngRoute", "pasvaz.bindonce", "vs-repeat", "vcRecaptcha", "ngIOS9UIWebViewPatch"]).config(["$routeProvider", function(a) {
    a.when("/", {
        templateUrl: "/views/main.html",
        controller: MainController
    }).when("/login", {
        templateUrl: "/views/login.html",
        controller: LoginController
    }).when("/login-external/:token", {
        templateUrl: "/views/login.html",
        controller: LoginExtController
    }).when("/reports/overall", {
        templateUrl: "/views/report.html",
        controller: ReportController
    }).when("/reports/daily/:date", {
        templateUrl: "/views/reportDaily.html",
        controller: ReportDailyController
    }).when("/reports/sources", {
        templateUrl: "/views/reportSource.html",
        controller: ReportSourceController
    }).when("/reports/accounts", {
        templateUrl: "/views/reportAccounts.html",
        controller: ReportAccountController
    }).when("/reports/sessions", {
        templateUrl: "/views/reportCashierSession.html",
        controller: ReportCashierSessionController
    }).when("/reports/cards", {
        templateUrl: "/views/reportCard.html",
        controller: ReportCardController
    }).when("/reports/gamer", {
        templateUrl: "/views/reportGamer.html",
        controller: ReportGamerController
    }).when("/reports/devices-income", {
        templateUrl: "/views/reportDeviceIncome.html",
        controller: ReportDeviceIncomeController
    }).when("/reports/games-income", {
        templateUrl: "/views/reportLottery.html",
        controller: ReportLotteryController
    }).when("/reports/devices", {
        templateUrl: "/views/reportDevice.html",
        controller: ReportDeviceController
    }).when("/reports/devices/:id", {
        templateUrl: "/views/reportDeviceDetailed.html",
        controller: ReportDeviceDetailedController
    }).when("/reports/pins", {
        templateUrl: "/views/reportPIN.html",
        controller: ReportPINController
    }).when("/reports/pins/:id", {
        templateUrl: "/views/reportPINDetailed.html",
        controller: ReportPINDetailedController
    }).when("/reports/pins-operations/:id", {
        templateUrl: "/views/reportPINOperations.html",
        controller: ReportPINOperationsController
    }).when("/reports/bets-history", {
        templateUrl: "/views/reportHistory.html",
        controller: ReportHistoryController
    }).when("/reports/bets-round/:source/:round", {
        templateUrl: "/views/reportRound.html",
        controller: ReportRoundController
    }).when("/reports/gamer/:id", {
        templateUrl: "/views/reportGamer.html",
        controller: ReportGamerController
    }).when("/reports/jackpots", {
        templateUrl: "/views/reportJackpot.html",
        controller: ReportJackpotController
    }).when("/reports/2-ndfl", {
        templateUrl: "/views/report2NDFL.html",
        controller: Report2NDFLController
    }).when("/reports/billing-usa", {
        templateUrl: "/views/reportBillingUSA.html",
        controller: "reportBillingUSAController"
    }).when("/reports/cafe-users", {
        templateUrl: "/views/reportCafeUsers.html",
        controller: ReportCafeUsersController
    }).when("/reports/cafe-games", {
        templateUrl: "/views/reportCafeGames.html",
        controller: ReportCafeGamesController
    }).when("/cashdesks", {
        templateUrl: "/views/cashdesk.html",
        controller: CashdeskController
    }).when("/users", {
        templateUrl: "/views/users.html",
        controller: UserController
    }).when("/users-admin", {
        templateUrl: "/views/usersAdmin.html",
        controller: "userAdminController",
        controllerAs: "ctrl"
    }).when("/accounts", {
        templateUrl: "/views/account.html",
        controller: AccountPageController
    }).when("/accounting", {
        templateUrl: "/views/accounting.html",
        controller: AccountingCtrl
    }).when("/accounting/promo", {
        templateUrl: "/views/promo.html",
        controller: PromoCtrl
    }).when("/settings/sources", {
        templateUrl: "/views/settings.html",
        controller: SettingsCtrl
    }).when("/settings/devices", {
        templateUrl: "/views/settingsDevice.html",
        controller: SettingsDeviceCtrl
    }).when("/settings/device-editor", {
        templateUrl: "/views/deviceEditor.html",
        controller: DeviceEditorCtrl
    }).when("/settings/device-editor/:device", {
        templateUrl: "/views/deviceEditor.html",
        controller: DeviceEditorCtrl
    }).when("/settings/jackpots", {
        templateUrl: "/views/jackpots.html",
        controller: JackpotController
    }).when("/settings/community-jackpots", {
        templateUrl: "/views/communityJackpots.html",
        controller: CommunityJackpotController
    }).when("/settings/wheel-jackpots", {
        templateUrl: "/views/wheelJackpots.html",
        controller: WheelJackpotController
    }).when("/activity", {
        templateUrl: "/views/activity.html",
        controller: "activityController"
    }).when("/cafe/users", {
        templateUrl: "/views/cafeUsers.html",
        controller: CafeUsersController
    }).when("/cafe/money", {
        templateUrl: "/views/cafeMoney.html",
        controller: CafeMoneyController
    }).when("/notifications", {
        templateUrl: "/views/notifications.html",
        controller: "NotificationController",
        controllerAs: "ctrl"
    }).when("/slips-to-approve", {
        templateUrl: "/views/slipsToApprove.html",
        controller: "SlipsToApproveController",
        controllerAs: "ctrl"
    }).otherwise({
        redirectTo: "/"
    })
}]).config(["$httpProvider", "$provide", function(a, b) {
    b.factory("myHttpInterceptor", ["$q", "$rootScope", function(a, b) {
        return {
            response: function(a) {
                return a
            },
            responseError: function(c) {
                return 401 === c.status && "Outdated auth data! Please signed in." !== c.data && b.$broadcast("auth/login_required"),
                c.status > 401 && b.$broadcast("http/error"), a.reject(c)
            }
        }
    }]), a.interceptors.push("myHttpInterceptor");

}]).config(["$sceProvider", function(a) {
    a.enabled(!1)
}]).config(["$controllerProvider", function(a) {
    a.allowGlobals()
}]).config(["$compileProvider", function(a) {
    a.debugInfoEnabled(!1);

}]).run(["$rootScope", "$location", "auth", "accounts", function(a, b, c, d) {
    c.init(), a.$on("$routeChangeSuccess", function() {
        a.pageTitle = "Cashier"
    }), a.setPageTitle = function(b) {
        a.pageTitle = b ? b + " - Cashier" : "Cashier";

    }, a.$watch("uid", function() {
        a.uid && d.load()
    })
}]);
app.service("accounts", ["$rootScope", "$http", function(a, b) {
    function c(a) {
        var b = _.find(d, function(b) {
            return b.id === a
        });
        if (!b) return "not found";

        var c = b.name + " - " + b.id;
        if (0 === b.level) return c;
        for (var e = b, f = b.level; f > 0;) {
            c = e.parent_name + " > " + c;

            var g = _.find(d, function(a) {
                return a.id === e.parent_id
            });
            f--, e = g
        }
        return c
    }
    var d = [],
        e = function() {
            return d
        },
        f = function() {
            a.uid && b.get("/api/accounts").success(function(b) {
                d = [], _.forEach(b, function(a) {
                    d.push({
                        id: a[0],
                        name: a[1],
                        status: a[2],
                        parent_id: a[3],
                        parent_name: a[4],
                        level: a[5],
                        note: a[6],
                        balance: a[7],
                        currency: a[8]
                    })
                }), a.$broadcast("accounts/main_ready")
            })
        };
    return {
        get: e,
        load: f,
        getFullPath: c
    }
}]), app.service("auth", ["$rootScope", "$location", "$http", "storage", function(a, b, c, d) {
    function e() {
        a.login = d.get("user.login"), a.uid = d.get("user.id");
        var c = d.get("user.role");

        a.hasRoleAdmin = "admin" === c ? 1 : 0, a.hasRoleMaster = "master" === c || a.hasRoleAdmin ? 1 : 0, a.hasRoleAccountant = "accountant" === c || a.hasRoleAdmin || a.hasRoleMaster ? 1 : 0,
            a.hasRoleBookkeeper = "bookkeeper" === c || a.hasRoleAdmin || a.hasRoleMaster || a.hasRoleAccountant ? 1 : 0;

        var e = parseInt(d.get("user.account"));
        a.hasRoleAdmin = a.hasRoleAdmin || (1 === e || 32013 === e) && a.hasRoleMaster,
            a.uid ? (a.isLoggedIn = !0, 0 === b.url().indexOf("/login") && b.url("/")) : (a.isLoggedIn = !1,
                    b.url("/login"))
    }

    function f() {
        d.clearAll("user"), d.clearAllTemp(), window.location.assign("/");

    }

    function g(a, b) {
        c.post("/api/client-log", {
            cookieEnabled: navigator.cookieEnabled,
            storageSupported: d.isSupported,
            msg: "401 error",
            response: b
        }).success(function() {});

    }

    function h() {
        c.get("/api/logout").success(f)
    }

    function i(a, b) {
        d.set("user.id", b.id),
            d.set("user.login", b.login), d.set("user.name", b.name), d.set("user.realm", b.realm),
            d.set("user.account", b.account), d.set("user.role", b.role), d.set("user.md5", b.md5),
            e()
    }

    function j() {
        a.$on("auth/logout", h), a.$on("auth/login_required", f), a.$on("auth/logged_in", i),
            a.$on("auth/log_401", g), e()
    }
    return {
        init: j
    }
}]),
    function() {
        "use strict";

        function a() {
            function a(a, c) {
                b("POST", a, c)
            }

            function b(a, b, c, d) {
                var e = document.getElementById("excel-export-form");

                e && e.parentNode.removeChild(e);
                var f = document.createElement("form");
                if (f.id = "excel-export-form",
                        f.action = b, f.method = a, f.target = d || "_self", c)
                    for (var g in c) {
                        var h = document.createElement("textarea");

                        h.name = g, h.value = "object" == typeof c[g] ? JSON.stringify(c[g]) : c[g], f.appendChild(h);

                    }
                f.style.display = "none", document.body.appendChild(f), f.submit()
            }
            var c = {
                generate: a
            };
            return c
        }
        angular.module("cashier").factory("excel", a)
    }(), app.service("storage", function() {
    function a() {
        var a = {};
        this.setItem = function(b, c) {
            a[b] = c
        }, this.getItem = function(b) {
            return "undefined" != typeof a[b] ? a[b] : null
        }, this.removeItem = function(b) {
            a[b] = void 0;

        }, this.clear = function(c) {
            if (c) {
                var e = c ? d + c : d,
                    f = e.length;
                for (var g in b) g.substr(0, f) === e && delete a[g];

            } else a = {}
        }
    }
    var b, c, d = "cashier.",
        e = function() {
            var a = "test",
                b = window.localStorage;
            try {
                return b.setItem(a, "1"), b.removeItem(a), !0
            } catch (c) {
                return !1
            }
        }();
    e ? (b = window.localStorage,
            c = window.sessionStorage) : (b = new a, c = new a);
    var f = function(a, c) {
            b.setItem(d + a, c)
        },
        g = function(a) {
            var c = b.getItem(d + a);
            return c ? c : null
        },
        h = function(a) {
            b.removeItem(d + a)
        },
        i = function(a, b) {
            c.setItem(d + a, b)
        },
        j = function(a) {
            var b = c.getItem(d + a);
            return b ? "false" === b ? !1 : "true" === b ? !0 : b : null;

        },
        k = function(a) {
            c.removeItem(d + a)
        },
        l = function(a) {
            var c = a ? d + a : d,
                f = c.length;
            if (e)
                for (var g in b) g.substr(0, f) === c && h(g.substr(d.length));
            else b.clear(a)
        },
        m = function() {
            c.clear()
        };
    return {
        isSupported: e,
        set: f,
        get: g,
        remove: h,
        clearAll: l,
        setTemp: i,
        getTemp: j,
        removeTemp: k,
        clearAllTemp: m
    }
}), app.directive("tooltip", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            $(b).tooltip({
                placement: c.placement || "bottom"
            })
        }
    }
}), app.directive("daterangepicker", ["storage", function(a) {
    return {
        restrict: "A",
        scope: {
            start: "=",
            end: "=",
            label: "="
        },
        link: function(b, c, d) {
            var e = parseInt(d.optOffset),
                f = "true" === d.optTime,
                g = d.optPrefix,
                h = 0;

            if (d.optLimit && (h = {
                    days: parseInt(d.optLimit)
                }), !b.start && !b.end) {
                var i = moment(a.getTemp(g + ".start"));

                b.start = i.isValid() ? i : moment().add(e, "days").startOf("day");
                var j = moment(a.getTemp(g + ".end"));

                b.end = j.isValid() ? j : moment().endOf("day")
            }
            var k = f ? "D MMM YYYY HH:mm" : "D MMM YYYY",
                l = "YYYY-MM-DD",
                m = "YYYY-MM-DDTHH:mm";

            b.$watch("start + end", function() {
                var c = b.start,
                    d = b.end;
                b.label = "2000-01-01" === c.format(l) ? window.datePickerLifetimeLabel : c.format(k) + " - " + d.format(k),
                    a.setTemp(g + ".start", c.format(m)), a.setTemp(g + ".end", d.format(m))
            });
            var n = _.clone(f ? window.datetimePickerRanges : window.datePickerRanges);

            if (d.optLimit) {
                var o = parseInt(d.optLimit);
                _.forEach(n, function(a, b) {
                    var c = a[1].diff(a[0], "days");

                    c > o && delete n[b]
                })
            }
            c.daterangepicker({
                ranges: n,
                startDate: b.start,
                endDate: b.end,
                minDate: "2000-01-01",
                maxDate: moment().add(1, "days").endOf("day"),
                locale: window.datePickerLocale,
                format: "YYYY-MM-DD",
                timePicker: f,
                dateLimit: h,
                timePicker12Hour: !1
            }, function(a, c) {
                b.$apply(function() {
                    b.start = a,
                        b.end = c
                })
            })
        }
    }
}]), app.directive("timezones", ["storage", function(a) {
    return {
        restrict: "A",
        scope: {
            tz: "=ngModel"
        },
        template: '<option value="-12">UTC-12:00</option><option value="-11">UTC-11:00</option><option value="-10">UTC-10:00</option><option value="-9">UTC-09:00</option><option value="-8">UTC-08:00</option><option value="-7">UTC-07:00</option><option value="-6">UTC-06:00</option><option value="-5">UTC-05:00</option><option value="-4">UTC-04:00</option><option value="-3">UTC-03:00</option><option value="-2">UTC-02:00</option><option value="-1">UTC-01:00</option><option value="0">UTC</option><option value="1">UTC+01:00</option><option value="2">UTC+02:00</option><option value="3">UTC+03:00</option><option value="4">UTC+04:00</option><option value="5">UTC+05:00</option><option value="6">UTC+06:00</option><option value="7">UTC+07:00</option><option value="8">UTC+08:00</option><option value="9">UTC+09:00</option><option value="10">UTC+10:00</option><option value="11">UTC+11:00</option><option value="12">UTC+12:00</option><option value="13">UTC+13:00</option><option value="14">UTC+14:00</option>',
        link: function(b) {
            if (!b.tz) {
                var c = -Math.round((new Date).getTimezoneOffset() / 60),
                    d = a.get("history.reports.tz");

                b.tz = d ? d : "" + c
            }
            b.$watch("tz", function(b, c) {
                b && b != c && a.set("history.reports.tz", b)
            });

        }
    }
}]), app.directive("timezonesUsa", ["storage", function(a) {
    return {
        restrict: "A",
        scope: {
            tz: "=ngModel"
        },
        template: '<option value="-10">HST (UTC-10:00)</option><option value="-9">AKST (UTC-9:00)</option><option value="-8">PST (UTC-8:00)</option><option value="-7">MST (UTC-7:00)</option><option value="-6">CST (UTC-6:00)</option><option value="-5">EST (UTC-5:00)</option>',
        link: function(b) {
            if (!b.tz) {
                var c = -Math.round((new Date).getTimezoneOffset() / 60);
                c = -10 > c && c > -5 ? -5 : c;

                var d = a.get("history.reports.tz");
                b.tz = d ? d : "" + c
            }
            b.$watch("tz", function(b, c) {
                b && b != c && a.set("history.reports.tz", b);

            })
        }
    }
}]), app.directive("loading", ["$http", function(a) {
    return {
        restrict: "A",
        link: function(b, c) {
            b.isLoading = function() {
                return a.pendingRequests.length > 0
            }, b.$watch(b.isLoading, function(a) {
                a ? c.show() : c.hide()
            })
        }
    }
}]), app.directive("contenteditable", function() {
    return {
        restrict: "A",
        require: "ngModel",
        scope: {
            model: "=ngModel",
            onChange: "&onChange"
        },
        link: function(a, b, c, d) {
            function e() {
                d.$setViewValue(b.text())
            }
            d.$render = function() {
                b.html(d.$viewValue)
            };

            var f = _.debounce(a.onChange, 1e3);
            b.bind("keyup change", function() {
                a.$apply(e), f();

            }), a.$watch("model", function() {
                a.$eval(c.ngModel + " = model")
            }), a.$watch(c.ngModel, function(b) {
                a.model = b
            })
        }
    }
}), app.directive("autofillSubmit", function() {
    return {
        restrict: "A",
        priority: -10,
        link: function(a, b) {
            b.on("submit", function() {
                b.find("input").trigger("input").trigger("change").trigger("keydown");

            })
        }
    }
}), jQuery && jQuery.event.props.push("dataTransfer"), app.directive("draggable", function() {
    return {
        restrict: "A",
        link: function(a, b) {
            angular.element(b).attr("draggable", "true"),
                b.bind("dragstart", function(a) {
                    var c = a.dataTransfer;
                    c.effectAllowed = "move", c.setData("plain/text", b.attr("id")),
                        this.classList.add("drag")
                }), b.bind("dragend", function() {
                this.classList.remove("drag");

            })
        }
    }
}), app.directive("droppable", function() {
    return {
        restrict: "A",
        scope: !0,
        link: function(a, b, c) {
            b.bind("dragover", function(a) {
                return a.preventDefault(), a.dataTransfer.dropEffect = "move", !1
            }), b.bind("dragenter", function(a) {
                angular.element(a.target).addClass("drag-over");

            }), b.bind("dragleave", function(a) {
                angular.element(a.target).removeClass("drag-over");

            }), b.bind("drop", function(d) {
                d.preventDefault(), d.stopPropagation && d.stopPropagation(),
                    angular.element(d.target).removeClass("drag-over");
                var e = d.dataTransfer.getData("plain/text");

                a.$apply(function() {
                    var d = a[c.onDrop];
                    "function" == typeof d && d(e, b.attr("id"))
                })
            });

        }
    }
}), app.directive("numbersOnly", function() {
    return {
        require: "ngModel",
        link: function(a, b, c, d) {
            function e(a) {
                if (a) {
                    var b = a.replace(/[^0-9]/g, "");
                    return b !== a && (d.$setViewValue(b),
                        d.$render()), b
                }
                return void 0
            }
            d.$parsers.push(e)
        }
    }
}), app.directive("convertToNumber", function() {
    return {
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$parsers.push(function(a) {
                return parseInt(a, 10);

            }), d.$formatters.push(function(a) {
                return "" + a
            })
        }
    }
}), app.filter("formatNumberFixed", function() {
    return function(a) {
        return "undefined" == typeof a || null === a || "-" === a ? "-" : "number" != typeof a ? a : isNaN(a) ? "-" : a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }
}), app.filter("formatNumberFixedUSA", function() {
    return function(a) {
        if ("undefined" == typeof a || null === a || "-" === a) return "-";

        if ("number" != typeof a) return a;
        if (isNaN(a)) return "-";
        var b = a >= 0 ? "$" : "-$";
        return a = Math.abs(a),
        b + a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}), app.filter("formatNumber", function() {
    return function(a) {
        return "undefined" == typeof a || null === a || "-" === a ? "-" : "" === a ? "" : (a = Math.round(100 * a) / 100,
                    a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "))
    }
});
var AccountPageController = function(a, b, c) {
    function d() {
        a.accounts = _.clone(c.get()), a.accounts.sort(function(a, b) {
            return a.id - b.id;

        }), a.currencies = _.uniq(_.pluck(a.accounts, "currency")), e(), a.pager.current = 1, f()
    }

    function e() {
        a.selCurrencies = {};
        for (var b = a.currencies.length - 1; b >= 0; b--) a.selCurrencies[a.currencies[b]] = !0;

    }

    function f() {
        if (a.accounts.length) {
            var b, c = a.accounts;
            "object" == typeof a.selCurrencies && (c = _.filter(c, function(b) {
                return a.selCurrencies[b.currency]
            })), a.filter.showDeleted || (c = _.filter(c, function(a) {
                return 0 !== a.status
            })), a.filter.id && (b = a.filter.id, c = _.filter(c, function(a) {
                return 0 === (a.id + "").indexOf(b);

            })), a.filter.name && (b = a.filter.name.toLowerCase(), c = _.filter(c, function(a) {
                return -1 !== a.name.toLowerCase().indexOf(b);

            })), a.filter.parent && (b = a.filter.parent.toLowerCase(), c = _.filter(c, function(a) {
                return 0 === (a.parent_id + "").indexOf(b) ? !0 : a.parent_name ? -1 !== a.parent_name.toLowerCase().indexOf(b) : !1;

            })), a.filter.note && (b = a.filter.note.toLowerCase(), c = _.filter(c, function(a) {
                return a.note ? -1 !== a.note.toLowerCase().indexOf(b) : !1;

            })), a.filteredCount = c.length;
            var d = a.pager;
            d.total = Math.ceil(c.length / d.size) || 1,
                a.filtered = c.slice((d.current - 1) * d.size, d.current * d.size)
        }
    }

    function g() {
        a.$apply(function() {
            b.get("/api/accounts/check/" + encodeURIComponent(a.newAccName)).success(function(b) {
                a.isValidAccName = !b.exists
            })
        })
    }

    function h(b) {
        "success" === b ? (c.load(), a.cancel()) : a.serverError = b;

    }
    a.mode = "list", a.pager = {
        size: 20,
        current: 1,
        total: 0
    }, a.filter = {
        id: "",
        name: "",
        parent: "",
        note: "",
        showDeleted: !1
    }, a.$on("accounts/main_ready", d), d(), a.clearFilters = function() {
        a.filter.id = "", a.filter.name = "", a.filter.parent = "", a.filter.note = "", a.filter.showDeleted = !1;

    }, a.$watch("filter.id + filter.name + filter.parent + filter.note + filter.showDeleted", function() {
        a.pager.current = 1, f()
    }), a.filterByCurrency = function() {
        a.pager.current = 1, f()
    }, a.next = function() {
        a.pager.current < a.pager.total && a.pager.current++, f()
    }, a.prev = function() {
        a.pager.current > 1 && a.pager.current--,
            f()
    }, a.isValidAccName = !0;
    var i = _.debounce(g, 500);
    a.$watch("newAccName", function(b) {
        a.showEmptyAccountError = !1, b && i()
    }), a.createForm = function(b) {
        a.activeAcc = b, a.mode = "create";

    }, a.deleteForm = function(b) {
        a.activeAcc = b, a.mode = "delete"
    }, a.changeForm = function(b) {
        a.newParentId = "", a.activeAcc = b, a.mode = "changeParent"
    }, a.cancel = function() {
        a.mode = "list",
            a.activeAcc = null, a.newAccName = "", a.newAccNote = "", a.serverError = !1
    }, a.create = function() {
        a.newAccName || (a.showEmptyAccountError = !0), a.newAccName && a.isValidAccName && b.post("/api/accounts/create", {
            parent: a.activeAcc.id,
            name: a.newAccName,
            note: a.newAccNote
        }).success(h)
    }, a.deleteAccount = function() {
        b.post("/api/accounts/delete", {
            accId: a.activeAcc.id
        }).success(h)
    }, a.changeParent = function() {
        a.newParentId && b.post("/api/accounts/change-parent", {
            accId: a.activeAcc.id,
            parentId: a.newParentId
        }).success(h)
    }, a.onChangeAccNote = function(c) {
        a.$apply(function() {
            b.post("/api/accounts/edit-note", {
                accId: c.id,
                note: c.note
            }).success(function(a) {
                "error" === a ? c.invalidNote = !0 : delete c.invalidNote;

            }).error(function() {
                c.invalidNote = !0
            })
        })
    }, a.sendAction = function(a, c) {
        b.post("/api/accounts/control", {
            accId: a,
            cmd: c
        }).success(function() {})
    }, a.selectAccount = function(b) {
        a.$emit("accounts_select", b);

    }
};
AccountPageController.$inject = ["$scope", "$http", "accounts"];
var AccountPanelCtrl = function(a, b, c, d) {
    a.showSidebar = !1, "boolean" != typeof a.showSidebar && (a.showSidebar = !0), a.toggleSidebar = function() {
        a.showSidebar = !a.showSidebar, d.setTemp("history.show_sidebar", a.showSidebar), a.$emit("accounts_sidebar", a.showSidebar);

    }, a.$watch("showSidebar", function() {
        a.$emit("accounts_sidebar", a.showSidebar)
    }), b.$on("accounts_sidebar", function(b, c) {
        a.showSidebar = c
    }), a.filter = "", a.searchScope = "id/name", a.$watch("filter + searchScope", function() {
        "" !== a.filter && (a.showSidebar = !0), a.$emit("accounts_filter", {
            value: a.filter.toLowerCase(),
            scope: a.searchScope
        })
    }), a.$on("http/error", function() {
        a.serverError = !0, c(function() {
            a.serverError = !1
        }, 4e3, !0)
    })
};
AccountPanelCtrl.$inject = ["$scope", "$rootScope", "$timeout", "storage"];

var AccountSidebarCtrl = function(a, b, c, d) {
    function e(a) {
        var b = i.value;
        switch (i.scope) {
            case "id/name":
                return 0 === (a.id + "").indexOf(b) || -1 !== a.name.toLowerCase().indexOf(b);

            case "parent":
                return 0 === (a.parent_id + "").indexOf(b) ? !0 : a.parent_name ? -1 !== a.parent_name.toLowerCase().indexOf(b) : !1;

            case "note":
                return a.note ? -1 !== a.note.toLowerCase().indexOf(b) : !1;
            default:
                return !1;

        }
    }

    function f() {
        if (a.accounts) {
            var b = a.accounts;
            if (a.showDeleted || (b = _.filter(b, function(a) {
                    return 1 === a.status
                })), i.value) {
                for (var c, d = [], f = 0, g = b.length; g > f; f++)
                    if (c = b[f], e(c) && d.push(c.id),
                        a.isLimitedFilter && d.length >= 20) {
                        a.showFilterMessage = !0;
                        break
                    }
                b = _.filter(b, function(b) {
                    return -1 !== d.indexOf(b.id) || "open" === a.nodes[b.id] || "open" === a.nodes[b.parent_id];

                })
            } else 0 !== a.accounts.length && (a.nodes[a.accounts[0].id] = "open"), b = _.filter(b, function(b) {
                return "open" === a.nodes[b.id] || "open" === a.nodes[b.parent_id]
            });
            a.filtered = b
        }
    }

    function g() {
        var d = b.selectedAccounts;
        b.isOneAccSelected = 1 === d.length, 1 === d.length && a.accounts.length > 0 && (d[0].parents = h(d[0])),
            c.set("current_accounts", JSON.stringify(d)), b.$broadcast("accounts_updated"), j()
    }

    function h(b) {
        var c = [],
            d = b,
            e = b.level - 1;
        if (0 === b.level) return c;
        for (; e > 0;) {
            c.unshift(d.parent_name);

            var f = _.find(a.accounts, function(a) {
                return a.id === d.parent_id
            });
            e--, d = f
        }
        return c.unshift(d.parent_name),
            c
    }
    b.selectedAccounts = JSON.parse(c.get("current_accounts")) || [], b.isOneAccSelected = 1 === b.selectedAccounts.length,
        b.$on("accounts_sidebar", function(b, c) {
            a.showSidebar = c
        }), a.accounts = d.get(), a.$on("accounts/main_ready", function() {
        a.accounts = d.get(), f()
    }), a.closeSidebar = function() {
        a.showSidebar = !1, a.$emit("accounts_sidebar", a.showSidebar);

    };
    var i = {};
    a.showDeleted = !1, a.nodes = {}, a.isFiltered = !1, b.$on("accounts_filter", function(b, c) {
        i = c, a.isFiltered = "" !== c.value, a.isLimitedFilter = !0, a.nodes = {}, f()
    }), a.$watch("showDeleted", function() {
        f()
    }), a.selected = {}, _.forEach(b.selectedAccounts, function(b) {
        a.selected[b.id] = !0
    }),
        a.clearAll = function() {
            a.selected = {}, b.selectedAccounts = [], g()
        }, a.select = function(c) {
        a.selected = {}, a.selected[c.id] = !0, b.selectedAccounts = [c], g()
    }, b.$on("accounts_select", function(b, c) {
        (_.isObject(c) || (c = _.find(a.accounts, function(a) {
            return a.id === c
        }))) && a.select(c);

    }), a.updateSelectedAccounts = function(c) {
        for (var d = a.accounts.indexOf(c), e = a.accounts, f = d + 1, h = e.length; h > f && e[f].level > c.level; f++)(a.showDeleted !== !1 || 0 !== e[f].status) && (a.selected[e[f].id] = a.selected[c.id]);

        var i = [];
        _.forEach(a.accounts, function(b) {
            a.selected[b.id] && i.push(b)
        }), b.selectedAccounts = i,
            g()
    };
    var j = _.debounce(function() {
        b.$broadcast("accounts_updated_delayed")
    }, 1500, {
        leading: !1,
        trailing: !0
    });
    a.clickNode = function(b) {
        var c = a.nodes;
        if ("leaf" !== c[b.id]) {
            for (var d = a.accounts.indexOf(b), e = a.accounts, g = [], h = d + 1, i = e.length; i > h && e[h].level > b.level; h++) g.push(e[h].id);

            if (c[b.id] && "closed" !== c[b.id])
                if (0 !== b.level) {
                    for (h = g.length - 1; h >= 0; h--) "open" === c[g[h]] && (c[g[h]] = "closed");

                    c[b.id] = "closed"
                } else a.nodes = {};
            else c[b.id] = g.length ? "open" : "leaf";
            f()
        }
    }, a.showAllFiltered = function() {
        a.isLimitedFilter = !1, f()
    }
};
AccountSidebarCtrl.$inject = ["$scope", "$rootScope", "storage", "accounts"];

var AccountingCtrl = function(a, b, c) {
    function d() {
        a.isOneAccSelected && b.get("/api/accounting/" + a.selectedAccounts[0].id).success(function(b) {
            if (a.data = b, b.mode) {
                a.mode = b.mode, a.slipType = b.slipType, a.taxScheme = b.tax_scheme,
                    a.license = b.license, a.printing = b.printing ? !0 : !1, a.sms = b.sms ? !0 : !1, a.parimatch = b.parimatch,
                    a.can_create_accs = !!b.can_create_accs, a.canChangeAccs = !!b.can_permit_to_create_accs && a.selectedAccounts[0].id !== g || 1 === g,
                    a.can_edit_min_max = !!b.can_edit_min_max, a.haveMinMaxPermission = !!b.can_permit_to_edit_minmax && a.selectedAccounts[0].id !== g || 1 === g,
                    a.haveBetsLimitsPermission = 1 === g, a.can_edit_bets_limits = !!b.can_edit_bets_limits,
                    a.dont_restrict_cashiers_number = !!b.dont_restrict_cashiers_number, a.can_cancel_bets = !!b.can_cancel_bets,
                    a.can_edit_jackpots = !!b.can_edit_jackpots, a.can_edit_presets = !!b.can_edit_presets,
                    a.dont_show_devices = !!b.dont_show_devices, a.restrict_kz = !!b.restrict_kz, a.turn_off_multilogin = !!b.turn_off_multilogin,
                    a.domain_restriction = b.domain_restriction, a.texas_pin_code = !!b.texas_pin_code, a.lima_rfid = !!b.lima_rfid,
                    a.cashier_session = !!b.cashier_session, a.remove_all_tabs = !!b.remove_all_tabs, a.no_additional_windows = !!b.no_additional_windows,
                    a.lima_slip_type = b.lima_slip_type, a.betsCount = b.bets_count, a.betsVolume = b.bets_volume,
                    a.cashdeskProfit = b.cashdesk_profit, a.payout_limit = b.payout_limit;
                var c = b.bets_phones ? b.bets_phones.split(";") : [];

                if (a.phone0 = c.length > 0 ? c[0].replace("+", "") : "", a.phone1 = c.length > 1 ? c[1].replace("+", "") : "",
                        a.phone2 = c.length > 2 ? c[2].replace("+", "") : "", a.slipTypes = b.slipTypes, _.forEach(a.data.licenses, function(b) {
                        b.available || (b.name = b.name + " - " + a.locale.not_available)
                    }), a.betsSoftLimit = b.bets_softlimit || "",
                        a.minSoftLimit = b.minSoftLimit || "", "" !== a.betsSoftLimit && a.minSoftLimit) {
                    var d = parseInt(a.betsSoftLimit);

                    a.alertSoftLimit = !_.isFinite(d) || d < a.minSoftLimit
                }
            }
        })
    }

    function e() {
        if (a.isOneAccSelected) {
            var c = "YYYY-MM-DDTHH:mm:ss",
                d = "?start=" + a.start.format(c) + "&end=" + a.end.format(c) + "&tz=" + a.tz;

            b.get("/api/accounting/" + a.selectedAccounts[0].id + "/operations" + d).success(function(b) {
                a.operations = b;
                var c = 0,
                    d = 0;
                _.forEach(b, function(a) {
                    a.amount > 0 ? c += a.amount : d += a.amount;

                }), a.totalIn = c, a.totalOut = d, f()
            })
        }
    }

    function f() {
        if (a.operations) {
            var b = a.operations;

            if (0 != a.fltOperType) {
                var c = a.fltOperType;
                b = _.filter(b, function(a) {
                    return a.op_type == c;

                })
            }
            var d = a.pager;
            d.total = Math.ceil(b.length / d.size) || 1, a.filteredOps = b.slice((d.current - 1) * d.size, d.current * d.size);

        }
    }
    a.section = "balance";
    var g = parseInt(c.get("user.account"));
    a.isSuperAdmin = 1 === g,
        a.$on("accounts_updated", function() {
            d(), e()
        }), d(), a.refresh = function() {
        d(), e()
    }, a.changeMode = function() {
        var c = a.mode;
        b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-mode", {
            mode: c
        }).success(function(b) {
            "success" === b && (a.data.mode = c), a.modeResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.modeResult = ""
                })
            }, 3e3)
        })
    }, a.changeTaxScheme = function() {
        var c = a.taxScheme;

        b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-tax-scheme", {
            tax: c
        }).success(function(b) {
            "success" === b && (a.data.tax_scheme = c), a.taxResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.taxResult = ""
                })
            }, 3e3)
        })
    }, a.changeLicense = function() {
        var c = a.license;
        b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-license", {
            license: c
        }).success(function(b) {
            "success" === b && (a.data.license = c), a.licenseResult = b,
                setTimeout(function() {
                    a.$apply(function() {
                        a.licenseResult = ""
                    })
                }, 3e3)
        })
    }, a.changeSetting = function(c, d) {
        var e = a[c];
        b.post("/api/accounting/" + a.selectedAccounts[0].id + d, {
            value: e
        }).success(function(b) {
            "success" === b ? a.data[c] = e : (a.operationResult = b, setTimeout(function() {
                    a.$apply(function() {
                        a.operationResult = ""
                    })
                }, 5e3))
        })
    }, a.changeSlipType = function() {
        var c = a.slipType;
        b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-slip-type", {
            value: c
        }).success(function(b) {
            "success" === b ? (a.data.slipType = c, document.location.reload()) : (a.operationResult = b,
                    setTimeout(function() {
                        a.$apply(function() {
                            a.operationResult = ""
                        })
                    }, 5e3))
        })
    }, a.changeLimaSlipType = function() {
        var c = parseInt(a.lima_slip_type) || 0;
        b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-lima-slip-type", {
            value: c
        }).success(function(b) {
            "success" === b ? a.data.lima_slip_type = c : (a.operationResult = b,
                    setTimeout(function() {
                        a.$apply(function() {
                            a.operationResult = ""
                        })
                    }, 5e3))
        })
    }, a.changeSettings = function() {
        a.mode !== a.data.mode && a.changeMode(), a.slipType !== a.data.slipType && a.changeSlipType(),
        a.taxScheme !== a.data.tax_scheme && a.changeTaxScheme(), a.license !== a.data.license && a.changeLicense(), !a.printing != !a.data.printing && a.changeSetting("printing", "/change-printing"), !a.sms != !a.data.sms && a.changeSetting("sms", "/change-sms"),
        a.parimatch != a.data.parimatch && a.changeSetting("parimatch", "/change-parimatch"), !a.can_create_accs != !a.data.can_create_accs && a.changeSetting("can_create_accs", "/change-accounts"), !a.can_edit_min_max != !a.data.can_edit_min_max && a.changeSetting("can_edit_min_max", "/change-minmax-permission"), !a.texas_pin_code != !a.data.texas_pin_code && a.changeSetting("texas_pin_code", "/change-texas-pin"), !a.lima_rfid != !a.data.lima_rfid && a.changeSetting("lima_rfid", "/change-lima-rfid"), !a.cashier_session != !a.data.cashier_session && a.changeSetting("cashier_session", "/change-cashier-session"), !a.remove_all_tabs != !a.data.remove_all_tabs && a.changeSetting("remove_all_tabs", "/change-remove-all-tabs"), !a.no_additional_windows != !a.data.no_additional_windows && a.changeSetting("no_additional_windows", "/change-no-additional-windows"),
        a.lima_slip_type != a.data.lima_slip_type && a.changeLimaSlipType(), !a.can_edit_bets_limits != !a.data.can_edit_bets_limits && a.changeSetting("can_edit_bets_limits", "/change-bets-limits-permission"), !a.dont_restrict_cashiers_number != !a.data.dont_restrict_cashiers_number && a.changeSetting("dont_restrict_cashiers_number", "/change-cashiers-number"), !a.can_cancel_bets != !a.data.can_cancel_bets && a.changeSetting("can_cancel_bets", "/change-cancel-bets-permission"), !a.can_edit_jackpots != !a.data.can_edit_jackpots && a.changeSetting("can_edit_jackpots", "/change-edit-jackpots-permission"), !a.dont_show_devices != !a.data.dont_show_devices && a.changeSetting("dont_show_devices", "/change-show-devices"), !a.can_edit_presets != !a.data.can_edit_presets && a.changeSetting("can_edit_presets", "/change-edit-presets-permission"), !a.restrict_kz != !a.data.restrict_kz && a.changeSetting("restrict_kz", "/change-restrict-kz"), !a.turn_off_multilogin != !a.data.turn_off_multilogin && a.changeSetting("turn_off_multilogin", "/change-turn-off-multilogin"),
        a.domain_restriction != a.data.domain_restriction && a.changeSetting("domain_restriction", "/change-domain-restriction"),
        a.payout_limit != a.data.payout_limit && a.changeSetting("payout_limit", "/change-payout-limit");

    }, a.numRegExp = /^[0-9]+\.?[0-9]{0,4}$/, a.onChangeSoftLimit = function() {
        if ("" !== a.betsSoftLimit && a.minSoftLimit) {
            var b = parseInt(a.betsSoftLimit);
            a.alertSoftLimit = !_.isFinite(b) || b < a.minSoftLimit;

        }
    }, a.changeBets = function() {
        if (!a.alertSoftLimit) {
            a.phones = [];
            var c = a.phone0 + ";" + a.phone1 + ";" + a.phone2;

            ";;" === c && (c = ""), b.post("/api/accounting/" + a.selectedAccounts[0].id + "/change-bet-settings", {
                count: a.betsCount,
                volume: a.betsVolume,
                profit: a.cashdeskProfit,
                softlimit: a.betsSoftLimit,
                phones: c
            }).success(function(b) {
                if ("success" === b.result && (a.data.bets_count = a.betsCount,
                        a.data.bets_volume = a.betsVolume, a.data.cashdesk_profit = a.cashdeskProfit), "error" === b.result && "invalid_phones" === b.reason) {
                    var c = b.phones;
                    a.phone0 = c.length > 0 ? c[0].rawInput.replace("+", "") : "", a.phone1 = c.length > 1 ? c[1].rawInput.replace("+", "") : "",
                        a.phone2 = c.length > 2 ? c[2].rawInput.replace("+", "") : "", a.phones = c
                }
                a.betResult = b.result,
                    setTimeout(function() {
                        a.$apply(function() {
                            a.betResult = ""
                        })
                    }, 3e3)
            })
        }
    }, a.digitsRegexp = /^\d+$/,
        a.openMoneyPrompt = function(b) {
            a.transferAction = b, a.showMoneyPrompt = !0, a.sum = "", a.transferResult = "";

        }, a.closeMoneyPrompt = function() {
        a.transferAction = "", a.showMoneyPrompt = !1, a.sum = "",
            a.transferResult = ""
    }, a.transfer = function() {
        return a.sum ? void b.post("/api/accounting/" + a.selectedAccounts[0].id + "/transfer", {
                action: a.transferAction,
                sum: a.sum
            }).success(function(b) {
                a.transferResult = b, "success" === b && setTimeout(d, 1e3);

            }) : void(a.transferResult = "empty_sum")
    }, a.$watch("data.mode", function(a, b) {
        a !== b && "credit" !== a && e();

    }), a.fltOperType = 0, a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && a.data && "credit" !== a.data.mode && e();

    }), a.pager = {
        size: c.getTemp("history.accounting.pager_size") || 50,
        current: 1,
        total: 0
    }, a.next = function() {
        a.pager.current < a.pager.total && a.pager.current++, f()
    }, a.prev = function() {
        a.pager.current > 1 && a.pager.current--, f()
    }, a.$watch("pager.size + fltOperType", function(b, d) {
        d != b && (c.setTemp("history.accounting.pager_size", a.pager.size), a.pager.current = 1,
            f())
    }), a.translate = function(b) {
        if (b) {
            var c, d = b.match(/([0-9-]+)/gi),
                e = b[0].toLowerCase();

            return "в" === e && d.length >= 3 && (c = a.locale.oper_v.replace("X", d[0]), c = c.replace("Y", d[1]),
                c = c.replace("Z", d[2])), ("п" === e || "с" === e) && d.length >= 2 && (c = a.locale["п" === e ? "oper_p" : "oper_s"].replace("X", d[0]),
                c = c.replace("Y", d[1])), c
        }
    }
};
AccountingCtrl.$inject = ["$scope", "$http", "storage"],
    function() {
        "use strict";

        function a(a, b) {
            function c() {
                a.isReportReady = !1;
                var c = _.pluck(a.selectedAccounts, "id").join(",");

                if (c) {
                    var f = "YYYY-MM-DDTHH:mm:ss";
                    e.reportParams = {
                        account: c,
                        tz: a.tz,
                        start: a.start.format(f),
                        end: a.end.format(f)
                    }, b.post("/api/activity", e.reportParams).success(function(b) {
                        a.reportData = b,
                            d(), a.isReportReady = !0
                    })
                }
            }

            function d() {
                if (a.reportData) {
                    var b, c = a.reportData,
                        d = a.filter;

                    d.category && (b = d.category, c = _.filter(c, function(a) {
                        return a.category == b
                    })), a.filtered = c;

                }
            }
            var e = this;
            a.$watch("start + end + tz", function() {
                a.start && a.end && !isNaN(a.tz) && c();

            }), a.$on("accounts_updated", function() {
                a.isReportReady = !1
            }), a.$on("accounts_updated_delayed", function() {
                c()
            }), a.refresh = function() {
                c()
            }, a.filter = {
                category: ""
            }, a.$watch("filter.category", function() {
                d()
            })
        }
        angular.module("cashier").controller("activityController", a), a.$inject = ["$scope", "$http"];

    }();
var CafeMoneyController = function(a, b) {
    function c() {
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                f = "?account=" + c + "&start=" + a.start.format(d) + "&end=" + a.end.format(d);

            b.get("/api/cafe/money" + f).success(function(b) {
                a.reportData = b.report, a.mainCurrency = b.currency,
                    e()
            })
        }
    }

    function d() {
        b.get("/api/cafe/exchange-rates").success(function(b) {
            a.currencies = b;

            var c = {};
            _.forEach(b, function(a) {
                c[a.code] = a.rate
            }), a.rates = c
        })
    }

    function e() {
        for (var b = 0, c = 0, d = 0, e = a.reportData.length; e > d; d++) {
            var f = a.reportData[d];
            f.currency !== a.mainCurrency ? (f.money_in_unified = f.money_in * a.rates[f.currency] / a.rates[a.mainCurrency],
                    f.money_out_unified = f.money_out * a.rates[f.currency] / a.rates[a.mainCurrency], b += f.money_in_unified,
                    c += f.money_out_unified) : (b += f.money_in, c += f.money_out)
        }
        a.totalIn = b, a.totalOut = c
    }
    a.mode = "list",
        d(), a.$watch("start + end", function() {
        a.start && a.end && c()
    }), a.$on("accounts_updated", function() {
        c()
    }), a.$watch("mainCurrency", function() {
        a.reportData && a.rates && e()
    })
};
CafeMoneyController.$inject = ["$scope", "$http"];

var CafeUsersController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/cafe/" + a.selectedAccounts[0].id + "/users").success(function(b) {
            a.users = b, a.registerFrom = _.uniq(_.pluck(b, "register_from")).sort(), a.pager.current = 1,
                a.sortBy(), d()
        })
    }

    function d() {
        if (a.users) {
            var b, c = a.users;
            if (a.filter.id && (b = a.filter.id,
                    c = _.filter(c, function(a) {
                        return -1 !== (a.id + "").indexOf(b)
                    })), a.filter.name && (b = a.filter.name.toLowerCase(),
                    c = _.filter(c, function(a) {
                        return -1 !== a.name.toLowerCase().indexOf(b)
                    })), a.filter.from && (b = a.filter.from,
                    c = _.filter(c, function(a) {
                        return a.register_from === b
                    })), a.filter.referral && (b = a.filter.referral,
                    c = _.filter(c, function(a) {
                        return -1 !== (a.ref_id + "").indexOf(b)
                    })), "any" !== a.filter.last_login) {
                switch (a.filter.last_login) {
                    case "last_hour":
                        b = 60;
                        break;
                    case "last_24_hour":
                        b = 1440;
                        break;
                    case "last_week":
                        b = 10080;
                        break;
                    default:
                        b = -1
                }
                c = _.filter(c, function(a) {
                    return "number" == typeof a.elapsed && a.elapsed <= b;

                })
            }
            a.filteredCount = c.length;
            var d = a.pager;
            d.total = Math.ceil(c.length / d.size) || 1, a.filtered = c.slice((d.current - 1) * d.size, d.current * d.size);

        }
    }
    a.mode = "list", a.pager = {
        size: 20,
        current: 1,
        total: 0
    }, a.$on("accounts_updated", function() {
        c()
    }), c(), a.filter = {
        id: "",
        name: "",
        last_login: "any",
        from: "",
        referral: ""
    }, a.clearFilters = function() {
        a.filter.id = "", a.filter.name = "", a.filter.parent = "", a.filter.note = "", a.filter.last_login = "any";

    }, a.$watch("filter.id + filter.name + filter.from + filter.referral + filter.last_login", function() {
        a.pager.current = 1, d()
    }), a.next = function() {
        a.pager.current < a.pager.total && a.pager.current++,
            d()
    }, a.prev = function() {
        a.pager.current > 1 && a.pager.current--, d()
    }, a.sortOptions = {
        field: "last_login",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.users.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "balance" === e && (f = "number" == typeof f ? f : -1,
                g = "number" == typeof g ? g : -1), "last_login" === e && (f = "string" == typeof f ? f : "0", g = "string" == typeof g ? g : "0"),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        }), b && d()
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;

        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : ""
    }
};
CafeUsersController.$inject = ["$scope", "$http"];

var CashdeskController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/cashdesks/" + a.selectedAccounts[0].id).success(function(b) {
            a.cashdesks = b
        })
    }
    a.mode = "list", a.$on("accounts_updated", function() {
        c(), a.cancel()
    }),
        c(), a.digitsRegexp = /^[0-9]*\.?[0-9]*$/, a.showForm = function(b, c) {
        a.cashdesk = c, "reset" === b ? c.balance >= 0 ? (a.mode = "sub",
                    a.sum = c.balance) : (a.mode = "add", a.sum = -c.balance) : a.mode = b
    }, a.cancel = function() {
        a.mode = "list",
            a.sum = "", a.result = ""
    }, a.transfer = function() {
        return a.sum ? (a.sum = parseFloat((a.sum + "").replace(",", ".")),
                "sub" === a.mode && a.cashdesk.balance - a.sum <= -1e5 ? void(a.result = "not_enough_funds") : void b.post("/api/cashdesks/" + a.selectedAccounts[0].id + "/transfer", {
                        action: a.mode,
                        cashdeskId: a.cashdesk.cd,
                        sum: a.sum
                    }).success(function(b) {
                        a.result = b,
                        "success" === b && ("sub" === a.mode ? a.cashdesk.balance -= a.sum : a.cashdesk.balance += a.sum);

                    })) : void(a.result = "empty_sum")
    }
};
CashdeskController.$inject = ["$scope", "$http"];
var CommunityJackpotController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/community-jackpots/" + a.selectedAccounts[0].id).success(function(b) {
            a.jackpots = b.data, a.presets = b.presets
        })
    }

    function d(b) {
        "ok" === b.status ? (c(), a.mode = "list") : (a.serverError = b.message || "error",
                setTimeout(function() {
                    a.$apply(function() {
                        a.serverError = ""
                    })
                }, 3e3))
    }

    function e() {
        a.jackpot.name && a.$apply(function() {
            b.get("/api/community-jackpots/" + a.selectedAccounts[0].id + "/check/" + encodeURIComponent(a.jackpot.name)).success(function(b) {
                a.validName = !b.exists
            })
        })
    }
    a.mode = "list", a.$on("accounts_updated", function() {
        c(), a.cancel();

    }), c(), a.create = function() {
        a.jackpot = {
            timeout: 0,
            timeout_before: 0,
            deal_type: 1
        }, a.validName = !0,
            a.mode = "create"
    }, a.edit = function(b) {
        a.oldName = b.name, a.jackpot = _.clone(b), a.validName = !0,
            a.mode = "edit"
    }, a.cancel = function() {
        a.jackpot = null, a.oldName = null, a.mode = "list"
    }, a.save = function() {
        if (a.validName) {
            var c = a.jackpot;
            b.post("/api/community-jackpots/" + a.selectedAccounts[0].id + "/save", {
                jackpot: c
            }).success(d)
        }
    }, a["delete"] = function() {
        b.post("/api/community-jackpots/" + a.selectedAccounts[0].id + "/delete", {
            jackpot: a.jackpot
        }).success(d)
    }, a.saveAsTemplate = function() {
        var c = a.jackpot;
        b.post("/api/community-jackpots/save-as-template", {
            jackpot: c
        }).success(d)
    }, a.applyPreset = function(b) {
        b.data.template_id = b.id, a.edit(b.data);

    }, a.editAccumulation = function(b) {
        a.hasRoleAdmin && (a.editableJackpotName = b)
    }, a.submitAccumulation = function(c) {
        b.post("/api/community-jackpots/" + a.selectedAccounts[0].id + "/edit-accumulation", {
            jackpot: c
        }).success(function(b) {
            "ok" === b.status && (a.editableJackpotName = "")
        })
    }, a.showReorderPage = function() {
        a.stack = [null, null, null, null, null, null], _.forEach(a.jackpots, function(b) {
            b.jp_id >= 0 && b.jp_id <= 5 && (a.stack[b.jp_id] = b);

        }), a.mode = "reorder"
    }, a.handleJPDrop = function(b, c) {
        var d = parseInt(b.replace("jp-", ""), 10),
            e = parseInt(c.replace("jp-", ""), 10),
            f = a.stack,
            g = f[d];

        g && (f[d] = f[e], f[e] = g, a.stack = f)
    }, a.saveOrder = function() {
        for (var c = [], e = 0, f = a.stack.length; f > e; e++) {
            var g = a.stack[e];
            g && c.push([g.id, e])
        }
        b.post("/api/community-jackpots/" + a.selectedAccounts[0].id + "/reorder", {
            order: c
        }).success(d)
    }, a.validName = !0;
    var f = _.debounce(e, 500);
    a.$watch("jackpot.name", function(b) {
        b && b !== a.oldName && f()
    })
};
CommunityJackpotController.$inject = ["$scope", "$http"];
var DeviceEditorCtrl = function(a, b, c) {
    function d() {
        if (a.isOneAccSelected) {
            var c = a.deviceLogin ? "/" + a.deviceLogin : "";
            b.get("/api/settings/" + a.selectedAccounts[0].id + "/device-settings" + c + "?nobase").success(function(b) {
                a.groupSettings = b.group, a.deviceSettings = b.device, f()
            })
        }
    }

    function e() {
        a.isOneAccSelected && b.get("/api/settings/" + a.selectedAccounts[0].id + "/client-presets").success(function(b) {
            a.presets = b
        })
    }

    function f() {
        var b = {};
        b = a.deviceLogin ? _.assign(b, a.deviceSettings) : _.assign(b, a.groupSettings),
            a.settings = b, a.selectedPreset = {
            value: a.settings.preset || "none"
        }
    }

    function g() {
        var b;

        return b = a.settings.preset && j && j === a.selectedPreset.value ? h(a.presetSettings, a.newSettings) : a.settings;

    }

    function h(a, b) {
        var c = _.cloneDeep(b);
        return "undefined" == typeof a ? c : (_.forOwn(c, function(b, d) {
                _.isEqual(b, a[d]) || "" === b || _.isArray(b) && 0 === c[d].length ? delete c[d] : _.isObject(b) && !_.isArray(b) && (c[d] = h(a[d], b),
                    "" === c[d] && delete c[d])
            }), _.isEmpty(c) ? "" : c)
    }

    function i(a) {
        return a.preset && (delete a.preset,
            delete a.eco, delete a.lobby_listed_icons, delete a.slots_bets), a
    }
    a.section = "preset",
        a.deviceLogin = c.device, a.$on("accounts_updated", function() {
        a.section = "preset", a.selectedPreset = {
            value: "none"
        }, a.presets = []
    }), a.$on("accounts_updated_delayed", function() {
        d(), e()
    }),
        d(), e(), a.backBrowser = function() {
        window.history.back()
    };
    var j = "";
    a.loadPresetSettings = function() {
        a.section = "settings", a.settings.preset && a.settings.preset !== j && (a.presetSettings = null,
            a.presetOptions = null, a.isLoadingSettings = !0, a.resultNotAllowed = !1, b.get("/api/settings/" + a.selectedAccounts[0].id + "/preset-settings/" + a.settings.preset).success(function(b) {
            if (a.isLoadingSettings = !1, "not_allowed" === b.result) return void(a.resultNotAllowed = !0);

            a.presetSettings = b.settings, a.presetOptions = b.options, j = a.settings.preset;
            var c = a.settings,
                d = {
                    preset: c.preset,
                    slots_bets: {
                        "": {
                            bet: _.clone(_.get(c, 'slots_bets[""].bet')),
                            max_win: _.get(c, 'slots_bets[""].max_win')
                        }
                    },
                    eco: c.eco,
                    lobby_listed_icons: c.lobby_listed_icons
                };
            d.slots_bets[""].bet || (d.slots_bets[""].bet = _.clone(_.get(b.settings, 'slots_bets[""].bet')) || [10, 50, 100, 200, 300, 400, 500, 1e3, 2e3, 5e3, 1e4, 2e4]),
            d.slots_bets[""].max_win || (d.slots_bets[""].max_win = _.get(b.settings, 'slots_bets[""].max_win', null)),
            d.eco || (d.eco = b.settings.eco), d.lobby_listed_icons || (d.lobby_listed_icons = b.settings.lobby_listed_icons),
                a.newSettings = d
        }))
    }, a.addToBetArray = function() {
        var b = parseInt(a.rangeNum);
        b && b >= 0 && 1e6 >= b && -1 == a.newSettings.slots_bets[""].bet.indexOf(b) && (a.newSettings.slots_bets[""].bet.push(b),
            a.newSettings.slots_bets[""].bet.sort(function(a, b) {
                return a - b
            })), a.rangeNum = ""
    },
        a.removeFromBetArray = function(b) {
            a.newSettings.slots_bets[""].bet.splice(a.newSettings.slots_bets[""].bet.indexOf(b), 1);

        }, a.calcDiff = function() {
        a.resultSettings = JSON.stringify(g()), a.section = "result"
    },
        a.startGameEditor = function() {
            a.section = "game_editor", a.featured = _.uniq(a.newSettings.lobby_listed_icons.split(",")),
                a.allGames = _.clone(a.featured).sort()
        }, a.saveSettings = function() {
        var c = a.deviceLogin || null,
            d = g();

        b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-settings/save", {
            settings: d,
            accId: a.selectedAccounts[0].id,
            device: c
        }).success(function(b) {
            "success" === b && (a.deviceLogin ? a.deviceSettings = d : a.groupSettings = d),
                a.settingsResult = b.result ? b.result : b, setTimeout(function() {
                a.$apply(function() {
                    a.settingsResult = "";

                })
            }, 3e3)
        })
    }, a.switchTo = function(b) {
        a.section = b
    }, a.handleGameDrop = function(b, c) {
        c = c || "";

        var d;
        if (0 === b.indexOf("univ-game") && 0 === c.indexOf("top-univ-game")) {
            d = b.replace("univ-game-", "");

            var e = parseInt(c.replace("top-univ-game-", ""));
            if (!d) return;
            if (-1 !== a.featured.indexOf(d)) return;

            a.featured[e] = d, a.newSettings.lobby_listed_icons = a.featured.join(",")
        }
        if (0 === b.indexOf("top-univ-game") && 0 === c.indexOf("top-univ-game")) {
            var f = parseInt(b.replace("top-univ-game-", "")),
                g = parseInt(c.replace("top-univ-game-", ""));

            if (f === g || !a.featured[f]) return;
            var h = a.featured[g];
            a.featured[g] = a.featured[f], a.featured[f] = h,
                a.newSettings.lobby_listed_icons = a.featured.join(",")
        }
    }, a.addGame = function(b) {
        a.featured.length >= a.allGames.length || -1 === a.featured.indexOf(b) && (a.featured.push(b),
            a.newSettings.lobby_listed_icons = a.featured.join(","))
    }, a.removeGame = function(b) {
        _.remove(a.featured, function(a) {
            return a === b
        }), a.newSettings.lobby_listed_icons = a.featured.join(",");

    }, a.onChangePreset = function(b) {
        b ? (a.presetLobbyPreview = "preset_lobby_" + b.lobby, a.settings = {
                preset: b.slug
            }) : (a.presetLobbyPreview = "", a.settings = i(a.settings), a.selectedPreset = {
                value: a.settings.preset || "none"
            })
    }, a.updateSpinspack = function() {
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-settings/update-spinspack").success(function(b) {
            a.settingsResult = b.result ? b.result : b, setTimeout(function() {
                a.$apply(function() {
                    a.settingsResult = "";

                })
            }, 3e3)
        })
    }
};
DeviceEditorCtrl.$inject = ["$scope", "$http", "$routeParams"];
var JackpotController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/jackpots/" + a.selectedAccounts[0].id).success(function(b) {
            a.jackpots = b.data, a.presets = b.presets
        })
    }

    function d(b) {
        "ok" === b.status ? (c(), a.mode = "list") : (a.serverError = b.message || "error",
                setTimeout(function() {
                    a.$apply(function() {
                        a.serverError = ""
                    })
                }, 3e3))
    }
    a.mode = "list",
        a.$on("accounts_updated", function() {
            c(), a.cancel()
        }), c(), a.create = function() {
        a.jackpot = {
            color: 1,
            rate: 1,
            next_rate: .25,
            enabled: !0
        }, a.mode = "create"
    }, a.edit = function(b) {
        a.jackpot = _.clone(b),
            a.jackpot.enabled = !!a.jackpot.enabled, a.mode = "edit"
    }, a.cancel = function() {
        a.jackpot = null,
            a.mode = "list"
    }, a.applyPreset = function(b) {
        b.data.template_id = b.id, a.edit(b.data)
    },
        a.save = function() {
            var c = a.jackpot;
            b.post("/api/jackpots/" + a.selectedAccounts[0].id + "/save", {
                jackpot: c
            }).success(d)
        }, a["delete"] = function() {
        b.post("/api/jackpots/" + a.selectedAccounts[0].id + "/delete", {
            jackpot: a.jackpot
        }).success(d)
    }, a.toggle = function() {
        b.post("/api/jackpots/" + a.selectedAccounts[0].id + "/toggle", {
            jackpot: a.jackpot
        }).success(d)
    }, a.saveAsTemplate = function() {
        var c = a.jackpot;
        b.post("/api/jackpots/save-as-template", {
            jackpot: c
        }).success(d)
    }, a.editableJackpotName = "none", a.editAccumulation = function(b) {
        a.hasRoleAdmin && (a.editableJackpotName = b)
    }, a.submitAccumulation = function(c) {
        b.post("/api/jackpots/" + a.selectedAccounts[0].id + "/edit-accumulation", {
            jackpot: c
        }).success(function(b) {
            "ok" === b.status && (a.editableJackpotName = "none")
        });

    }
};
JackpotController.$inject = ["$scope", "$http"];
var LoginController = function(a, b) {
    a.error = !1, a.user = "", a.password = "", a.captcha = "", a.setCaptcha = function(b) {
        a.captcha = b;

    }, a.submit = function() {
        (!a.useCaptcha || a.captcha) && b.post("/api/login", {
            user: a.user,
            password: a.password,
            captcha: a.captcha
        }).success(function(b) {
            if (b.error) {
                if (a.captcha) {
                    a.captcha = "";
                    var c = $("#captchaContainer iframe"),
                        d = c[0].src;
                    c[0].src = "", setTimeout(function() {
                        c[0].src = d
                    }, 100)
                }
                a.error = !0, b.captcha && (a.useCaptcha = !0)
            } else a.error = !1, a.$emit("auth/logged_in", b);

        })
    }
};
LoginController.$inject = ["$scope", "$http"];
var LoginExtController = function(a, b, c) {
    var d = c.token;
    a.error = !1, b.post("/api/login-external/" + d).success(function(b) {
        b.error ? a.error = !0 : (a.error = !1,
                a.$emit("auth/logged_in", b))
    })
};
LoginExtController.$inject = ["$scope", "$http", "$routeParams"];

var MainController = function(a, b) {
    function c(c) {
        var d = c ? "?offset=" + c : "";
        b.get("/api/main/news" + d).success(function(b) {
            b.length || (a.showMore = !1), a.news = a.news.concat(b)
        })
    }
    var d = 0;
    a.news = [], a.showMore = !0,
        c(), a.moreNews = function() {
        d += 10, c(d)
    }, b.get("/api/accounts/path").success(function(b) {
        (105 == b.id || -1 !== b.path.indexOf("/105/")) && (a.msg105Acc = !0)
    })
};
MainController.$inject = ["$scope", "$http"],
    app.controller("NavController", ["$scope", "$location", "$http", "storage", function(a, b, c, d) {
        a.hash = d.get("user.md5"), a.routeIs = function(a) {
            return b.path() === a
        }, a.routeStartWith = function(a) {
            return 0 === b.path().indexOf(a)
        }, a.logout = function() {
            a.$emit("auth/logout")
        }, a.searchQuery = "",
            a.search = function() {
                "" !== a.searchQuery && (b.url("/search/" + encodeURIComponent(a.searchQuery)),
                    a.searchQuery = "", $("#search").blur())
            }, a.switchLanguage = function(a) {
            c.post("/api/locale/" + encodeURIComponent(a)).success(function() {
                document.location.reload(!0)
            })
        }, a.copyToClipboard = function() {
            var b = document.getElementById("input-acc-code");

            b.select();
            try {
                document.execCommand("copy")
            } catch (c) {
                window.prompt("Copy to clipboard: Ctrl/Cmd+C, Enter", a.hash);

            }
        }, a.initHash = function() {
            a.hash = d.get("user.md5");
            var b = document.getElementById("input-acc-code");

            b.select()
        }
    }]),
    function() {
        "use strict";

        function a(a, b) {
            function c() {
                a.isOneAccSelected && b.get("/api/notifications/" + a.selectedAccounts[0].id).success(function(a) {
                    d.phones = a
                })
            }
            var d = this;
            d.mode = "list", c(), a.$on("accounts_updated", function() {
                c(),
                    d.cancel()
            }), d.cancel = function() {
                d.mode = "list", d.phone = null, d.activationLink = null;

            }, d.editPhone = function(c) {
                b.get("/api/notifications/" + a.selectedAccounts[0].id + "/phones/" + c.raw).success(function(a) {
                    d.phone = {
                        number: c.raw,
                        numberPretty: c.pretty,
                        softLimits: a.state.soft_limits,
                        roundLimits: a.state.round_limits,
                        sourceLimits: a.state.source_limits
                    }, d.mode = "edit"
                })
            }, d.saveSubscriptions = function() {
                b.post("/api/notifications/" + a.selectedAccounts[0].id + "/phones/" + d.phone.number, {
                    state: {
                        soft_limits: d.phone.softLimits,
                        round_limits: d.phone.roundLimits,
                        source_limits: d.phone.sourceLimits
                    }
                }).success(function(b) {
                    "success" === b.result ? d.mode = "list" : (d.serverError = b.result,
                            setTimeout(function() {
                                a.$apply(function() {
                                    d.serverError = ""
                                })
                            }, 3e3))
                })
            }, d.deletePhone = function() {
                b.post("/api/notifications/" + a.selectedAccounts[0].id + "/phones/" + d.phone.number + "/delete").success(function(b) {
                    "success" === b.result ? d.refresh() : (d.serverError = b.result, setTimeout(function() {
                            a.$apply(function() {
                                d.serverError = ""
                            })
                        }, 3e3))
                })
            }, d.showAddForm = function() {
                d.newPhone = "", d.sendSms = !1,
                    d.activationLink = "", d.mode = "create"
            }, d.addPhone = function() {
                d.newPhone && b.post("/api/notifications/" + a.selectedAccounts[0].id + "/add-phone", {
                    phone: d.newPhone,
                    sms: d.sendSms
                }).success(function(b) {
                    "success" === b.result ? d.activationLink = b.link : (d.serverError = b.result,
                            setTimeout(function() {
                                a.$apply(function() {
                                    d.serverError = ""
                                })
                            }, 3e3))
                })
            }, d.refresh = function() {
                c(), d.mode = "list"
            }
        }
        angular.module("cashier").controller("NotificationController", a),
            a.$inject = ["$scope", "$http"]
    }();
var PromoCtrl = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/promo/" + a.selectedAccounts[0].id).success(function(b) {
            a.bonuses = b;
            var c = _.findIndex(b, function(a) {
                return 1 === a.b_type
            });
            a.isDefaultActive = -1 !== c;

        })
    }
    a.mode = "list", a.$on("accounts_updated", function() {
        c(), a.backToList()
    }), c(), a.createBonus = function() {
        a.bonus = {
            automatic: 1,
            timewindow: 86400
        }, a.mode = "edit"
    }, a.editBonus = function(b) {
        a.mode = "edit",
            a.bonus = _.clone(b)
    }, a.backToList = function() {
        a.mode = "list", a.bonus = null, a.settingsResult = "";

    }, a.back = function() {
        window.history.back()
    }, a.createDefaultBonuses = function() {
        b.post("/api/promo/" + a.selectedAccounts[0].id + "/create-defaults").success(function(b) {
            a.settingsResult = b, "success" === b && c()
        })
    }, a.save = function() {
        b.post("/api/promo/" + a.selectedAccounts[0].id + "/save", {
            data: a.bonus
        }).success(function(b) {
            a.settingsResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.settingsResult = ""
                })
            }, 3e3)
        })
    }, a["delete"] = function(d) {
        b.post("/api/promo/" + a.selectedAccounts[0].id + "/delete", {
            id: d
        }).success(function() {
            c(), a.mode = "list"
        })
    }
};
PromoCtrl.$inject = ["$scope", "$http"];

var ReportController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/overall", e).success(function(b) {
                a.reportData = b;
                var c = {
                    "in": 0,
                    out: 0,
                    add: 0,
                    sub: 0,
                    delta: 0
                };
                _.forEach(b, function(a) {
                    c["in"] += a.betsPlus, c.out += a.betsMinus,
                        c.add += a.otherPlus, c.sub += -a.otherMinus, c.delta += a.delta
                }), a.totals = c, a.isReportReady = !0;

            })
        }
    }

    function d(a) {
        return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }

    function e(a) {
        return a = Math.round(a / 1e3 * 10) / 10, a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k";

    }

    function f(a) {
        return a = Math.round(10 * a) / 10, a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    }

    function g(a) {
        var b = new Date(a),
            c = (b.getDay() + 6) % 7;
        b.setDate(b.getDate() - c + 3);
        var d = new Date(b.getFullYear(), 0, 4),
            e = (b - d) / 864e5,
            f = 1 + Math.ceil(e / 7);

        return b.getFullYear() + "-" + (f > 9 ? f : "0" + f)
    }

    function h(a) {
        return a.substr(0, 7)
    }

    function i(a, b) {
        var c = [];
        return _.forEach(a, function(a) {
            var d = b(a.date);
            if (0 === c.length || c[c.length - 1].date !== d) c.push({
                date: d,
                betsPlus: a.betsPlus,
                delta: a.delta,
                betsPlusCnt: a.betsPlusCnt
            });
            else {
                var e = c[c.length - 1];

                e.betsPlus = e.betsPlus + a.betsPlus, e.delta = e.delta + a.delta, e.betsPlusCnt = e.betsPlusCnt + a.betsPlusCnt;

            }
        }), c
    }

    function j() {
        var b = [];
        _.forEach(a.reportData, function(a) {
            b.push({
                date: a.date,
                betsPlus: a.betsPlus,
                delta: a.delta,
                betsPlusCnt: a.betsPlusCnt
            })
        }), b.reverse(), b.length > 50 && b.length < 350 && (b = i(b, g)),
        b.length > 350 && (b = i(b, h)), a.chartData = b
    }

    function k() {
        j();
        var b = a.locale,
            c = _.pluck(a.chartData, "date"),
            g = _.pluck(a.chartData, "betsPlus"),
            h = _.pluck(a.chartData, "delta"),
            i = _.pluck(a.chartData, "betsPlusCnt");

        l = new Highcharts.Chart({
            chart: {
                renderTo: "chart-overall",
                zoomType: "xy"
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: c,
                labels: {
                    rotation: 300,
                    align: "right"
                }
            },
            yAxis: [{
                labels: {
                    style: {
                        color: "#4572A7"
                    }
                },
                title: {
                    text: b.yAxisTitle1,
                    style: {
                        color: "#4572A7"
                    }
                }
            }, {
                min: 0,
                title: {
                    text: b.yAxisTitle2,
                    style: {
                        color: "#c42525"
                    }
                },
                labels: {
                    style: {
                        color: "#c42525"
                    }
                },
                opposite: !0
            }],
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: !0,
                        rotation: 300,
                        align: "left",
                        style: {
                            fontWeight: "bold"
                        },
                        formatter: function() {
                            var a = this.series.chart.series;
                            return a[0].visible && a[1].visible && a[1].name === this.series.name ? "" : e(this.y);

                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var a, b = this.series.chart.series;
                    return a = b[2].name === this.series.name ? f(this.y) : d(this.y),
                    this.x + ":<b>" + a + "</b>"
                }
            },
            series: [{
                name: b.seriesName1,
                color: "#2f7ed8",
                type: "column",
                yAxis: 0,
                data: g
            }, {
                name: b.seriesName2,
                color: "#8bbc21",
                type: "column",
                yAxis: 0,
                data: h
            }, {
                name: b.seriesName3,
                color: "#c42525",
                type: "spline",
                yAxis: 1,
                data: i
            }]
        })
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1,
            a.totals = {}
    }), a.$on("accounts_updated_delayed", function() {
        c()
    }), a.$watch("reportData", function() {
        a.reportData && a.reportData.length > 0 && (l && l.destroy(), setTimeout(k, 100))
    });
    var l
};
ReportController.$inject = ["$scope", "$http"];
var Report2NDFLController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var d = _.pluck(a.selectedAccounts, "id").join(",");
        if (d) {
            var e = -Math.round((new Date).getTimezoneOffset() / 60),
                g = parseInt(c.get("history.reports.tz"));

            e = isNaN(g) ? e : g;
            var h = "YYYY-MM-DD";
            f = {
                account: d,
                tz: e,
                start: a.start.format(h),
                end: a.end.format(h)
            }, b.post("/api/reports/2-ndfl", f).success(function(b) {
                a.reportData = b.report, a.yields = b.yields,
                    a.clients = b.clients, a.dates = b.dates, a.applyFilters(), a.isReportReady = !0
            })
        }
    }

    function e(a, b, c, d) {
        var e = document.getElementById("excel-export-form");
        e && e.parentNode.removeChild(e);

        var f = document.createElement("form");
        if (f.id = "excel-export-form", f.action = b, f.method = a,
                f.target = d || "_self", c)
            for (var g in c) {
                var h = document.createElement("textarea");
                h.name = g,
                    h.value = "object" == typeof c[g] ? JSON.stringify(c[g]) : c[g], f.appendChild(h)
            }
        f.style.display = "none",
            document.body.appendChild(f), f.submit()
    }
    a.showDates = !1;
    var f = {};
    a.$watch("start + end", function() {
        a.start && a.end && d()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.tax = function(a) {
        return 0 >= a || "" === a ? "" : Math.round(.13 * a) || ""
    }, a.formatNumberFixed = function(a) {
        return 0 === a ? "0,00" : a ? a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") : "";

    }, a.filter = {
        hideAnonymous: !0
    }, a.applyFilters = function() {
        if (a.reportData) {
            var b = a.reportData,
                c = a.filter;

            c.hideAnonymous && (b = _.filter(b, function(b) {
                return !!a.clients[b.rfid]
            })), a.filtered = b;

        }
    }, a.exportToExcel = function() {
        e("POST", "/api/export/report-2ndfl", f)
    }
};
Report2NDFLController.$inject = ["$scope", "$http", "storage"];

var ReportAccountController = function(a, b, c, d) {
    function e() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD";
            m = {
                account: c,
                tz: a.tz,
                start: a.start.format(d),
                end: a.end.format(d)
            }, b.post("/api/reports/accounts", m).success(function(b) {
                a.rawData = b.report, a.sourceNames = b.sources,
                    a.accList = b.accs, f(), i(), a.sortBy(), a.isReportReady = !0
            })
        }
    }

    function f() {
        for (var b, c, d, e, f = a.rawData, h = {}, i = {}, j = {}, k = {}, l = {}, m = [0, 0, 0, 0], n = f.length; n--;) {
            e = f[n];
            var o = a.accList[e.acc_id][3];
            (!a.isReportReady || a.selCurrencies[o]) && (i[e.source] = !0,
                j[e.acc_id] = !0, b = k[e.source], b = b || [0, 0, 0, 0], b[0] += e.total_in, b[1] += e.delta, b[2] += e.total_out,
                b[3] += e.cnt, k[e.source] = b, c = l[e.acc_id], c = c || [0, 0, 0, 0], c[0] += e.total_in, c[1] += e.delta,
                c[2] += e.total_out, c[3] += e.cnt, l[e.acc_id] = c, m[0] += e.total_in, m[1] += e.delta, m[2] += e.total_out,
                m[3] += e.cnt, d = 0 !== e.total_in ? (e.total_out / e.total_in).toFixed(2) : "-", h[e.acc_id + "_" + e.source] = [e.total_in, e.delta, d, e.cnt]);

        }
        _.forOwn(k, function(a) {
            a[2] = 0 !== a[0] ? (a[2] / a[0]).toFixed(2) : "-"
        }), _.forOwn(l, function(a) {
            a[2] = 0 !== a[0] ? (a[2] / a[0]).toFixed(2) : "-"
        }), m[2] = 0 !== m[0] ? (m[2] / m[0]).toFixed(2) : "-";

        var p = [];
        _.forOwn(i, function(b, c) {
            p.push([c, a.sourceNames[c]])
        });
        var q = [];
        _.forOwn(a.accList, function(a) {
            j[a[0]] && q.push(a)
        }), a.isReportReady || (a.currencies = _.uniq(_.pluck(a.accList, 3)),
            g()), a.reportData = h, a.sources = p, a.accTotals = l, a.srcTotals = k, a.totals = m, a.accs = q
    }

    function g() {
        a.selCurrencies = {};
        for (var b = a.currencies.length - 1; b >= 0; b--) a.selCurrencies[a.currencies[b]] = !0;

    }

    function h() {
        var b, c = "",
            d = a.reportData,
            e = a.accTotals,
            f = a.accs,
            g = a.pager;
        g.total = Math.ceil(f.length / g.size) || 1,
            f = f.slice((g.current - 1) * g.size, g.current * g.size);
        for (var h, i = 0, l = f.length; l > i; i++) h = f[i][0],
            c += '<tr class="right"><td class="left">' + n(h) + '</td><td class="left">' + f[i][2] + '</td><td class="nowrap">' + k(e[h][0]) + '</td><td class="nowrap">' + k(e[h][1]) + "</td><td>" + e[h][2] + "</td><td>" + e[h][3] + "</td>",
        a.showSources && _.forEach(a.sources, function(a) {
            b = d[h + "_" + a[0]], c += b ? '<td class="nowrap">' + k(b[0]) + '</td><td class="nowrap">' + k(b[1]) + "</td><td>" + b[2] + "</td><td>" + b[3] + "</td>" : "<td></td><td></td><td></td><td></td>";

        }), c += "</tr>";
        j("tbody-report", c)
    }

    function i() {
        var b = "",
            c = a.totals,
            d = a.srcTotals;
        b += '<tr class="right bold success"><td colspan="2"><b>' + a.locale.total + ':</b></td><td class="nowrap">' + k(c[0]) + '</td><td class="nowrap">' + k(c[1]) + "</td><td>" + c[2] + "</td><td>" + c[3] + "</td>",
        a.showSources && _.forEach(a.sources, function(a) {
            b += '<td class="nowrap">' + k(d[a[0]][0]) + '</td><td class="nowrap">' + k(d[a[0]][1]) + "</td><td>" + d[a[0]][2] + "</td><td>" + d[a[0]][3] + "</td>";

        }), b += "</tr>", j("tbody-totals", b)
    }

    function j(a, b) {
        var c = document.getElementById(a);

        c.innerHTML = b
    }

    function k(a) {
        return 0 === a ? "0,00" : a ? a.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",") : "";

    }

    function l(a, b, c, d) {
        var e = document.getElementById("excel-export-form");
        e && e.parentNode.removeChild(e);

        var f = document.createElement("form");
        if (f.id = "excel-export-form", f.action = b, f.method = a,
                f.target = d || "_self", c)
            for (var g in c) {
                var h = document.createElement("textarea");
                h.name = g,
                    h.value = "object" == typeof c[g] ? JSON.stringify(c[g]) : c[g], f.appendChild(h)
            }
        f.style.display = "none",
            document.body.appendChild(f), f.submit()
    }
    a.showSources = !1;
    var m = {},
        n = d.getFullPath;

    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && e()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        e()
    }), a.toggleSources = function() {
        a.showSources = !a.showSources, i(), h()
    }, a.pager = {
        size: c.get("history.report.accounts.pager_size") || 50,
        current: 1,
        total: 0
    }, a.next = function() {
        a.pager.current < a.pager.total && (a.pager.current++,
            h())
    }, a.prev = function() {
        a.pager.current > 1 && (a.pager.current--, h())
    }, a.$watch("pager.size", function(b, d) {
        d != b && (c.set("history.report.accounts.pager_size", b), a.pager.current = 1, h())
    }), a.filterByCurrency = function() {
        a.pager.current = 1, f(), i(), h()
    }, a.sortOptions = JSON.parse(c.getTemp("history.reports.accounts.sort")) || {
            field: "",
            src: "",
            order: ""
        }, a.isSortedBy = function(b, c) {
        var d = a.sortOptions;
        return d.src === c && d.field === b ? "asc" === d.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.sortBy = function(b, d) {
        var e = a.sortOptions;
        if (void 0 !== b && (e.field === b && e.src === d ? e.order = "asc" === e.order ? "desc" : "asc" : (e.field = b,
                    e.src = d, e.order = "desc"), a.sortOptions = e), "" !== e.field) {
            c.setTemp("history.reports.accounts.sort", JSON.stringify(a.sortOptions));

            var f = function(a, b) {
                    return b > a ? -1 : a > b ? 1 : 0
                },
                g = a.accTotals,
                i = a.reportData,
                j = e.field,
                k = e.src;

            a.accs.sort(function(a, b) {
                var c, d;
                return "acc" === j && (c = a[1], d = b[1]), "totals" === k ? (c = g[a[0]][j],
                        d = g[b[0]][j]) : void 0 !== k && (c = i[a[0] + "_" + k], c = c ? c[j] : -1e12, d = i[b[0] + "_" + k], d = d ? d[j] : -1e12),
                    "asc" === e.order ? f(c, d) : f(d, c)
            })
        }
        h()
    }, a.exportToExcel = function() {
        var b = [],
            c = [];
        _.forOwn(a.selCurrencies, function(a, c) {
            a && b.push(c)
        }), m.currencies = b, _.forOwn(a.accs, function(a) {
            c.push(a[0])
        }), m.account = c.join(","),
            l("POST", "/api/export/report-accounts", m)
    }
};
ReportAccountController.$inject = ["$scope", "$http", "storage", "accounts"],
    function() {
        "use strict";

        function a(a, b, c, d) {
            function e() {
                a.isReportReady = !1;
                var c = _.pluck(a.selectedAccounts, "id").join(",");

                if (c) {
                    var d = "YYYY-MM-DDTHH:mm:ss";
                    f.reportParams = {
                        account: c,
                        tz: a.tz,
                        start: a.start.format(d),
                        end: a.end.format(d)
                    }, b.post("/api/reports/billing-usa", f.reportParams).success(function(b) {
                        a.report = b, a.isReportReady = !0
                    })
                }
            }
            var f = this;
            a.$watch("start + end + tz", function() {
                a.start && a.end && !isNaN(a.tz) && e()
            }), a.$on("accounts_updated", function() {
                a.isReportReady = !1;

            }), a.$on("accounts_updated_delayed", function() {
                e()
            }), a.exportToExcel = function() {
                d.generate("/api/export/report-billing-usa", f.reportParams);

            }, a.format = function(b) {
                return a.report ? "USD" === a.report.currency ? c("formatNumberFixedUSA")(b) : c("formatNumberFixed")(b) : "";

            }
        }
        angular.module("cashier").controller("reportBillingUSAController", a), a.$inject = ["$scope", "$http", "$filter", "excel"];

    }();
var ReportCafeGamesController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;

        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var d = "YYYY-MM-DD",
                f = {
                    account: c,
                    start: a.start.format(d),
                    end: a.end.format(d),
                    step: a.chartStep
                };
            b.post("/api/reports/cafe-games", f).success(function(b) {
                a.reportData = b.reportData;
                var c = {
                    "yield": {},
                    count: 0
                };
                _.forEach(b.reportData, function(a) {
                    c["yield"][a.currency] = c["yield"][a.currency] || 0, c["yield"][a.currency] += a.delta,
                        c.count += a.qty
                }), a.totals = c;
                var d = [];
                _.forOwn(c["yield"], function(a, b) {
                    d.push({
                        currency: b,
                        amount: a
                    })
                }), d.sort(function(a, b) {
                    return b.amount - a.amount
                }), a.currencies = d, a.isReportReady = !0,
                d.length && (a.chartOptions.currency = d[0].currency), a.chartData = b.chartData, e(), a.hasRoleAdmin && j();

            })
        }
    }

    function e() {
        a.chartData && a.chartData.length > 0 && (k && k.destroy(), l && l.destroy(),
            f(), setTimeout(function() {
            h();
            var b = a.chartPieData[0].name;
            g(b), i()
        }, 100))
    }

    function f() {
        if (a.chartData && a.chartData.length) {
            var b = a.chartParam,
                c = a.chartOptions.currency,
                d = {},
                e = 0;

            _.forEach(a.chartData, function(a) {
                a.currency === c && (d[a.name] = d[a.name] || 0, d[a.name] += a[b],
                    e += a[b])
            });
            var f = [],
                g = e / 100,
                h = {
                    name: a.locale.others,
                    sources: "",
                    y: 0
                };
            _.forEach(d, function(a, b) {
                a >= 0 && (a >= g ? f.push([b, a]) : (h.sources += h.sources ? ", " + b : b, h.y += a))
            }), f.sort(function(a, b) {
                return b[1] - a[1]
            }), f[0] && (f[0] = {
                name: f[0][0],
                y: f[0][1],
                sliced: !0,
                selected: !0
            }), f.push(h),
                a.chartPieData = f
        }
    }

    function g(b) {
        var c = {},
            d = a.chartParam,
            e = a.chartOptions.currency;

        _.forEach(a.chartData, function(a) {
            c[a.date] = c[a.date] || {
                    source: 0,
                    other: 0
                }, a.currency === e && (a.name === b ? c[a.date].source = Math.round(10 * a[d]) / 10 : c[a.date].other += Math.round(10 * a[d]) / 10);

        });
        var f = [],
            g = [];
        _.forOwn(c, function(a) {
            f.push(a.source), g.push(a.other)
        }), a.chartStackedData = [{
            name: a.locale.others,
            data: g
        }, {
            name: b,
            data: f
        }]
    }

    function h() {
        var b = a.locale;
        a.chartPieData[a.chartPieData.length - 1].name = b.others,
            k = new Highcharts.Chart({
                chart: {
                    renderTo: "chart-lottery",
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: !1
                },
                title: {
                    text: b.pieTitle + " (<b>" + a.label + "</b>)"
                },
                subtitle: {
                    text: b.pieSubtitle
                },
                tooltip: {
                    formatter: function() {
                        return "<b>" + this.point.name + "</b>" + (this.point.sources ? "(" + this.point.sources + ")" : "") + "<br>" + b.part + ": <b>" + Math.round(10 * this.point.percentage) / 10 + "%</b><br>" + b.sum + ": <b>" + Math.round(10 * this.point.y) / 10 + "</b>" + (this.point.selected || this.point.sources ? "" : "<br>" + b.click);

                    },
                    percentageDecimals: 1
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: !0,
                        cursor: "pointer",
                        dataLabels: {
                            enabled: !0,
                            color: "#000000",
                            connectorColor: "#000000",
                            formatter: function() {
                                return "<b>" + this.point.name + "</b>: " + Math.round(10 * this.percentage) / 10 + " %";

                            }
                        },
                        point: {
                            events: {
                                click: function() {
                                    if (!this.sources) {
                                        var a = this.name;
                                        l && l.destroy(),
                                            setTimeout(function() {
                                                g(a), i()
                                            }, 50)
                                    }
                                }
                            }
                        }
                    }
                },
                series: [{
                    type: "pie",
                    data: a.chartPieData
                }]
            })
    }

    function i() {
        var b = a.locale;
        a.chartStackedData[0].name = b.others;
        var c, d = _.uniq(_.pluck(a.chartData, "date"));

        switch (a.chartStep) {
            case "daily":
                c = b.daily;
                break;
            case "weekly":
                c = b.weekly;
                break;
            case "monthly":
                c = b.monthly
        }
        l = new Highcharts.Chart({
            chart: {
                renderTo: "chart-stacked",
                type: "column"
            },
            title: {
                text: b.stackedTitle + " (" + c + ")"
            },
            xAxis: {
                categories: d,
                labels: {
                    rotation: 300,
                    align: "right"
                }
            },
            yAxis: {
                title: {
                    text: b[a.chartParam]
                },
                stackLabels: {
                    enabled: !0,
                    rotation: 300,
                    align: "right",
                    style: {
                        fontWeight: "bold"
                    },
                    y: -20,
                    formatter: function() {
                        return this.total > 0 ? Math.round(10 * this.total) / 10 : "";

                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return "<b>" + this.series.name + "</b> за " + this.x + "<br/>" + b.sum + ": <b>" + this.y + "</b> (" + Math.round(this.y / this.point.stackTotal * 1e3) / 10 + "%)<br/>" + b.total + ": <b>" + Math.round(10 * this.point.stackTotal) / 10 + "</b>";

                }
            },
            plotOptions: {
                column: {
                    stacking: "normal",
                    dataLabels: {
                        enabled: !1
                    }
                }
            },
            legend: {
                reversed: !0
            },
            series: a.chartStackedData
        })
    }

    function j() {
        b.get("/api/cafe/exchange-rates").success(function(b) {
            var c = {};
            _.forEach(b, function(a) {
                c[a.code] = a.rate
            });
            var d = 0,
                e = 0;
            _.forEach(a.currencies, function(a) {
                d += a.amount * (c[a.currency] || 0)
            }), e = d / c.USD, a.totals.totalInRUR = d, a.totals.totalInUSD = e;

        })
    }
    a.chartStep = c.getTemp("history.reports.cafe_games.step") || "daily", a.chartOptions = {
        source: "delta",
        currency: ""
    }, a.$watch("start + end + chartStep", function() {
        if (a.start && a.end) {
            var b = a.start,
                e = a.end,
                f = e.diff(b, "days");
            f > 31 && "daily" === a.chartStep && (a.chartStep = "weekly"),
            f > 210 && "monthly" !== a.chartStep && (a.chartStep = "monthly"), c.setTemp("history.reports.cafe_games.step", a.chartStep),
                d()
        }
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.chartParam = "delta", a.$watch("chartParam + chartOptions.currency", e);
    var k, l;

    a.sortOptions = {
        field: "delta",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "asc" === a.sortOptions.order ? c(f, g) : c(g, f);

        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }
};
ReportCafeGamesController.$inject = ["$scope", "$http", "storage"];
var ReportCafeUsersController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/cafe-users", e).success(function(b) {
                a.rawData = b.report, f(),
                    a.sortBy(), a.isReportReady = !0
            })
        }
    }

    function e(a) {
        return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }

    function f() {
        for (var b, c, d, e = a.rawData, f = _.uniq(_.pluck(e, "username")), g = _.uniq(_.pluck(e, "game_name")), h = {}, i = {}, j = {}, k = [0, 0, 0], l = 0, m = e.length; m > l; l++) b = e[l],
            h[b.username] = h[b.username] || {
                    currency: b.currency
                }, c = i[b.game_name] || [0, 0, 0], c[0] += b.amount,
            c[1] += b.delta, c[2] += b.count, i[b.game_name] = c, d = j[b.username] || [0, 0, 0], d[0] += b.amount,
            d[1] += b.delta, d[2] += b.count, j[b.username] = d, k[0] += b.amount, k[1] += b.delta, k[2] += b.count,
            h[b.username + "_" + b.game_name] = [b.amount, b.delta, b.count];
        a.reportData = h, a.games = g,
            a.userTotals = j, a.gameTotals = i, a.totals = k, a.users = f
    }

    function g() {
        var b, c = "",
            d = a.reportData,
            f = a.userTotals,
            g = a.users,
            i = a.pager;

        i.total = Math.ceil(g.length / i.size) || 1, g = g.slice((i.current - 1) * i.size, i.current * i.size);

        for (var j, k = 0, l = g.length; l > k; k++) j = g[k], c += '<tr class="right"><td class="center">' + j + '</td><td class="center">' + d[j].currency + '</td><td class="nowrap">' + e(f[j][0]) + '</td><td class="nowrap">' + e(f[j][1]) + "</td><td>" + f[j][2] + "</td>",
        a.showSources && _.forEach(a.games, function(a) {
            b = d[j + "_" + a], c += b ? '<td class="nowrap">' + e(b[0]) + '</td><td class="nowrap">' + e(b[1]) + "</td><td>" + b[2] + "</td>" : "<td></td><td></td><td></td>";

        }), c += "</tr>";
        h("tbody-report", c)
    }

    function h(a, b) {
        var c = document.getElementById(a);

        c.innerHTML = b
    }
    a.showSources = !1;
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && d();

    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.toggleSources = function() {
        a.showSources = !a.showSources, g()
    }, a.pager = {
        size: c.get("history.report.accounts.pager_size") || 50,
        current: 1,
        total: 0
    }, a.next = function() {
        a.pager.current < a.pager.total && (a.pager.current++,
            g())
    }, a.prev = function() {
        a.pager.current > 1 && (a.pager.current--, g())
    }, a.$watch("pager.size", function(b, d) {
        d != b && (c.set("history.report.accounts.pager_size", b), a.pager.current = 1, g())
    }), a.sortOptions = JSON.parse(c.getTemp("history.reports.accounts.sort")) || {
            field: "",
            src: "",
            order: ""
        }, a.isSortedBy = function(b, c) {
        var d = a.sortOptions;
        return d.src === c && d.field === b ? "asc" === d.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.sortBy = function(b, d) {
        var e = a.sortOptions;
        if (void 0 !== b && (e.field === b && e.src === d ? e.order = "asc" === e.order ? "desc" : "asc" : (e.field = b,
                    e.src = d, e.order = "desc"), a.sortOptions = e), "" !== e.field) {
            c.setTemp("history.reports.accounts.sort", JSON.stringify(a.sortOptions));

            var f = function(a, b) {
                    return b > a ? -1 : a > b ? 1 : 0
                },
                h = a.userTotals,
                i = a.reportData,
                j = e.field,
                k = e.src;

            a.users.sort(function(a, b) {
                var c, d;
                return "gamer" === j && (c = a, d = b), "currency" === j && (c = i[a].currency,
                    d = i[b].currency), "totals" === k ? (c = h[a][j], d = h[b][j]) : void 0 !== k && (c = i[a + "_" + k], c = c ? c[j] : -1e12,
                        d = i[b + "_" + k], d = d ? d[j] : -1e12), "asc" === e.order ? f(c, d) : f(d, c)
            })
        }
        g()
    }
};
ReportCafeUsersController.$inject = ["$scope", "$http", "storage"];

var ReportCardController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var e = "YYYY-MM-DDTHH:mm:ss",
                f = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(e),
                    end: a.end.format(e)
                };
            b.post("/api/reports/cards", f).success(function(b) {
                a.reportData = b.data, a.totalBalance = b.balance,
                    d(), a.sortBy(), a.isReportReady = !0
            })
        }
    }

    function d() {
        for (var b = 0, c = 0, d = 0, e = 0, f = 0, g = a.reportData.length; g > f; f++) {
            var h = a.reportData[f];
            b += h.sum_in, c += h.sum_out, d += h.sum_tax, e += h.balance
        }
        a.totalIn = b,
            a.totalOut = c, a.totalTax = d, a.totalBalanceForCards = e
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        c()
    }), a.filter = {
        cardId: "",
        gamer: "",
        sumIn: "",
        sumOut: ""
    }, a.filterEntries = function(b) {
        if ("undefined" == typeof b) return !1;

        var c = a.filter;
        return c.cardId && -1 === (b.card_id + "").indexOf(c.cardId) ? !1 : c.gamer && -1 === (b.name.toLowerCase() + b.user_id).indexOf(c.gamer) ? !1 : c.sumIn && b.sum_in < parseInt(c.sumIn, 10) ? !1 : c.sumOut && b.sum_out < parseInt(c.sumOut, 10) ? !1 : !0;

    }, a.sortOptions = {
        field: "sum_in",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "name" === e && (f = b.name.toLowerCase() + b.user_id,
                g = d.name.toLowerCase() + d.user_id), "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }
};
ReportCardController.$inject = ["$scope", "$http"];

var ReportCashierSessionController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var f = "YYYY-MM-DD",
                g = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(f),
                    end: a.end.format(f)
                };
            b.post("/api/reports/sessions", g).success(function(b) {
                a.reportData = b, a.cashiers = _.unique(_.pluck(b, "cashier_name")), _.forEach(a.reportData, function(a) {
                    a.duration = moment.utc(moment(a.time_close).diff(moment(a.time_open))).format("H:mm:ss"),
                        a.income = a.money_out - a.money_in
                }), a.isReportReady = !0, e(), d()
            })
        }
    }

    function d() {
        var b = {
            "in": 0,
            out: 0,
            income: 0
        };
        _.forEach(a.filtered, function(a) {
            b["in"] += parseFloat(a.total_in) || 0,
                b.out += parseFloat(a.total_out) || 0, b.income += a.income
        }), a.totals = b
    }

    function e() {
        if (a.reportData) {
            var b, c = a.reportData;
            a.filter.cashier && (b = a.filter.cashier, c = _.filter(c, function(a) {
                return a.cashier_name === b
            })), a.filtered = c
        }
    }

    function f(a) {
        return a = Math.round(a / 1e3 * 10) / 10,
        a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k"
    }

    function g(a) {
        return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }

    function h() {
        var b = {};
        _.forEach(a.reportData, function(a) {
            b[a.cashier_name] = b[a.cashier_name] || {
                    out: 0,
                    "in": 0,
                    income: 0,
                    name: a.cashier_name
                }, b[a.cashier_name]["in"] += parseFloat(a.total_in) || 0,
                b[a.cashier_name].out += parseFloat(a.total_out) || 0, b[a.cashier_name].income += parseFloat(a.income) || 0;

        }), a.chartData = _.values(b).sort(function(a, b) {
            return b.income - a.income
        })
    }

    function i() {
        h();
        var b = a.locale,
            c = _.pluck(a.chartData, "name"),
            d = _.pluck(a.chartData, "in"),
            e = _.pluck(a.chartData, "out"),
            i = _.pluck(a.chartData, "income");

        j = new Highcharts.Chart({
            chart: {
                renderTo: "chart-sessions",
                height: 40 * c.length + 100,
                type: "bar"
            },
            title: {
                text: ""
            },
            xAxis: {
                categories: c,
                labels: {
                    align: "right"
                }
            },
            yAxis: {
                labels: {
                    style: {
                        color: "#4572A7"
                    }
                },
                title: {
                    text: b.yAxisTitle,
                    style: {
                        color: "#4572A7"
                    }
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: !0,
                        align: "left",
                        style: {
                            fontWeight: "bold"
                        },
                        formatter: function() {
                            var a = this.series.chart.series;
                            return a[0].visible && a[1].visible && a[1].name === this.series.name ? "" : f(this.y);

                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    var a = (this.series.chart.series, g(this.y));
                    return this.x + ":<b>" + a + "</b>";

                }
            },
            series: [{
                name: b.seriesName3,
                color: "#c42525",
                type: "column",
                data: i
            }, {
                name: b.seriesName2,
                color: "#8bbc21",
                type: "column",
                data: e
            }, {
                name: b.seriesName1,
                color: "#2f7ed8",
                type: "column",
                data: d
            }]
        })
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c();

    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        c(), a.clearFilters()
    }), a.sortOptions = {
        field: "id",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "asc" === a.sortOptions.order ? c(f, g) : c(g, f);

        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.filter = {
        cashier: ""
    }, a.clearFilters = function() {
        a.filter.cashier = ""
    }, a.$watch("filter.cashier", function() {
        e(), d()
    }), a.$watch("reportData", function() {
        a.reportData && a.reportData.length > 0 && (j && j.destroy(),
            setTimeout(i, 100))
    });
    var j
};
ReportCashierSessionController.$inject = ["$scope", "$http"];

var ReportDailyController = function(a, b, c, d) {
    function e() {
        var b = moment(a.date).startOf("day"),
            c = moment(a.date).endOf("day");

        if (a.isOneAccSelected) {
            var e = "history.reports.daily." + a.selectedAccounts[0].id,
                f = d.get(e + ".start"),
                g = d.get(e + ".end");

            f && (b = b.add(parseInt(f), "minutes")), g && (c = c.add(parseInt(g), "minutes")), c.diff(b, "minutes") <= 1 && (b = moment(a.date).startOf("day"),
                c = moment(a.date).endOf("day"))
        }
        a.start = b, a.end = c
    }

    function f() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var d = "YYYY-MM-DDTHH:mm:ss",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d),
                    fkey: a.fkey
                };
            a.reportParams = e,
                b.post("/api/reports/daily", e).success(function(b) {
                    a.reportData = b.report, a.totals = b.totals,
                        a.users = b.users, h(), g(), i(), a.isReportReady = !0, a.cashiers = _.values(b.users).sort();

                })
        }
    }

    function g() {
        var c = _.uniq(_.pluck(a.reportData, "client_id"));
        b.post("/api/reports/client-names", {
            ids: c.join(",")
        }).success(function(b) {
            a.clientNames = b
        })
    }

    function h() {
        if (a.reportData) {
            var b, c = a.reportData,
                d = a.filter;
            if ("notPaid" === d.status && (c = _.filter(c, function(a) {
                    return "red" === a["class"]
                })), d.id && (b = d.id, c = _.filter(c, function(a) {
                    return 0 === (a.id + "").indexOf(b);

                })), d.stake && (c = _.filter(c, function(a) {
                    return a.betAmount >= parseInt(d.stake)
                })), d.possibleWin && (c = _.filter(c, function(a) {
                    return a.possibleWin >= parseInt(d.possibleWin)
                })), d.payAmount && (c = _.filter(c, function(a) {
                    return a.pay_amount >= parseInt(d.payAmount)
                })), d.client && (b = d.client.toLowerCase(),
                    c = _.filter(c, function(c) {
                        return -1 !== (a.clientNames[c.client_id] || "").toLowerCase().indexOf(b);

                    })), d.result && (b = d.result, c = "win" !== b ? _.filter(c, function(a) {
                        return a.realWin === b;

                    }) : _.filter(c, function(a) {
                        return "number" == typeof a.realWin
                    })), d.cashier) {
                b = d.cashier;

                var e = a.users;
                c = _.filter(c, function(a) {
                    return e[a.uid] === b
                })
            }
            a.filtered = c
        }
    }

    function i() {
        a.sortOptions = {
            field: "stamp",
            order: "desc"
        }
    }

    function j(a, b, c, d) {
        var e = document.getElementById("excel-export-form");

        e && e.parentNode.removeChild(e);
        var f = document.createElement("form");
        if (f.id = "excel-export-form",
                f.action = b, f.method = a, f.target = d || "_self", c)
            for (var g in c) {
                var h = document.createElement("textarea");

                h.name = g, h.value = "object" == typeof c[g] ? JSON.stringify(c[g]) : c[g], f.appendChild(h);

            }
        f.style.display = "none", document.body.appendChild(f), f.submit()
    }
    a.date = c.date, a.fkey = !!c.paid && 1 || 0,
        a.mode = "list", e(), a.$watch("start + end + tz", function() {
        if (a.start && a.end && !isNaN(a.tz)) {
            if (a.isOneAccSelected) {
                var b = moment(a.start).startOf("day"),
                    c = moment(a.end).endOf("day"),
                    e = "history.reports.daily." + a.selectedAccounts[0].id;

                d.set(e + ".start", a.start.diff(b, "minutes")), d.set(e + ".end", a.end.diff(c, "minutes"));

            }
            f()
        }
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        e(), f()
    }), a.$watch("fkey", function(a, b) {
        a !== b && f()
    }), a.back = function() {
        window.history.back();

    }, a.refresh = function() {
        f()
    }, a.filter = {
        status: c.paid ? "paid" : "taken",
        id: "",
        stake: "",
        possibleWin: "",
        payAmount: "",
        client: "",
        cashier: "",
        result: ""
    }, a.$watch("filter.stake + filter.possibleWin + filter.payAmount + filter.client + filter.result + filter.cashier + filter.id", function() {
        h()
    }), a.$watch("filter.status", function(b) {
        switch (b) {
            case "taken":
                a.fkey = 0;
                break;
            case "paid":
                a.fkey = 1;
                break;
            case "notPaid":
                a.fkey = 0
        }
        h()
    }), a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "realWin" === e && (f = a.locale[b.realWin] || b.realWin,
                g = a.locale[d.realWin] || d.realWin, typeof f != typeof g && (f = "number" == typeof f ? f : 0, g = "number" == typeof g ? g : 0)),
            "client_id" === e && (f = a.clientNames[b.client_id] || "***", g = a.clientNames[d.client_id] || "***"),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        }), b && h()
    };
    var k, l = document.body.querySelector(".body-right");

    a.showDetails = function(c) {
        b.get("/api/slips/view/" + c).success(function(b) {
            a.slipId = b.id,
                a.content = b.html, a.slipOps = b.operations, a.slipInfo = b.info, k = l.scrollTop, a.mode = "view";

        })
    }, a.cancel = function() {
        a.mode = "list", setTimeout(function() {
            l.scrollTop = k, $(l).trigger("scroll");

        }, 50)
    }, a.flags = {}, a.cancelSlip = function() {
        b.post("/api/slips/cancel/" + a.slipId).success(function(b) {
            a.flags.showApproval = !1, a.cancelResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.cancelResult = ""
                })
            }, 3e3), "success" === a.cancelResult && f()
        })
    }, a.exportToExcel = function() {
        j("POST", "/api/export/report-daily", a.reportParams)
    }
};
ReportDailyController.$inject = ["$scope", "$http", "$routeParams", "storage"];

var ReportDeviceController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/devices", e).success(function(b) {
                a.reportData = b;
                var c = {
                    "in": 0,
                    out: 0,
                    incass: 0
                };
                _.forEach(b, function(a) {
                    c["in"] += a.sum_in, c.out += a.sum_out, c.incass += a.sum_incass;

                }), a.totals = c, a.isReportReady = !0
            })
        }
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c();

    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        c()
    }), a.sortOptions = {
        field: "none",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }
};
ReportDeviceController.$inject = ["$scope", "$http"];

var ReportDeviceDetailedController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;

        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c && a.deviceId) {
            var d = "YYYY-MM-DD",
                e = {
                    id: a.deviceId,
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/device-detailed", e).success(function(b) {
                a.reportData = b;
                var c = 0;
                _.forEach(b, function(a) {
                    c += a.sum
                }), a.total = c, a.isReportReady = !0;

            })
        }
    }
    a.deviceId = c.id, a.section = a.deviceId ? "report" : "search", a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && d()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.back = function() {
        window.history.back();

    }
};
ReportDeviceDetailedController.$inject = ["$scope", "$http", "$routeParams"];
var ReportDeviceIncomeController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var e = "YYYY-MM-DD",
                g = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(e),
                    end: a.end.format(e)
                };
            b.post("/api/reports/devices-income", g).success(function(b) {
                a.reportData = b.reportData,
                    a.totals = b.totals, a.slugTotals = b.slugTotals, a.slugs = b.slugs, a.sourceTotals = b.sourceTotals,
                    a.sources = b.sources, a.egameTotals = b.egameTotals, a.egames = b.egames, a.pins = b.pins, a.pins.sumIn = d(a.pins.sumIn / 100),
                    a.pins.sumOut = d(a.pins.sumOut / 100), a.chartData = b.chart, a.sortBy(), a.isReportReady = !0,
                    f()
            })
        }
    }

    function d(a) {
        return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }

    function e(a) {
        return a = Math.round(a / 1e3 * 10) / 10, a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k";

    }

    function f() {
        if (a.reportData) {
            var c = _.compact(_.unique(_.pluck(a.reportData, "acc_id")));

            b.get("/api/accounts/notes?account=" + c.join(",")).success(function(b) {
                a.accNotes = b;

            })
        }
    }

    function g() {
        var b, c = a.locale,
            d = [],
            f = 0;
        _.forEach(a.chartData, function(a) {
            a.income = a.income / 100,
                b = a.income / a.deviceCount, d.push(Math.round(100 * b) / 100), f += b
        }), a.$apply(function() {
            a.averageYield = f / d.length
        });
        var g = _.pluck(a.chartData, "date"),
            i = _.pluck(a.chartData, "deviceCount"),
            j = _.pluck(a.chartData, "income");

        h = new Highcharts.Chart({
            chart: {
                renderTo: "chart-income",
                zoomType: "xy"
            },
            title: {
                text: c.chartTitle
            },
            xAxis: {
                categories: g,
                labels: {
                    rotation: 300,
                    align: "right"
                }
            },
            yAxis: [{
                labels: {
                    style: {
                        color: "#4572A7"
                    }
                },
                title: {
                    text: c.yAxisTitle1,
                    style: {
                        color: "#4572A7"
                    }
                }
            }, {
                min: 0,
                title: {
                    text: c.yAxisTitle2,
                    style: {
                        color: "#89A54E"
                    }
                },
                labels: {
                    style: {
                        color: "#89A54E"
                    }
                },
                opposite: !0
            }, {
                labels: {
                    style: {
                        color: "#c42525"
                    }
                },
                title: {
                    text: c.yAxisTitle3,
                    style: {
                        color: "#c42525"
                    }
                },
                opposite: !0
            }],
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: !0,
                        rotation: 300,
                        align: "left",
                        style: {
                            fontWeight: "bold"
                        },
                        formatter: function() {
                            return e(this.y)
                        }
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return this.x + ":<b>" + this.y + "</b>"
                }
            },
            series: [{
                name: c.seriesName1,
                color: "#4572A7",
                type: "column",
                yAxis: 0,
                data: j
            }, {
                name: c.seriesName2,
                color: "#89A54E",
                type: "spline",
                yAxis: 1,
                data: i
            }, {
                name: c.seriesName3,
                color: "#c42525",
                type: "spline",
                yAxis: 2,
                data: d
            }]
        })
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        c()
    }), a.sortOptions = {
        field: "login",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;

        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : ""
    }, a.$watch("chartData", function() {
        a.chartData && a.chartData.length > 0 && (h && h.destroy(), setTimeout(g, 100))
    });
    var h;
    a.showSlugs = !1,
        a.showBets = !1, a.showEgames = !1, a.showAccNotes = !1
};
ReportDeviceIncomeController.$inject = ["$scope", "$http"];

var ReportGamerController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c && a.gamerId) {
            var d = "YYYY-MM-DDTHH:mm:ss",
                f = {
                    id: a.gamerId,
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/gamer", f).success(function(b) {
                a.reportData = b.report,
                    a.info = b.info, a.cards = b.cards, e(), a.isReportReady = !0
            })
        }
    }

    function e() {
        for (var b = {
            "in": 0,
            out: 0,
            bet: 0,
            win: 0,
            tax: 0
        }, c = 0, d = a.reportData.length; d > c; c++) {
            var e = a.reportData[c];

            switch (e.oper_type) {
                case 1:
                case 4:
                    b["in"] += e.amount;
                    break;
                case 0:
                case 5:
                    b.out += e.amount;

                    break;
                case 2:
                    b.win += e.amount;
                    break;
                case 3:
                    b.bet += e.amount;
                    break;
                case 10:
                    b.tax += e.amount;

            }
        }
        a.totals = b
    }
    a.gamerId = c.id, a.section = a.gamerId ? "report" : "search", a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && d()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.getOperColor = function(a) {
        switch (a) {
            case 1:
            case 4:
                return "success";
            case 0:
            case 5:
            case 10:
                return "error";
            case 2:
                return "info";

            case 3:
                return "warning";
            default:
                return ""
        }
    }, a.sortOptions = {
        field: "stamp",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "oper_type" === e && (f = a.opTypes[b.oper_type],
                g = a.opTypes[d.oper_type]), "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }, a.search = function() {
        var c = _.pluck(a.selectedAccounts, "id").join(",");
        if (c) {
            var d = {
                account: c
            };
            b.post("/api/reports/search/" + encodeURIComponent(a.query), d).success(function(b) {
                a.finded = b
            })
        }
    }, a.selectUser = function(b) {
        a.gamerId = b, a.section = "report"
    };
    var f;
    a.mode = "list",
        a.showDetails = function(c) {
            b.get("/api/slips/view/" + c).success(function(b) {
                a.slipId = b.id,
                    a.content = b.html, a.slipOps = b.operations, a.slipInfo = b.info, f = window.pageYOffset, a.mode = "view";

            })
        }, a.cancel = function() {
        a.mode = "list", setTimeout(function() {
            window.scrollTo(0, f)
        }, 50);

    }, a.flags = {}, a.cancelSlip = function() {
        b.post("/api/slips/cancel/" + a.slipId).success(function(b) {
            a.flags.showApproval = !1, a.cancelResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.cancelResult = ""
                })
            }, 3e3)
        })
    }
};
ReportGamerController.$inject = ["$scope", "$http", "$routeParams", "storage"];

var ReportHistoryController = function(a, b) {
    function c() {
        if (a.isOneAccSelected) {
            a.isReportReady = !1;

            var c = "YYYY-MM-DD",
                d = {
                    account: a.selectedAccounts[0].id,
                    tz: a.tz,
                    source: a.source,
                    start: a.start.format(c),
                    end: a.end.format(c)
                };
            b.post("/api/reports/bets-history", d).success(function(b) {
                a.reportData = b;

                var c = {
                    bought: 0,
                    payed: 0,
                    refunded: 0,
                    wait_count: 0,
                    good_count: 0,
                    server_canceled_count: 0,
                    client_canceled_count: 0
                };
                _.forEach(b, function(a) {
                    c.bought += a.bought, c.payed += a.payed,
                        c.refunded += a.refunded, c.wait_count += a.wait_count, c.good_count += a.good_count, c.server_canceled_count += a.server_canceled_count,
                        c.client_canceled_count += a.client_canceled_count
                }), a.totals = c, a.isReportReady = !0
            });

        }
    }
    a.source = 1004, a.$watch("start + end + tz + source", function() {
        a.start && a.end && !isNaN(a.tz) && a.source && c();

    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        c()
    }), a.sortOptions = {
        field: "none",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;

        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : ""
    }
};
ReportHistoryController.$inject = ["$scope", "$http"];

var ReportJackpotController = function(a, b) {
    function c() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/jackpots", e).success(function(b) {
                a.reportData = b;
                var c = {
                    sum: 0
                };
                _.forEach(b, function(a) {
                    c.sum += a.win
                }), a.totals = c, a.isReportReady = !0
            })
        }
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && c()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        c()
    })
};
ReportJackpotController.$inject = ["$scope", "$http"];

var ReportLotteryController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    step: a.chartStep,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/games-income", e).success(function(b) {
                a.chartParam = "profitable",
                    a.chartData = b
            })
        }
    }

    function e(a) {
        return a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(".", ",");

    }

    function f(a) {
        return a = Math.round(a / 1e3 * 10) / 10, a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k";

    }

    function g() {
        if (a.chartData && a.chartData.length) {
            var b = {},
                c = 0;
            _.forEach(a.chartData, function(a) {
                b[a.name] = b[a.name] || 0, b[a.name] += a.income, c += a.income
            });
            var d = 0;
            _.forOwn(b, function(a) {
                0 > a && (d += a)
            });
            var e = a.locale,
                f = "profitable" === a.chartParam;
            if (f && 0 === c || !f && 0 === d) return void(a.chartPieData = [{
                name: e.noLotteries,
                y: 0,
                sliced: !0,
                selected: !0
            }]);
            var g = [],
                h = f ? c / 100 : Math.abs(d) / 100,
                i = {
                    name: e.others,
                    lotteries: "",
                    y: 0
                };
            _.forEach(b, function(a, b) {
                (a >= 0 && f || 0 > a && !f) && (a = Math.abs(a),
                    a >= h ? g.push([b, a]) : (i.lotteries += i.lotteries ? ", " + b : b, i.y += a))
            }), g.sort(function(a, b) {
                return b[1] - a[1]
            }), g[0] = {
                name: g[0][0],
                y: g[0][1],
                sliced: !0,
                selected: !0
            }, g.push(i),
                a.chartPieData = g, a.totalYield = c, a.$apply(function() {
                a.chartImgSrc = "http://flashslots.s3.amazonaws.com/thumb/" + g[0].name + ".jpg",
                    a.chartImgTitle = g[0].name
            })
        }
    }

    function h(b) {
        var c = {};
        _.forEach(a.chartData, function(a) {
            c[a.date] = c[a.date] || {
                    lot: 0,
                    other: 0
                }, a.name === b ? c[a.date].lot = a.income / 100 : c[a.date].other += a.income / 100;

        });
        var d = [],
            e = [];
        _.forOwn(c, function(a) {
            d.push(a.lot), e.push(a.other)
        });
        var f = a.locale;

        a.chartStackedData = [{
            name: f.others,
            data: e
        }, {
            name: b,
            data: d
        }]
    }

    function i() {
        var b = a.locale;

        k = new Highcharts.Chart({
            chart: {
                renderTo: "chart-lottery",
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: !1,
                marginRight: m
            },
            title: {
                text: b.pieTitle
            },
            subtitle: {
                text: b.pieSubtitle
            },
            tooltip: {
                formatter: function() {
                    var c;
                    return c = "profitable" === a.chartParam ? Math.round(10 * this.point.percentage) / 10 : Math.round(100 * Math.abs(this.point.y / a.totalYield) * 100) / 100,
                    "<b>" + this.point.name + "</b>" + (this.point.lotteries ? "(" + this.point.lotteries + ")" : "") + "<br>" + b.piePart + ": <b>" + c + "%</b><br>" + b.sum + ": <b>" + ("unprofitable" === a.chartParam ? "-" : "") + e(this.point.y / 100) + "</b>" + (this.point.selected || this.point.lotteries ? "" : "<br>" + b.pieTooltip);

                },
                percentageDecimals: 1
            },
            plotOptions: {
                pie: {
                    allowPointSelect: !0,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: !0,
                        color: "#000000",
                        connectorColor: "#000000",
                        formatter: function() {
                            var b;
                            return b = "profitable" === a.chartParam ? Math.round(10 * this.percentage) / 10 : Math.round(100 * Math.abs(this.point.y / a.totalYield) * 100) / 100,
                            "<b>" + this.point.name + "</b>: " + b + " %"
                        }
                    },
                    point: {
                        events: {
                            click: function() {
                                if (!this.lotteries) {
                                    var b = this.name;
                                    a.$apply(function() {
                                        a.chartImgSrc = "http://flashslots.s3.amazonaws.com/thumb/" + b + ".jpg",
                                            a.chartImgTitle = b
                                    }), l && l.destroy(), setTimeout(function() {
                                        h(b), j()
                                    }, 50)
                                }
                            }
                        }
                    }
                }
            },
            series: [{
                type: "pie",
                data: a.chartPieData
            }]
        })
    }

    function j() {
        var b, c = _.uniq(_.pluck(a.chartData, "date")),
            d = a.locale;

        switch (a.chartStep) {
            case "daily":
                b = d.daily;
                break;
            case "weekly":
                b = d.weekly;
                break;
            case "monthly":
                b = d.monthly
        }
        l = new Highcharts.Chart({
            chart: {
                renderTo: "chart-stacked",
                type: "column"
            },
            title: {
                text: d.stackedTitle + " (" + b + ")"
            },
            xAxis: {
                categories: c,
                labels: {
                    rotation: 300,
                    align: "right"
                }
            },
            yAxis: {
                title: {
                    text: d.income
                },
                stackLabels: {
                    enabled: !0,
                    rotation: 300,
                    align: "right",
                    style: {
                        fontWeight: "bold"
                    },
                    y: -20,
                    formatter: function() {
                        return this.total > 0 ? f(this.total) : "";

                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return "<b>" + this.series.name + "</b> за " + this.x + "<br/>" + d.sum + ": <b>" + e(this.y) + "</b> (" + Math.round(this.y / this.point.stackTotal * 1e3) / 10 + "%)<br/>" + d.total + ": <b>" + e(this.point.stackTotal) + "</b>";

                }
            },
            plotOptions: {
                column: {
                    stacking: "normal",
                    dataLabels: {
                        enabled: !1
                    }
                }
            },
            legend: {
                reversed: !0
            },
            series: a.chartStackedData
        })
    }
    a.chartStep = c.getTemp("history.reports.lotteries.step") || "daily",
        a.$watch("start + end + tz + chartStep", function() {
            if (a.start && a.end && !isNaN(a.tz)) {
                var b = a.start,
                    e = a.end,
                    f = e.diff(b, "days");
                f > 31 && "daily" === a.chartStep && (a.chartStep = "weekly"),
                f > 210 && "monthly" !== a.chartStep && (a.chartStep = "monthly"), d(), c.setTemp("history.reports.lotteries.step", a.chartStep);

            }
        }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.$watch("chartData.length + chartParam", function() {
        a.chartData && a.chartData.length > 0 && (k && k.destroy(),
        l && l.destroy(), setTimeout(function() {
            g(), i();
            var b = a.chartPieData[0].name;
            h(b), j();

        }, 100))
    });
    var k, l, m = (window.innerWidth, 0)
};
ReportLotteryController.$inject = ["$scope", "$http", "storage"];

var ReportPINController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        if (c) {
            var d = "YYYY-MM-DD",
                e = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d)
                };
            b.post("/api/reports/pins", e).success(function(b) {
                a.reportData = b;
                var c = {
                    amount: 0,
                    real: 0,
                    game: 0,
                    win: 0,
                    "final": 0
                };
                _.forEach(b, function(a) {
                    c.amount += a.amount, c.real += a.amount_real,
                        c.game += a.amount_game, c.win += a.amount_win, c["final"] += a.amount_final
                }), a.totals = c,
                    a.isReportReady = !0, a.sortBy()
            })
        }
    }
    a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && d();

    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.sortOptions = {
        field: c.getTemp("history.reports.pins.sort_field") || "date",
        order: c.getTemp("history.reports.pins.sort_order") || "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var d = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, c) {
            var e = a.sortOptions.field,
                f = b[e],
                g = c[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? d(f, g) : d(g, f)
        }), c.setTemp("history.reports.pins.sort_field", a.sortOptions.field),
            c.setTemp("history.reports.pins.sort_order", a.sortOptions.order)
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.clearBalance = function(c, d) {
        return a.confirmClearBalance = "", "undefined" == typeof d ? void(a.confirmClearBalance = c.login) : void(d !== !1 && b.post("/api/settings/" + a.selectedAccounts[0].id + "/rfid-clear-balance", {
                login: c.login
            }).success(function(b) {
                "error" === b.status && (a.pinActionResult = {
                    msg: b.error || "server error",
                    login: c.login
                }, setTimeout(function() {
                    a.$apply(function() {
                        a.pinActionResult = {}
                    })
                }, 3e3));

            }))
    }
};
ReportPINController.$inject = ["$scope", "$http", "storage"];
var ReportPINDetailedController = function(a, b, c) {
    function d() {
        if (a.isReportReady = !1, a.pin) {
            var c = "YYYY-MM-DD",
                d = {
                    pin: a.pin,
                    tz: a.tz,
                    start: a.start.format(c),
                    end: a.end.format(c)
                };
            b.post("/api/reports/pins-detailed", d).success(function(b) {
                a.reportData = b;
                var c = {
                    "in": 0,
                    out: 0
                };
                _.forEach(b, function(a) {
                    c["in"] += a.amount_in,
                        c.out += a.amount_out
                }), a.totals = c, a.isReportReady = !0
            })
        }
    }
    a.pin = c.id, a.section = a.pin ? "report" : "search",
        a.$watch("start + end + tz", function() {
            a.start && a.end && !isNaN(a.tz) && d()
        }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.back = function() {
        window.history.back()
    }
};
ReportPINDetailedController.$inject = ["$scope", "$http", "$routeParams"];

var ReportPINOperationsController = function(a, b, c) {
    function d() {
        if (a.isReportReady = !1,
                a.pin) {
            var c = "YYYY-MM-DD",
                d = {
                    pin: a.pin,
                    tz: a.tz,
                    start: a.start.format(c),
                    end: a.end.format(c)
                };
            b.post("/api/reports/pins-operations", d).success(function(b) {
                a.reportData = b;
                var c = {
                    amount: 0,
                    real: 0,
                    game: 0,
                    win: 0,
                    "final": 0
                };
                _.forEach(b, function(a) {
                    c.amount += a.amount,
                        c.real += a.amount_real, c.game += a.amount_game, c.win += a.amount_win, c["final"] += a.amount_final;

                }), a.totals = c, a.isReportReady = !0, a.sortBy()
            })
        }
    }
    a.pin = c.id, a.$watch("start + end + tz", function() {
        a.start && a.end && !isNaN(a.tz) && d()
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1;

    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.back = function() {
        window.history.back();

    }, a.sortOptions = {
        field: "date",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "asc" === a.sortOptions.order ? c(f, g) : c(g, f);

        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.searchPins = function() {
        if (a.searchText) {
            var c = _.pluck(a.selectedAccounts, "id").join(",");

            if (c) {
                var d = {
                    account: c,
                    query: encodeURIComponent(a.searchText)
                };
                b.post("/api/reports/pins/search", d).success(function(b) {
                    a.foundPins = b
                })
            }
        }
    }, a.selectPin = function(b) {
        a.pin = b, d()
    }, a.clearSearchResults = function() {
        a.foundPins = null, a.searchText = ""
    }
};
ReportPINOperationsController.$inject = ["$scope", "$http", "$routeParams"];

var ReportRoundController = function(a, b, c, d) {
    function e() {
        if (a.isOneAccSelected) {
            a.isReportReady = !1;

            var c = {
                account: a.selectedAccounts[0].id,
                tz: a.tz,
                source: a.source,
                round: a.round
            };
            b.post("/api/reports/bets-round", c).success(function(b) {
                a.reportData = b, a.devices = _.unique(_.pluck(b, "device")), f(), a.isReportReady = !0
            })
        }
    }

    function f() {
        if (a.reportData) {
            var b = a.reportData,
                c = a.filter;
            c.device && (b = _.filter(b, function(a) {
                return a.device === c.device
            })), a.filtered = b
        }
    }
    a.source = c.source, a.round = c.round, a.tz = d.get("history.reports.tz"),
        a.$on("accounts_updated", function() {
            a.isReportReady = !1
        }), a.$on("accounts_updated_delayed", function() {
        e()
    }), e(), a.back = function() {
        window.history.back()
    }, a.betTypes = {
        "[121]": "red",
        "[122]": "black",
        "[141]": "big",
        "[142]": "small",
        "[111]": "odd",
        "[112]": "even",
        "[131]": "col1",
        "[132]": "col2",
        "[133]": "col3",
        "[101]": "row1",
        "[102]": "row2",
        "[103]": "row3"
    }, a.sortOptions = {
        field: "none",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;

        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : ""
    }, a.filter = {
        device: ""
    }, a.$watch("filter.device", function() {
        f()
    })
};
ReportRoundController.$inject = ["$scope", "$http", "$routeParams", "storage"];

var ReportSourceController = function(a, b, c) {
    function d() {
        a.isReportReady = !1;
        var c = _.pluck(a.selectedAccounts, "id").join(",");

        console.log(c);

        if (c) {
            var d = "YYYY-MM-DD",
                f = {
                    account: c,
                    tz: a.tz,
                    start: a.start.format(d),
                    end: a.end.format(d),
                    step: a.chartStep
                };
            b.post("/api/reports/sources", f).success(function(b) {
                a.reportData = b.reportData;

                var c = {
                    "yield": {},
                    count: 0
                };
                _.forEach(b.reportData, function(a) {
                    c["yield"][a.currency] = c["yield"][a.currency] || 0,
                        c["yield"][a.currency] += a.delta, c.count += a.cnt
                }), a.totals = c;
                var d = [];
                _.forOwn(c["yield"], function(a, b) {
                    d.push({
                        currency: b,
                        amount: a
                    })
                }), d.sort(function(a, b) {
                    return b.amount - a.amount
                }), a.currencies = d,
                    a.isReportReady = !0, d.length && (a.chartOptions.currency = d[0].currency), a.chartData = b.chartData,
                    e(), a.hasRoleAdmin && j()
            })
        }
    }

    function e() {
        a.chartData && a.chartData.length > 0 && (k && (k.destroy(),
            k = null), l && (l.destroy(), l = null), f(), setTimeout(function() {
            h();
            var b = a.chartPieData[0].name;

            g(b), i()
        }, 100))
    }

    function f() {
        if (a.chartData && a.chartData.length) {
            var b = a.chartParam,
                c = a.chartOptions.currency,
                d = {},
                e = 0;

            _.forEach(a.chartData, function(a) {
                a.currency === c && (d[a.name] = d[a.name] || 0, d[a.name] += a[b],
                    e += a[b])
            });
            var f = [],
                g = e / 100,
                h = {
                    name: a.locale.others,
                    sources: "",
                    y: 0
                };
            _.forEach(d, function(a, b) {
                a >= 0 && (a >= g ? f.push([b, a]) : (h.sources += h.sources ? ", " + b : b, h.y += a))
            }), f.sort(function(a, b) {
                return b[1] - a[1]
            }), f[0] && (f[0] = {
                name: f[0][0],
                y: f[0][1],
                sliced: !0,
                selected: !0
            }), f.push(h),
                a.chartPieData = f
        }
    }

    function g(b) {
        var c = {},
            d = a.chartParam,
            e = a.chartOptions.currency;

        _.forEach(a.chartData, function(a) {
            c[a.date] = c[a.date] || {
                    source: 0,
                    other: 0
                }, a.currency === e && (a.name === b ? c[a.date].source = Math.round(10 * a[d]) / 10 : c[a.date].other += Math.round(10 * a[d]) / 10);

        });
        var f = [],
            g = [];
        _.forOwn(c, function(a) {
            f.push(a.source), g.push(a.other)
        }), a.chartStackedData = [{
            name: a.locale.others,
            data: g
        }, {
            name: b,
            data: f
        }]
    }

    function h() {
        var b = a.locale;
        a.chartPieData[a.chartPieData.length - 1].name = b.others,
            k = new Highcharts.Chart({
                chart: {
                    renderTo: "chart-lottery",
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: !1
                },
                title: {
                    text: b.pieTitle + " (<b>" + a.label + "</b>)"
                },
                subtitle: {
                    text: b.pieSubtitle
                },
                tooltip: {
                    formatter: function() {
                        return "<b>" + this.point.name + "</b>" + (this.point.sources ? "(" + this.point.sources + ")" : "") + "<br>" + b.part + ": <b>" + Math.round(10 * this.point.percentage) / 10 + "%</b><br>" + b.sum + ": <b>" + Math.round(10 * this.point.y) / 10 + "</b>" + (this.point.selected || this.point.sources ? "" : "<br>" + b.click);

                    },
                    percentageDecimals: 1
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: !0,
                        cursor: "pointer",
                        dataLabels: {
                            enabled: !0,
                            color: "#000000",
                            connectorColor: "#000000",
                            formatter: function() {
                                return "<b>" + this.point.name + "</b>: " + Math.round(10 * this.percentage) / 10 + " %";

                            }
                        },
                        point: {
                            events: {
                                click: function() {
                                    if (!this.sources) {
                                        var a = this.name;
                                        l && l.destroy(),
                                            setTimeout(function() {
                                                g(a), i()
                                            }, 50)
                                    }
                                }
                            }
                        }
                    }
                },
                series: [{
                    type: "pie",
                    data: a.chartPieData
                }]
            })
    }

    function i() {
        var b = a.locale;
        a.chartStackedData[0].name = b.others;
        var c, d = _.uniq(_.pluck(a.chartData, "date"));

        switch (a.chartStep) {
            case "daily":
                c = b.daily;
                break;
            case "weekly":
                c = b.weekly;
                break;
            case "monthly":
                c = b.monthly
        }
        l = new Highcharts.Chart({
            chart: {
                renderTo: "chart-stacked",
                type: "column"
            },
            title: {
                text: b.stackedTitle + " (" + c + ")"
            },
            xAxis: {
                categories: d,
                labels: {
                    rotation: 300,
                    align: "right"
                }
            },
            yAxis: {
                title: {
                    text: b[a.chartParam]
                },
                stackLabels: {
                    enabled: !0,
                    rotation: 300,
                    align: "right",
                    style: {
                        fontWeight: "bold"
                    },
                    y: -20,
                    formatter: function() {
                        return this.total > 0 ? Math.round(10 * this.total) / 10 : "";

                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return "<b>" + this.series.name + "</b> за " + this.x + "<br/>" + b.sum + ": <b>" + this.y + "</b> (" + Math.round(this.y / this.point.stackTotal * 1e3) / 10 + "%)<br/>" + b.total + ": <b>" + Math.round(10 * this.point.stackTotal) / 10 + "</b>";

                }
            },
            plotOptions: {
                column: {
                    stacking: "normal",
                    dataLabels: {
                        enabled: !1
                    }
                }
            },
            legend: {
                reversed: !0
            },
            series: a.chartStackedData
        })
    }

    function j() {
        b.get("/api/cafe/exchange-rates").success(function(b) {
            var c = {};
            _.forEach(b, function(a) {
                c[a.code] = a.rate
            });
            var d = 0,
                e = 0;
            _.forEach(a.currencies, function(a) {
                d += a.amount * (c[a.currency] || 0)
            }), e = d / c.USD, a.totals.totalInRUR = d, a.totals.totalInUSD = e;

        })
    }
    a.chartStep = c.getTemp("history.reports.sources.step") || "daily", a.chartOptions = {
        source: "delta",
        currency: ""
    }, a.$watch("start + end + chartStep + tz", function() {
        if (a.start && a.end && !isNaN(a.tz)) {
            var b = a.start,
                e = a.end,
                f = e.diff(b, "days");
            f > 31 && "daily" === a.chartStep && (a.chartStep = "weekly"),
            f > 210 && "monthly" !== a.chartStep && (a.chartStep = "monthly"), c.setTemp("history.reports.sources.step", a.chartStep),
                d()
        }
    }), a.$on("accounts_updated", function() {
        a.isReportReady = !1
    }), a.$on("accounts_updated_delayed", function() {
        d()
    }), a.chartParam = "delta", a.$watch("chartParam + chartOptions.currency", e);
    var k, l;

    a.sortOptions = {
        field: "delta",
        order: "desc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.reportData.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "asc" === a.sortOptions.order ? c(f, g) : c(g, f);

        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }
};
ReportSourceController.$inject = ["$scope", "$http", "storage"];
var SettingsCtrl = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/settings/" + a.selectedAccounts[0].id).success(function(b) {
            a.sources = b.sources, a.accType = b.force
        })
    }

    function d(b) {
        "success" === b.result ? (c(), a.mode = "list") : e(b.result);

    }

    function e(b) {
        a.serverError = b, setTimeout(function() {
            a.$apply(function() {
                a.serverError = "";

            })
        }, 3e3)
    }
    a.mode = "list", a.$on("accounts_updated", function() {
        c()
    }), c(), a.toggleSource = function(c) {
        a.hasRoleMaster && b.post("/api/settings/" + a.selectedAccounts[0].id + "/toggle-source", {
            source: c.id,
            oldValue: c.enabled
        }).success(function(a) {
            "success" === a.result ? c.enabled = a.newValue : e(a.result);

        })
    }, a.switchAll = function(d) {
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/switch-all/" + d).success(function(a) {
            "success" === a.result ? c() : e(a.result)
        })
    }, a.sortOptions = {
        field: "id",
        order: "asc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.sources.sort(function(b, d) {
            var e = a.sortOptions.field;
            return "asc" === a.sortOptions.order ? c(b[e], d[e]) : c(d[e], b[e]);

        })
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;
        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : "";

    }, a.numRegExp = /^[0-9]+\.?[0-9]{0,4}$/, a.changeJackpot = function(b) {
        b.jp_id || (b.jp_percent = .01,
            b.jp_fallValue = 5e3, b.jp_prob = .01), a.source = b, a.mode = "editJackpot"
    }, a.cancel = function() {
        a.mode = "list"
    }, a.saveJackpot = function() {
        var d = a.source;
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/change-jackpot", {
            source: a.source.id,
            percent: d.jp_percent,
            fallValue: d.jp_fallValue,
            prob: d.jp_prob
        }).success(function(b) {
            "success" === b.result ? (c(), a.mode = "list") : e(b.result)
        })
    }, a.betsApplyToAll = !1, a.betsPerRoundApplyToAll = !1,
        a.percentApplyToAll = !1, a.changeBetAmount = function(b) {
        a.source = _.clone(b), a.mode = "editBetAmount";

    }, a.changeBetPerRound = function(b) {
        a.source = _.clone(b), a.mode = "editBetPerRound"
    }, a.changePercent = function(b) {
        a.source = _.clone(b), a.mode = "editPercent"
    }, a.saveBets = function() {
        var c = a.source;
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/bet-amount", {
            source: c.id,
            min: c.min_bet,
            max: c.max_bet,
            all: a.betsApplyToAll
        }).success(d)
    }, a.saveBetsPerRound = function() {
        var c = a.source;
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/bet-per-round", {
            source: c.id,
            amount: c.max_bet_amount,
            count: c.max_bet_number,
            all: a.betsPerRoundApplyToAll
        }).success(d)
    }, a.savePercent = function() {
        var c = a.source;
        b.post("/api/settings/" + a.selectedAccounts[0].id + "/percent", {
            source: c.id,
            percent: c.percent,
            all: a.percentApplyToAll
        }).success(d)
    }
};
SettingsCtrl.$inject = ["$scope", "$http"];

var SettingsDeviceCtrl = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/settings/" + a.selectedAccounts[0].id + "/devices").success(function(b) {
            a.devices = b, n()
        })
    }

    function d() {
        a.isOneAccSelected && b.get("/api/settings/" + a.selectedAccounts[0].id + "/device-settings").success(function(b) {
            t = b.group, r = b.base, s = {}, _.merge(s, r, t, f), a.hasBaseSettings = "Not found" !== b.base.error;

        })
    }

    function e() {
        a.isOneAccSelected && b.get("/api/settings/" + a.selectedAccounts[0].id + "/presets").success(function(b) {
            a.presets = b
        })
    }

    function f(a, b) {
        return _.isArray(b) ? _.clone(b) : void 0
    }

    function g() {
        var b = a.settings.slots_bets;
        return b.g_.bet = h(b.g_.bet), b.i_.bet = h(b.i_.bet), b.a_.bet = h(b.a_.bet),
            b.o_.bet = h(b.o_.bet), b.ib_.bet = h(b.ib_.bet), b.bet_keno.bet = h(b.bet_keno.bet), b.turbokeno.bet = h(b.turbokeno.bet),
            b.sicbo_.bet = h(b.sicbo_.bet), b.bet_roulette.bet = k(h(b.bet_roulette.bet)), b.bet_bingo37.bet = h(b.bet_bingo37.bet),
            _.forEach(a.customGames, function(a) {
                b[a].bet = h(b[a].bet)
            }), a.settings.slots_bets = b,
            b = a.settings.airtime_info, _.isEmpty(b) || (b.values = h(b.values), b.values_enabled = h(b.values_enabled),
            a.settings.airtime_info = b), a.settings.slots_big_wins = i(a.settings.slots_big_wins, !0),
            a.settings.jackpot_wheel_values = j(i(a.settings.jackpot_wheel_values, !0)), !0
    }

    function h(a, b) {
        if ("string" != typeof a) return a;
        var c = [];
        return _.forEach(a.split(","), function(a) {
            a = parseInt(a.trim()), _.isFinite(a) && c.push(a)
        }), c.length && b && c.sort(function(a, b) {
            return a - b
        }), c
    }

    function i(a, b) {
        if ("string" != typeof a) return a;
        var c = [];
        return _.forEach(a.split(","), function(a) {
            a = parseInt(a), _.isFinite(a) && a > 0 && c.push(a)
        }), c.length && b && c.sort(function(a, b) {
            return a - b;

        }), c
    }

    function j(a) {
        if (a && 0 !== a.length) {
            var b = a.length;
            return 10 === b ? a : (10 > b ? a.push(a[b - 1]) : b > 10 && a.pop(),
                    j(a))
        }
    }

    function k(a) {
        if (!a.length) return a;
        var b = a[0],
            c = [];
        return _.forEach(a, function(a) {
            a % b === 0 && c.push(a)
        }), c
    }

    function l(a, b) {
        var c = _.cloneDeep(b);
        return "undefined" == typeof a ? c : (_.forOwn(c, function(b, d) {
                _.isEqual(b, a[d]) || "" === b || _.isArray(b) && 0 === c[d].length ? delete c[d] : _.isObject(b) && !_.isArray(b) && (c[d] = l(a[d], b),
                    "" === c[d] && delete c[d])
            }), _.isEmpty(c) ? "" : c)
    }

    function m() {
        _.forEach(a.presets, function(b) {
            b.active = "" === l(a.settings, b.data)
        })
    }

    function n() {
        if (a.devices && a.devices.length) {
            var b, c = a.devices;
            a.filter.login && (b = a.filter.login.toLowerCase(), c = _.filter(c, function(a) {
                return -1 !== a.login.toString().indexOf(b)
            })), a.filter.hideDeleted && (c = _.filter(c, function(a) {
                return 99 != a.status
            })), a.filter.hideNonactivated && (c = _.filter(c, function(a) {
                return -1 != a.status;

            })), a.filtered = c
        }
    }

    function o() {
        return a.settings ? (a.vm_slot = !1, a.vm_pabk = !1, a.vm_stock = !1,
                void _.forEach(a.settings.visual_modes, function(b) {
                    a[b] = !0
                })) : void setTimeout(o, 2e3);

    }

    function p() {
        if (!a.settings) return void setTimeout(p, 2e3);
        var b = [];
        _.forOwn(a.settings.slots_bets, function(a, c) {
            -1 === ["g_", "a_", "i_", "o_", "ib_", "bet_keno", "turbokeno", "sicbo_", "bet_roulette", "bet_bingo37", "eco", "max_win"].indexOf(c) && b.push(c);

        }), a.customGames = b
    }

    function q() {
        a.$apply(function() {
            b.get("/api/devices/check/" + encodeURIComponent(a.newDevice.login)).success(function(b) {
                a.validLogin = !b.exists
            })
        })
    }
    a.mode = "list", a.section = "main", a.gameTab = "g_";
    var r = {},
        s = {},
        t = {};

    a.$on("accounts_updated", function() {
        c(), d(), a.mode = "list"
    }), c(), d(), e(), a.deleteDevice = function(c, d) {
        return a.confirmLogin = "", "undefined" == typeof d ? void(a.confirmLogin = c.login) : void(d !== !1 && b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-delete", {
                login: c.login
            }).success(function(a) {
                "ok" === a.status && (c.status = 99)
            }))
    }, a.showSettings = function(b) {
        if (a.hasBaseSettings) {
            var c = {};
            "undefined" == typeof b ? _.merge(c, r, t, f) : (a.currentDevice = b,
                    _.merge(c, r, t, b.extra, f)), a.settings = c
        }
        o(), p(), a.mode = "edit", a.section = "main"
    }, a.resetSettings = function() {
        if (a.currentDevice) {
            var b = {};
            _.merge(b, r, t, f), a.settings = b
        } else a.settings = _.cloneDeep(r);

        "result" === a.section && (a.resultSettings = '""')
    }, a.calcDiff = function() {
        g();
        var b;
        if (a.currentDevice) {
            var c = {};
            _.merge(c, r, t, f), b = l(c, a.settings)
        } else b = l(r, a.settings);
        a.resultSettings = JSON.stringify(b),
            a.section = "result"
    }, a.cancel = function() {
        a.currentDevice = null, a.newDevice = null, delete a.settings,
            a.mode = "list"
    }, a.saveSettings = function() {
        g();
        var c, d = null;
        if (a.currentDevice) {
            var e = {};

            _.merge(e, r, t, f), c = l(e, a.settings), d = a.currentDevice.login
        } else c = l(r, a.settings);

        b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-settings/save", {
            settings: c,
            accId: a.selectedAccounts[0].id,
            device: d
        }).success(function(b) {
            "success" === b && (a.currentDevice ? a.currentDevice.extra = c : t = c),
                a.settingsResult = b, setTimeout(function() {
                a.$apply(function() {
                    a.settingsResult = ""
                });

            }, 3e3)
        })
    }, a.applyPreset = function(b) {
        b && _.merge(a.settings, b, f), "result" === a.section && a.calcDiff();

    }, a.$watchCollection("settings", function() {
        "edit" !== a.mode && _.isEmpty(a.settings) || m();

    }), a.sortOptions = {
        field: "id",
        order: "asc"
    }, a.sortBy = function(b) {
        b && (a.sortOptions.field === b ? a.sortOptions.order = "asc" === a.sortOptions.order ? "desc" : "asc" : (a.sortOptions.field = b,
                a.sortOptions.order = "asc"));
        var c = function(a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        };
        a.devices.sort(function(b, d) {
            var e = a.sortOptions.field,
                f = b[e],
                g = d[e];
            return "login" === e && (f = parseInt(f), g = parseInt(g)),
                "asc" === a.sortOptions.order ? c(f, g) : c(g, f)
        }), n()
    }, a.isSortedBy = function(b) {
        var c = a.sortOptions;

        return c.field === b ? "asc" === c.order ? "icon-chevron-up" : "icon-chevron-down" : ""
    }, a.filter = {
        login: "",
        hideDeleted: !0,
        hideNonactivated: !0
    }, a.clearFilters = function() {
        a.filter = {
            login: "",
            hideDeleted: !0,
            hideNonactivated: !0
        }
    }, a.$watch("filter.login + filter.hideDeleted + filter.hideNonactivated", function() {
        n()
    }), a.searchDevices = function() {
        a.searchText && b.get("/api/devices/search/" + encodeURIComponent(a.searchText)).success(function(b) {
            a.foundDevices = b
        })
    }, a.selectAccount = function(b, c) {
        a.$emit("accounts_select", parseInt(c)),
            a.filter.login = b
    }, a.clearSearchResults = function() {
        a.foundDevices = null, a.searchText = "";

    }, a.onChangeVisualMode = function(b) {
        a[b] ? a.settings.visual_modes.push(b) : _.remove(a.settings.visual_modes, function(a) {
                return a === b
            })
    }, a.isInherited = function(b) {
        return a.settings && s && r ? a.currentDevice ? _.isEqual(_.get(a.settings, b), _.get(s, b)) : _.isEqual(_.get(a.settings, b), _.get(r, b)) : !0;

    }, a.switchToNewGameTab = function() {
        var b = a.settings.slots_bets.i_;
        a.newSet = {
            default_value: b.default_value,
            max_win: b.max_win,
            safe: -1,
            bet: b.bet
        }, a.gameTab = "new"
    }, a.addNewSet = function() {
        var b = a.newSet;

        b.name && !a.settings.slots_bets[b.name] && b.default_value && b.max_win && b.safe && b.bet && (a.settings.slots_bets[b.name] = {
            default_value: b.default_value,
            max_win: b.max_win,
            safe: b.safe,
            bet: b.bet
        }, a.customGames.push(b.name),
            a.gameTab = b.name)
    }, a.switchToGameTab = function(b) {
        a.gameTab = b
    }, a.deleteCustomGame = function(b) {
        _.remove(a.customGames, function(a) {
            return a === b
        }), delete a.settings.slots_bets[b],
            a.gameTab = "g_"
    }, a.clearBalance = function(c, d) {
        return a.confirmClearBalance = "", "undefined" == typeof d ? void(a.confirmClearBalance = c.login) : void(d !== !1 && b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-clear-balance", {
                billing: c.billing_uuid
            }).success(function(b) {
                "error" === b.status && (a.deviceActionResult = {
                    msg: b.error || "server error",
                    login: c.login
                }, setTimeout(function() {
                    a.$apply(function() {
                        a.deviceActionResult = {}
                    })
                }, 3e3))
            }))
    }, a.loginRegexp = /^[0-9]{4,15}$/, a.showCreateDeviceForm = function() {
        a.newDevice = {
            login: "",
            password: "",
            currency: ""
        }, a.deviceCreateResult = "", a.mode = "create_device";

    }, a.createDevice = function() {
        var c = a.newDevice;
        a.loginRegexp.test(c.login) && a.loginRegexp.test(c.password) && b.post("/api/settings/" + a.selectedAccounts[0].id + "/device-create", {
            device: c
        }).success(function(b) {
            "ok" === b.status && (a.deviceCreateResult = "success"),
            "error" === b.status && (a.deviceCreateResult = b.error || "server error", setTimeout(function() {
                a.$apply(function() {
                    a.deviceCreateResult = ""
                })
            }, 3e3))
        })
    }, a.validLogin = !0;
    var u = _.debounce(q, 500);

    a.$watch("newDevice.login", function(b) {
        a.validLogin = !0, b && u()
    }), a.getArrayLength = function(a) {
        return _.isArray(a) ? a.length : "string" == typeof a ? i(a).length : -1
    }
};
SettingsDeviceCtrl.$inject = ["$scope", "$http"],
    function() {
        "use strict";

        function a(a, b, c) {
            function d() {
                var a = "YYYY-MM-DD",
                    c = "?start=" + f.start.format(a) + "&end=" + f.end.format(a);

                b.get("/api/slips-to-approve" + c).success(function(a) {
                    f.slips = a, e(), f.sortBy()
                })
            }

            function e() {
                if (f.slips) {
                    var a, b = f.slips,
                        c = f.filter;
                    c.barcode && (a = c.barcode, b = _.filter(b, function(b) {
                        return -1 !== b.barcode.indexOf(a)
                    })), f.filtered = b
                }
            }
            var f = this;
            a.$watch("ctrl.start + ctrl.end", function() {
                f.start && f.end && d()
            }), f.refresh = function() {
                d()
            }, f.approve = function(a) {
                b.post("/api/slips-to-approve", {
                    id: a
                }).success(function(a) {
                    "success" === a.result && d()
                })
            };
            var g = c(d, 5e3);
            a.$on("$destroy", function() {
                c.cancel(g)
            }), f.filter = {
                barcode: ""
            }, a.$watch("ctrl.filter.barcode", function() {
                e();

            }), f.sortOptions = {
                field: "created_at",
                order: "desc"
            }, f.sortBy = function(a) {
                a && (f.sortOptions.field === a ? f.sortOptions.order = "asc" === f.sortOptions.order ? "desc" : "asc" : (f.sortOptions.field = a,
                        f.sortOptions.order = "asc"));
                var b = function(a, b) {
                    return b > a ? -1 : a > b ? 1 : 0
                };
                f.slips.sort(function(a, c) {
                    var d = f.sortOptions.field,
                        e = a[d],
                        g = c[d];
                    return "asc" === f.sortOptions.order ? b(e, g) : b(g, e);

                })
            }, f.isSortedBy = function(a) {
                var b = f.sortOptions;
                return b.field === a ? "asc" === b.order ? "icon-chevron-up" : "icon-chevron-down" : "";

            }
        }
        angular.module("cashier").controller("SlipsToApproveController", a), a.$inject = ["$scope", "$http", "$interval"];

    }();
var UserController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/users/" + a.selectedAccounts[0].id).success(function(b) {
            a.users = b
        })
    }

    function d() {
        a.$apply(function() {
            b.get("/api/users/check/" + encodeURIComponent(a.user.login)).success(function(b) {
                a.validLogin = !b.exists
            })
        })
    }
    a.mode = "list", a.$on("accounts_updated", function() {
        c(),
            a.cancel()
    }), c(), a.createUser = function() {
        a.user = {
            login: "",
            password: "",
            name: "",
            realm: "betting",
            multilogin: !0
        }, a.mode = "edit"
    }, a.editUser = function(b) {
        b.multilogin = b.restricted ? !1 : !0,
            a.serverError = "", a.user = _.clone(b), a.mode = "edit", a.oldLogin = b.login
    }, a.cancel = function() {
        a.mode = "list", a.user = null, a.oldLogin = ""
    }, a.saveUser = function() {
        var d = a.user;
        d && (d.login || (a.showEmptyLoginError = !0),
        d.name || (a.showEmptyNameError = !0), d.id || d.password || (a.showEmptyPasswordError = !0),
        d.login && a.validLogin && (d.id || d.password) && !a.invalidPasswordLength && !a.showEmptyNameError && b.post("/api/users/" + a.selectedAccounts[0].id + "/save", {
            user: d
        }).success(function(b) {
            "success" === b ? (c(), a.mode = "list") : a.serverError = b
        }));

    }, a.validLogin = !0;
    var e = _.debounce(d, 500);
    a.$watch("user.login", function(b) {
        a.showEmptyLoginError = !1,
        b && b !== a.oldLogin && e()
    }), a.$watch("user.password", function(b) {
        a.showEmptyPasswordError = !1,
            a.invalidPasswordLength = !1, b && (b.length < 4 || b.length > 30) && (a.invalidPasswordLength = !0);

    }), a.$watch("user.name", function() {
        a.showEmptyNameError = !1
    })
};
UserController.$inject = ["$scope", "$http"],
    function() {
        "use strict";

        function a(a) {
            function b() {
                a.get("/api/users-admin").success(function(a) {
                    c.users = a
                })
            }
            var c = this;
            c.mode = "list", b()
        }
        angular.module("cashier").controller("userAdminController", a),
            a.$inject = ["$http"]
    }();
var WheelJackpotController = function(a, b) {
    function c() {
        a.isOneAccSelected && b.get("/api/wheel-jackpots/" + a.selectedAccounts[0].id).success(function(b) {
            a.jackpots = b
        })
    }

    function d(b) {
        "ok" === b.status ? (c(), a.mode = "list") : (a.serverError = b.message || "error",
                setTimeout(function() {
                    a.$apply(function() {
                        a.serverError = ""
                    })
                }, 3e3))
    }
    a.mode = "list",
        a.$on("accounts_updated", function() {
            c(), a.cancel()
        }), c(), a.create = function() {
        a.jackpot = {
            color: 1,
            rate: null,
            freq: 600,
            probability: 1e5
        }, a.mode = "create"
    }, a.edit = function(b) {
        a.jackpot = _.clone(b),
            a.mode = "edit"
    }, a.cancel = function() {
        a.jackpot = null, a.mode = "list"
    }, a.save = function() {
        b.post("/api/wheel-jackpots/" + a.selectedAccounts[0].id + "/save", {
            jackpot: a.jackpot
        }).success(d)
    }, a["delete"] = function() {
        b.post("/api/wheel-jackpots/" + a.selectedAccounts[0].id + "/delete", {
            jackpot: a.jackpot
        }).success(d)
    }
};
WheelJackpotController.$inject = ["$scope", "$http"];