Kakao.init('d40cefc681caa2163802db29c172b108');
Kakao.isInitialized();
document.getElementById('logout').style.display = 'none';

function kakaoLogin(){
    Kakao.Auth.login({
        success: function(response){
            Kakao.API.request({
                url: '/v2/user/me',
                success: function(response){
                    document.getElementById('user').innerText = response.kakao_account.profile.nickname;
                    document.getElementById('login').style.display = 'none';
                    alert(response.kakao_account.profile.nickname +'님 로그인 되었습니다.')
                    document.getElementById('logout').style.display = 'block';
                    document.getElementById('mrms').style.display = 'block';
                    document.getElementById('user').style.display = 'block';
                }
            })
        }
    })
};
function kakaoLogout(){
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function(response){
                document.getElementById('user').style.display = 'none';
                document.getElementById('login').style.display = 'block';
                document.getElementById('logout').style.display = 'none';
                alert('로그아웃 되었습니다.');
                document.getElementById('mrms').style.display = 'none';
                document.getElementById('user').style.display = 'none';
            }
        })
        Kakao.Auth.setAccessToken(undefined);
    }
};
