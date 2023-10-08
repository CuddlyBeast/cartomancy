function finalMessage(){
    let randomNumber = Math.floor(Math.random() * 8);
    
    let foresight = ''
    
    switch (randomNumber){
    case 0:
    foresight = 'All our dreams can come true, if we have the courage to pursue them.'
    break;
    case 1:
    foresight = 'The secret of getting ahead is getting started.';
    break;
    case 2:
    foresight = 'Don\’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.';
    break;
    case 3:
    foresight = 'It\’s hard to beat a person who never gives up.';
    break;
    case 4:
    foresight = 'We need to accept that we won\’t always make the right decisions, that we\’ll screw up royally sometimes―understanding that failure is not the opposite of success, it\’s part of success.';
    break;
    case 5:
    foresight = 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.';
    break;
    case 6:
    foresight = 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.';
    break;
    case 7:
    foresight = 'Do what you feel in your heart to be right―for you\’ll be criticized anyway.';
    break;
    case 8:
    foresight = 'You can either experience the pain of discipline or the pain of regret. The choice is yours.';
    break;
    }
    return foresight
    }



  
