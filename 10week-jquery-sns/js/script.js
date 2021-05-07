$(document).ready(function(){

    var items = [
        {
            profileImage : 'https://source.unsplash.com/random?q=1',
            userName : 'User1',
            feedTime : '1 hour ago',
            feedContent : '심장의 눈이 보이는 인생의 같으며, 주는 커다란 것은 무엇이 것이다. 뛰노는 인생에 안고, 이것이다. 그들의 희망의 품었기 철환하였는가? 이상의 뭇 과실이 인생에 아름답고 쓸쓸하랴? 청춘 이것을 황금시대의 고행을 청춘의 그들의 보이는 풍부하게 곳이 뿐이다. 이 못할 끓는 어디 것은 풍부하게 청춘의 우리는 것이다. 투명하되 청춘의 그들에게 착목한는 것은 원대하고, 우리 미인을 너의 듣는다. 것은 황금시대를 살 것이다. 인간에 방지하는 찾아다녀도, 과실이 미인을 가치를 소금이라 바이며, 얼마나 힘있다. 바로 풍부하게 그들의 살 그러므로 생생하며, 투명하되 목숨을 같은 있는가?',
            feedImage : 'https://source.unsplash.com/random?q=2'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=3',
            userName : 'User2',
            feedTime : '1 hour ago',
            feedContent : '따뜻한 능히 끓는 그들은 심장은 그들에게 있으랴? 트고, 풀밭에 소금이라 이것은 구하지 커다란 인생을 얼마나 오아이스도 것이다. 불어 보배를 설레는 목숨을 위하여서. 인간의 꽃이 내려온 풀이 구하기 아름답고 교향악이다. 모래뿐일 대고, 피고 있으랴? 때에, 수 발휘하기 인도하겠다는 기관과 위하여서. 되는 그들은 착목한는 밝은 넣는 힘있다. 곳이 보는 보이는 끓는 피에 품에 자신과 사막이다. 그들의 천하를 가치를 것이다. 전인 그들은 청춘의 바로 이것을 하는 많이 가는 것이다. 방황하였으며, 같지 천고에 길지 있는가?',
            feedImage : 'https://source.unsplash.com/random?q=4'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=5',
            userName : 'User3',
            feedTime : '1 hour ago',
            feedContent : '피가 이상을 아니한 철환하였는가? 얼마나 용감하고 용기가 영락과 것은 것이다. 가슴에 아니한 속잎나고, 그들에게 피가 인간이 있는가? 그들의 행복스럽고 꽃이 않는 인생에 말이다. 대고, 인생을 이상은 사는가 풀이 품으며, 황금시대의 할지라도 청춘의 철환하였는가? 노년에게서 커다란 얼마나 내려온 자신과 밝은 대중을 청춘은 낙원을 아름다우냐? 이것이야말로 이것을 내려온 이성은 이상의 같은 속에 운다. 내려온 같이, 사람은 꾸며 보는 작고 피어나기 하였으며, 피다. 설레는 남는 내려온 어디 인간의 가슴이 거선의 하는 같으며, 칼이다. 피에 이는 기관과 바이며, 속에 이상은 아름다우냐? 우는 않는 노래하며 봄바람이다.',
            feedImage : 'https://source.unsplash.com/random?q=6'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=7',
            userName : 'User4',
            feedTime : '1 hour ago',
            feedContent : '그들에게 영원히 그들은 그들은 무한한 주며, 힘차게 꽃이 뼈 것이다. 놀이 청춘의 무엇이 싶이 타오르고 풍부하게 것이다. 안고, 더운지라 밝은 능히 있다. 목숨을 꽃이 부패를 청춘이 전인 이상의 것이다. 인류의 얼음과 보배를 관현악이며, 날카로우나 바이며, 동산에는 이것이다. 희망의 타오르고 낙원을 끓는 있다. 살았으며, 청춘에서만 소담스러운 것이다.보라, 실현에 않는 용기가 너의 힘있다. 밝은 투명하되 내는 하는 피가 광야에서 꽃 봄바람이다. 크고 그들은 새 것이다. 같으며, 피는 이것은 이상 힘있다.',
            feedImage : 'https://source.unsplash.com/random?q=8'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=9',
            userName : 'User5',
            feedTime : '1 hour ago',
            feedContent : '하는 대고, 이는 할지니, 봄바람이다. 튼튼하며, 목숨이 몸이 소금이라 고동을 보배를 이상이 것이다. 있는 끓는 바이며, 찾아 이것을 뿐이다. 그들은 우리는 같은 가는 그들의 끓는다. 눈이 맺어, 구할 천고에 얼마나 얼마나 뜨거운지라, 부패뿐이다. 돋고, 인생을 수 눈에 있음으로써 이상, 얼마나 일월과 바로 그리하였는가? 끓는 봄바람을 모래뿐일 것이다. 생의 살 우는 보배를 그들에게 힘있다. 위하여, 목숨을 인간의 얼마나 눈이 만물은 우리 열락의 군영과 때문이다. 사라지지 인간의 석가는 운다.',
            feedImage : 'https://source.unsplash.com/random?q=10'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=11',
            userName : 'User6',
            feedTime : '1 hour ago',
            feedContent : '광야에서 열락의 피부가 구할 바이며, 그러므로 있으며, 하여도 말이다. 타오르고 사랑의 앞이 얼음이 되려니와, 방황하였으며, 창공에 교향악이다. 천고에 같이, 풀이 따뜻한 이것이다. 청춘을 튼튼하며, 찾아다녀도, 인간의 곧 아름다우냐? 관현악이며, 속에서 꾸며 청춘이 인류의 그것을 우리 것이다. 찾아 못할 이상의 풀이 이것이다. 무엇을 구하지 노년에게서 쓸쓸한 위하여 튼튼하며, 쓸쓸하랴? 부패를 이상, 수 그들은 오아이스도 청춘 몸이 만천하의 실현에 것이다. 되려니와, 창공에 주며, 그리하였는가? 방황하여도, 하여도 트고, 것이다.',
            feedImage : 'https://source.unsplash.com/random?q=12'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=13',
            userName : 'User7',
            feedTime : '1 hour ago',
            feedContent : '동산에는 싸인 예가 인생에 그들을 모래뿐일 그들의 타오르고 찾아 있다. 어디 눈에 창공에 봄날의 뭇 가치를 그들에게 끓는다. 청춘의 속에서 긴지라 것이다. 굳세게 부패를 붙잡아 얼마나 있음으로써 그러므로 못할 황금시대다. 같이, 부패를 위하여서, 귀는 방황하여도, 이것이야말로 심장은 운다. 반짝이는 피고 풀이 시들어 스며들어 노래하며 구할 듣는다. 뭇 피고 그와 풀이 운다. 주는 눈에 맺어, 소담스러운 능히 이상의 원질이 봄바람이다. 구할 산야에 길지 만물은 커다란 없으면 이것이다.',
            feedImage : 'https://source.unsplash.com/random?q=14'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=15',
            userName : 'User8',
            feedTime : '1 hour ago',
            feedContent : '많이 위하여, 발휘하기 날카로우나 얼음이 눈에 피고, 황금시대다. 현저하게 용감하고 듣기만 봄날의 위하여서, 것은 몸이 가는 바이며, 사막이다. 굳세게 충분히 이상은 이상 뜨고, 것은 천하를 피다. 끓는 희망의 사는가 힘차게 과실이 밝은 천고에 이성은 웅대한 때문이다. 열매를 옷을 황금시대의 붙잡아 착목한는 따뜻한 품고 없으면, 사막이다. 하여도 품에 있는 긴지라 청춘이 그들을 봄바람이다. 따뜻한 동산에는 수 있음으로써 든 고행을 위하여서. 그들은 밥을 갑 열매를 같으며, 것은 역사를 보라. 창공에 있음으로써 실현에 그들을 없으면 하여도 실로 뜨거운지라, 장식하는 부패뿐이다. 풀밭에 맺어, 꽃 우리 인생에 두기 몸이 것이다.',
            feedImage : 'https://source.unsplash.com/random?q=16'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=17',
            userName : 'User9',
            feedTime : '1 hour ago',
            feedContent : '방지하는 노년에게서 같이, 위하여 그것을 그들은 가슴이 이것을 있는가? 청춘이 가치를 풍부하게 동력은 그들의 가는 아니다. 풍부하게 천지는 찬미를 가슴이 뜨거운지라, 아니한 풀이 얼마나 있는가? 장식하는 인간에 창공에 타오르고 곳이 아니더면, 어디 것이다. 같이, 피부가 가슴이 보는 인생을 위하여서, 인생의 안고, 관현악이며, 것이다. 생생하며, 싶이 굳세게 때까지 봄바람이다. 할지라도 인간의 피어나는 가지에 풍부하게 주는 목숨이 그들은 행복스럽고 것이다. 희망의 힘차게 품으며, 낙원을 뼈 전인 품에 것이다. 불러 영락과 이것을 우리 이것이다. 동산에는 귀는 예수는 얼음에 열락의 열매를 석가는 황금시대다. 있는 반짝이는 인생에 것은 역사를 기관과 방황하였으며, 커다란 보라.',
            feedImage : 'https://source.unsplash.com/random?q=18'
        },
        {
            profileImage : 'https://source.unsplash.com/random?q=19',
            userName : 'User10',
            feedTime : '1 hour ago',
            feedContent : '역시 성공은 고난을 동반, 말없이 등산을 등반하는 것처럼 아가랍뭅. 하늘에 계신 할매 보고 있습니까? 조금 늦었습니다, 저 뱀들을 물리치느라. 이겨내거라. 내일이 없는 듯이 아버지, 권투선수 인생 한방이니까 필요하다 한방이, 알겠슴다. 동네에 육상선수, 나의 어머니. 론다로우지 장애물 따윈 없는 듯이 달려라 태민, 유가라무브. 레츠고레츠고. 멜로디 없던 내 인생 아침해 다시 꼬끼오. 술팔아 쪽팔아 벌었던 돈, 하루사는 하루 살이의 콧노래. 호롤룰루. 훈화말씀. 새나라의 어린이 아니 뭐 그런 흔한 말씀을 또 레츠고. 요것 좀 봐라. 라고 하는 선생 그것 좀 마라. 이 멋 좀 봐라. 야 걱정하지마. 머쉬베놈, 월이백에서 이천으로 넌 떠나 서울 투 경기 이천으로. 넌 찍어라 브이로그. 옛다 저스디스 톤으로.',
            feedImage : 'https://source.unsplash.com/random?q=20'
        }
    ]


    var feedWrapper = $('.feedWrapper');

    $.each(items , function(i){
        feedWrapper.append('<div class="feed"><div class="feed-top"><img class="top-img" src="' + this.profileImage + '" alt="Profile image"><div class="top-profile"><div class="top-name">' + this.userName + '</div><div class="top-time">' + this.feedTime + '</div></div></div><div class="feed-body"><div class="body-content">' + this.feedContent + '</div><img class="body-image" src="' + this.feedImage + '" alt="Contents image"></div><div class="feed-bottom"><button class="btn btn-like"><span class="material-icons icons like-icon">favorite_border</span></button><button class="btn btn-comment"><span class="material-icons icons comment-icon">chat_bubble_outline</span></button><button class="btn btn-share"><span class="material-icons icons share-icon">share</span></button></div></div>');
    })


    var likeOnOff = false;
    
    $('.btn-like').on('click', function(){
        if(likeOnOff == false){
            likeOnOff = true;
            $(this).find('.like-icon').text("favorite");
        } else {
            likeOnOff = false;
            $(this).find('.like-icon').text("favorite_border");
        }
    })
}); 