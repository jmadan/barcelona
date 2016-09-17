let router = require('express').Router();


router.get('/getmearesponse', (req, res) => {
    res.status(200).json({ message: 'ciao' });
});

router.get('/getnewsfeed', (req, res) => {
    res.status(200).json({ message: 'got this one too' });
});

router.get('/getmyfeed', (req, res) => {
    res.status(200).json({
        feed: [{
    "storyId": "12127761",
    "title": "Office Chat, Task Management, Video Chat Without Integrating Across Platforms",
    "url": "https://blog.hibox.co/business-chat-is-dead-we-fixed-it-introducing-hibox-87fb5dbb4840#.eti0qmx01",
    "storyType": "story",
    "score": 1,
    "category": ["Productivity", "Remote Working", "Startup", "Tech", "Future Of Work"]
}, {
    "storyId": "12127198",
    "title": "Uber faces UK court battle with drivers over employment status",
    "url": "https://www.theguardian.com/technology/2016/jul/19/uber-drivers-court-tribunal-self-employed-uk-employment-law",
    "storyType": "story",
    "score": 3,
    "category": ["Productivity", "Remote Working", "Startup", "Tech", "Future Of Work"]
}]
    });
});

module.exports = router;
