var CAMPAIGNURLBUILDER = {
        _inputs: null,
        _iframe: null,
        _final_url: null,
        change(iterate) {
                var t = this;
                if (iterate == 0) {
                        t._inputs[iterate].addEventListener("change", function () {
                                var website = this.value;
                                t._iframe.src = website;
                        });
                } else {
                        t._inputs[iterate].addEventListener("keyup", function () {
                                var website = t._inputs[0].value;
                                var final_url = website;
                                final_url += (t._inputs[1].value !== "" ? "?utm_source=" + encodeURIComponent(t._inputs[1].value) : "")
                                final_url += (t._inputs[2].value !== "" ? "&utm_medium=" + encodeURIComponent(t._inputs[2].value) : "")
                                final_url += (t._inputs[3].value !== "" ? "&utm_campaign=" + encodeURIComponent(t._inputs[3].value) : "")
                                t._final_url.value = final_url;
                        });
                }
        },
        init(website_el, source_el, medium_el, campaign_el, iframe_el, final_url_el) {
                this._inputs = [];
                this._inputs.push(website_el);
                this._inputs.push(source_el);
                this._inputs.push(medium_el);
                this._inputs.push(campaign_el);
                this._iframe = iframe_el;
                this._final_url = final_url_el;
                for (var iterate = 0; iterate < this._inputs.length; iterate++) {
                        this.change(iterate);
                }
        }
}
