
var sac_year = '2019';

var o_committee = {
    "Conference Chair": [["Chih-Cheng Hung", "Kennesaw State University", "Kennesaw, Georgia, USA", "chung1@kennesaw.edu"]],
    "Conference Vice-Chair": [["George A. Papadopoulos", "University of Cyprus", "Nicosia, Cyprus", "george@cs.ucy.ac.cy"]], 
    "Program Co-Chair": [["Dongwan Shin", "New Mexico Tech", "Socorro, New Mexico, USA", "doshin@nmt.edu"], 
                        ["Seiji Isotani", "University of São Paulo", "Brazil", "xxxx@xxxx.br"]], 
    "Tutorials Chair": [["Andreas Andreou", "University of Cyprus", "Nicosia, Cyprus", "aandreou@cs.ucy.ac.cy"]], 
    "Publication Chair": [["Hossain Shahriar", "Kennesaw State University", "Kennesaw, Georgia, USA", "hshahria@kennesaw.edu"]], 
    "Local Arrangement Chair": [["Constantinos Pattichis", "University of Cyprus", "Nicosia, Cyprus", "pattichi@cs.ucy.ac.cy"]], 
    "Treasurer":[["John Kim", "Utica College", "Utica, New York, USA", "editoracr@gmail.com"]], 
    "Posters Co-Chair":[["Alessio Bechini", "University of Pisa", "Pisa, Italy", "a.bechini@ing.unipi.it"], 
                        ["One Co-Chair from", "George A. Papadopoulos’s local committee", "Cyprus", "x@xxx.ac.cy"]],
    "SRC Chair": [["Armin R. Mikler", "University of North Texas", "Denton, Texas, USA", "mikler@unt.edu"]], 
    "Publicity Chair": [["Junyoung Heo", "Hansung University", "Seoul, Korea", "jyheo@hansung.ac.kr"]]
};

var important_dates = {"submission_date":["Sept 15, 2018"], 
    "submission_tutorial_proposal_date":["Sept 20, 2018"],
    "noti_tutorial_acceptance_date":["Oct 20, 2018"],
    "noti_paper_accept_date":["Nov 10, 2018"],
    "noti_src_accept_date": ["Nov 10, 2018"],
    "camera_ready_date": ["Nov 25, 2018"],
    "author_registration_date": ["Dec 10, 2018"],
    "src_posters_date": ["Tuesday April 10, 2019"],
    "posters_date": ["Wednesday April 11, 2019"],
    "src_oral_date": ["Thursday April 12, 2019"]
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
});
