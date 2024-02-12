$(function () {
    var setRecodeTime = function ($btn, time) {
        if (time > 0) {
            $btn.html("Reget code(" + time + "s)");
            $btn.prop("disabled", true);
            setTimeout(() => {
                setRecodeTime($btn, --time);
            }, 1000);
        } else {
            $btn.html("Get code");
            $btn.prop("disabled", false);
        }

    }
    $("#btnGetcode").on("click", function () {
        var $btn = $(this);
        var $emailInput = $("#email");
        var email = $emailInput.val();
        if (!email) {
            $emailInput.focus();
            return;
        }
        $.post("Home/GetVerifiedCode", { "email": email }, function (data) {
            if (data["status"] == "success") {

                setRecodeTime($btn, 60);
            } else {
                alert(data["message"]);
            }
        });
    });
    $("form#form-register").on("submit", function () {
        var $form = $(this),
            $btn = $form.find('button[type="submit"]'),
            url = $form.attr('action'),
            formData = $form.serialize();
        $.$btnStatus($btn, "loading");
        $.post(url, formData, function (data) {
            if (data['status'] == "success") {
                toastr.success(data['message']);
                setTimeout(function () {
                    window.location.href = data['backUrl'];
                }, 300);
            } else {
                $.$btnStatus($btn, "reset");
                var $elem = $form.find('[name="' + data["data"] + '"]')
                if ($elem.length > 0) {
                    $elem.focus();
                    $.$setFormInputStatus($elem, data['message']);
                    return;
                }
                toastr.error(data['message']);
            }
        });

        return false;
    });
    (timeleft > 0)
    {
        $.setRecodeTime($("#btnGetcode").timeLeft);
    }
});
