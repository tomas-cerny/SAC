
var sac_year = '2020';

var o_committee = {
    "Conference Chair": [["Chih-Cheng Hung", "Kennesaw State University", "Kennesaw, Georgia, USA", "chung1@kennesaw.edu"]],
    "Conference Vice-Chair": [["Tomas Cerny", "Baylor University", "Waco, Texas, USA", "tomas_cerny@baylor.edu"]], 
    "Program Co-Chair": [["Dongwan Shin", "New Mexico Tech", "Socorro, New Mexico, USA", "dongwan.shin@nmt.edu"], 
                        ["Seiji Isotani", "University of São Paulo", "São Paulo, Brazil", "isotani@ieee.org"]], 
    "Tutorials Chair": [["Vaclav Vashek Matyas", "Masaryk University", "Brno, Czechia", "matyas@fi.muni.cz"]], 
    "Publication Chair": [["Hossain Shahriar", "Kennesaw State University", "Kennesaw, Georgia, USA", "hshahria@kennesaw.edu"]], 
    "Local Arrangement Chairs": [["Dana Machova, Dorota, Volavkova & Matej Hrusovsky", "Red Hat Czech", "Brno, Czechia", ""]],
    "Posters Co-Chair":[["Alessio Bechini", "University of Pisa", "Pisa, Italy", "a.bechini@ing.unipi.it"], 
                        ["Miroslav Bures", "Czech Technical University", "Prague, Czechia", "buresm3@fel.cvut.cz"]],
    "SRC Chair": [["Armin R. Mikler", "University of North Texas", "Denton, Texas, USA", "mikler@unt.edu"]], 
    "Publicity Co-Chair": [["Junyoung Heo", "Hansung University", "Seoul, Korea", "jyheo@hansung.ac.kr"],
                        ["Eunjee Song", "Baylor University", "Waco, Texas, USA", "Eunjee_Song@baylor.edu"]],
    "Treasurer":[["John Kim", "Utica College", "Utica, New York, USA", "editoracr@gmail.com"]]
};

var important_dates = {"submission_date":["Sept 15, 2019"], 
    "submission_tutorial_proposal_date":["Sept 25, 2019"],
    "noti_tutorial_acceptance_date":["Oct 20, 2019"],
    "noti_paper_accept_date":["Nov 10, 2019"],
    "noti_src_accept_date": ["Nov 10, 2019"],
    "camera_ready_date": ["Nov 25, 2019"],
    "author_registration_date": ["TBD"],
    "early_registration_date": ["TBD"],
    "late_registration_begin": ["TBD"],
    "stap_date": ["TBD"],
    "stap_noti_date": ["TBD"],
    "src_posters_date": ["Tuesday March 31, 2020"],
    "posters_date": ["Wednesday April 1, 2020"],
    "src_oral_date": ["Thursday April 2, 2020"]
};

function dates_html(date) {
    var ret_txt = '';
    if (date.length > 1)
        ret_txt = '<strike>' + date[0] + '</strike> <b style="color:red">' + date[date.length - 1] + '</b>';
    else
        ret_txt =  date[0];
    return ret_txt;
}

function chair_html(chair) {
    var ret_txt = '';
    for (var k = 0; k < chair.length; k++) {
        if (k === chair.length - 1) {
            tmp = '<a href="mailto:' + chair[k] + '">' + chair[k] + '</a>';
        } else {
            tmp = chair[k];
        }
        ret_txt = ret_txt + tmp + "<br/>";
    }
    return ret_txt;
}

function chairs_html(chairs) {
    var ret_txt = '';
    for (var ch = 0; ch < chairs.length; ch++) {
        ret_txt = ret_txt + chair_html(chairs[ch]) + '<br/>';
    }
    return ret_txt;
}

function make_o_committee_table(o_committee) {
    var html = '';
    i = 0;
    for (var chairs in o_committee) {
        for (var ch in o_committee[chairs]) {
            if (i % 3 == 0)
                html += '<div class="row">';
            var cell_contents = '<div class="col-sm-4"><p>';
            var d = o_committee[chairs][ch];
            tmp = "<b>" + chairs + "</b><br/>";
            cell_contents = cell_contents + tmp;
            for (k = 0; k < d.length; k++) {
                if (k === d.length - 1) {
                    tmp = '<a href="mailto:' + d[k] + '">' + d[k] + '</a>'
                } else {
                    tmp = d[k]
                }
                cell_contents = cell_contents + tmp + "<br/>"
            }
            cell_contents += '</p></div>';
            html += cell_contents;
            if (i % 3 == 2)
                html += '</div>';
            i++;
        }
    }
    if (i % 3 == 2) html += '</div>';
    return html;
}

$(function() {
    $('title').text('SAC ' + sac_year);
    $('.sac_year').text(sac_year);
    $('#src_chair').html(chairs_html(o_committee["SRC Chair"]));
    $('#poster_chair').html(chairs_html(o_committee["Posters Co-Chair"]));
    $('#tutorial_chair').html(chairs_html(o_committee["Tutorials Chair"]));
    $('#o_committee').html(make_o_committee_table(o_committee));
    for (var key in important_dates) {
        $('#' + key).html(dates_html(important_dates[key]));
    }
    for (var key in important_dates) {
        $('.' + key).html(dates_html(important_dates[key]));
    }
});

