// 오늘의 운세 앱 JavaScript

// 십이지신 데이터
const zodiacAnimals = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
const zodiacSymbols = ["🐭", "🐂", "🐅", "🐰", "🐉", "🐍", "🐎", "🐑", "🐒", "🐔", "🐶", "🐷"];

// 확장된 운세 데이터 (20개 이상)
const fortuneSets = [
    {
        overall: "오늘은 당신에게 새로운 기회의 문이 열리는 날입니다. 평소 망설였던 일이 있다면 과감히 도전해보세요. 주변 사람들의 조언을 귀담아 들으면 더 좋은 결과를 얻을 수 있습니다. 오전보다는 오후에 중요한 일을 처리하는 것이 유리합니다.",
        love: {stars: 4, description: "연인과의 관계가 한층 깊어지는 시기입니다. 솔직한 대화로 서로를 더 잘 이해할 수 있게 됩니다."},
        business: {stars: 5, description: "당신의 노력이 빛을 발하는 날! 상사나 동료들에게 인정받을 일이 생길 것입니다."},
        health: {stars: 3, description: "과로에 주의하세요. 충분한 휴식과 가벼운 운동으로 컨디션을 유지하는 것이 중요합니다."},
        money: {stars: 4, description: "예상치 못한 수입이 들어올 수 있습니다. 하지만 충동구매는 자제하는 것이 좋겠네요."},
        lucky_number: "7",
        lucky_color: "하늘색"
    },
    {
        overall: "차분하고 신중한 태도가 필요한 하루입니다. 급하게 서두르기보다는 천천히 계획을 세워 진행하세요. 가족이나 친한 친구와의 시간이 당신에게 큰 위안이 될 것입니다. 저녁 시간에는 독서나 명상으로 마음을 다스려보세요.",
        love: {stars: 3, description: "연인과 사소한 의견 차이가 있을 수 있으나, 서로를 배려한다면 금세 해결됩니다."},
        business: {stars: 4, description: "팀워크가 중요한 날입니다. 동료들과의 협력을 통해 좋은 성과를 낼 수 있습니다."},
        health: {stars: 5, description: "활력이 넘치는 하루! 운동이나 야외활동을 즐기기에 최적의 컨디션입니다."},
        money: {stars: 3, description: "평소와 비슷한 금전 흐름입니다. 미래를 위한 저축 계획을 세워보는 것도 좋겠습니다."},
        lucky_number: "3",
        lucky_color: "초록색"
    },
    {
        overall: "창의적인 아이디어가 샘솟는 날입니다. 평소 관심 있던 분야에 도전해보거나 새로운 취미를 시작하기에 좋은 때입니다. 긍정적인 에너지가 넘치므로 주변 사람들에게도 좋은 영향을 미칠 것입니다.",
        love: {stars: 5, description: "로맨틱한 분위기가 가득한 날! 연인에게 깜짝 선물이나 이벤트를 준비해보세요."},
        business: {stars: 3, description: "일상적인 업무는 순조롭지만, 새로운 프로젝트는 조금 더 준비가 필요합니다."},
        health: {stars: 4, description: "전반적으로 양호한 컨디션입니다. 충분한 수분 섭취를 잊지 마세요."},
        money: {stars: 5, description: "재물운이 상승하는 시기! 투자나 부업에서 좋은 소식이 있을 수 있습니다."},
        lucky_number: "8",
        lucky_color: "금색"
    },
    {
        overall: "인간관계에서 좋은 소식이 들려오는 날입니다. 오랫동안 연락하지 못했던 친구나 지인으로부터 반가운 연락이 올 수 있습니다. 새로운 만남도 기대해볼 만합니다. 소통과 교류를 통해 많은 것을 배우게 될 것입니다.",
        love: {stars: 4, description: "새로운 인연의 가능성이 높은 날입니다. 열린 마음으로 사람들을 대해보세요."},
        business: {stars: 4, description: "네트워킹이 중요한 시기입니다. 새로운 비즈니스 파트너를 만날 수 있을 것입니다."},
        health: {stars: 3, description: "스트레스 관리에 신경써야 합니다. 충분한 수면을 취하는 것이 중요해요."},
        money: {stars: 3, description: "안정적인 금전운입니다. 큰 변화보다는 꾸준한 관리가 필요한 시기네요."},
        lucky_number: "9",
        lucky_color: "분홍색"
    },
    {
        overall: "집중력이 높아져서 학습이나 업무 능률이 크게 향상되는 날입니다. 평소 미뤄둔 중요한 일들을 처리하기에 최적의 타이밍입니다. 목표 달성을 위한 구체적인 계획을 세우고 실행에 옮겨보세요.",
        love: {stars: 3, description: "연인과의 시간보다는 자기계발에 집중하는 것이 좋은 날입니다."},
        business: {stars: 5, description: "업무 효율성이 최고조에 달하는 날! 중요한 프로젝트를 마무리하기에 완벽합니다."},
        health: {stars: 4, description: "정신적으로 매우 맑고 활력이 넘치는 상태입니다. 운동으로 몸도 단련해보세요."},
        money: {stars: 2, description: "지출이 늘어날 수 있으니 가계부 관리에 신경쓰세요."},
        lucky_number: "1",
        lucky_color: "파란색"
    },
    {
        overall: "감정의 기복이 있을 수 있는 하루입니다. 마음을 차분히 다스리고 균형을 찾는 것이 중요합니다. 자연을 가까이하거나 좋아하는 음악을 들으며 내면의 평화를 찾아보세요. 저녁에는 따뜻한 차 한 잔의 여유를 즐겨보세요.",
        love: {stars: 2, description: "감정적으로 예민할 수 있으니 연인과의 대화에서는 신중함이 필요합니다."},
        business: {stars: 3, description: "평상시보다 실수가 잦을 수 있으니 꼼꼼히 점검하는 습관을 기르세요."},
        health: {stars: 2, description: "몸과 마음이 모두 피로한 상태입니다. 충분한 휴식이 절대적으로 필요해요."},
        money: {stars: 4, description: "의외의 수입원이 생길 수 있습니다. 하지만 투자는 신중하게 결정하세요."},
        lucky_number: "6",
        lucky_color: "라벤더"
    },
    {
        overall: "활기찬 에너지가 넘치는 하루가 될 것입니다. 새로운 도전에 대한 용기가 생기고, 평소보다 적극적인 모습을 보이게 될 것입니다. 운동이나 야외 활동을 통해 더욱 건강한 하루를 만들어보세요.",
        love: {stars: 5, description: "활발한 데이트나 새로운 장소에서의 만남이 기대되는 날입니다."},
        business: {stars: 4, description: "리더십을 발휘할 기회가 주어집니다. 팀을 이끌고 성과를 만들어보세요."},
        health: {stars: 5, description: "체력이 최고조! 평소보다 더 많은 활동을 해도 문제없는 날입니다."},
        money: {stars: 3, description: "활동적인 하루로 인해 지출이 늘어날 수 있으니 적당한 선에서 조절하세요."},
        lucky_number: "5",
        lucky_color: "주황색"
    },
    {
        overall: "지혜와 통찰력이 높아지는 날입니다. 복잡했던 문제들이 명확해지고, 올바른 판단을 내릴 수 있는 능력이 향상됩니다. 중요한 결정을 내려야 한다면 오늘이 좋은 타이밍일 것입니다.",
        love: {stars: 4, description: "연인과의 깊은 대화를 통해 관계가 한 단계 발전할 수 있습니다."},
        business: {stars: 5, description: "전략적 사고가 빛나는 날! 장기적인 계획을 세우기에 최적의 시기입니다."},
        health: {stars: 4, description: "정신 건강이 매우 좋은 상태입니다. 몸의 컨디션도 따라서 좋아질 것입니다."},
        money: {stars: 4, description: "현명한 투자 판단으로 좋은 결과를 얻을 수 있는 날입니다."},
        lucky_number: "4",
        lucky_color: "보라색"
    }
];

// DOM 요소들
const mainScreen = document.getElementById('main-screen');
const resultScreen = document.getElementById('result-screen');
const birthYear = document.getElementById('birth-year');
const birthMonth = document.getElementById('birth-month');
const birthDay = document.getElementById('birth-day');
const fortuneBtn = document.getElementById('fortune-btn');
const resetBtn = document.getElementById('reset-btn');

// 초기화 함수
function init() {
    populateYearOptions();
    populateMonthOptions();
    populateDayOptions();
    
    // 이벤트 리스너 등록
    fortuneBtn.addEventListener('click', showFortune);
    resetBtn.addEventListener('click', resetToMain);
    birthMonth.addEventListener('change', populateDayOptions);
}

// 연도 옵션 생성 (1940-2025)
function populateYearOptions() {
    for (let year = 2025; year >= 1940; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `${year}년`;
        birthYear.appendChild(option);
    }
}

// 월 옵션 생성
function populateMonthOptions() {
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = `${month}월`;
        birthMonth.appendChild(option);
    }
}

// 일 옵션 생성
function populateDayOptions() {
    // 기존 일 옵션들 제거 (첫 번째 기본 옵션 제외)
    while (birthDay.children.length > 1) {
        birthDay.removeChild(birthDay.lastChild);
    }
    
    const selectedMonth = parseInt(birthMonth.value);
    const selectedYear = parseInt(birthYear.value);
    
    if (!selectedMonth || !selectedYear) return;
    
    // 해당 월의 일수 계산
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = `${day}일`;
        birthDay.appendChild(option);
    }
}

// 십이지 계산
function getZodiac(year) {
    // 1900년이 쥐띠 시작
    const baseYear = 1900;
    const zodiacIndex = (year - baseYear) % 12;
    return {
        name: zodiacAnimals[zodiacIndex],
        symbol: zodiacSymbols[zodiacIndex]
    };
}

// 운세 계산
function calculateFortune(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    
    // 운세 번호 계산 (생년월일 + 오늘 날짜)
    const fortuneNumber = (
        parseInt(birthYear) + parseInt(birthMonth) + parseInt(birthDay) +
        currentYear + currentMonth + currentDay
    ) % fortuneSets.length;
    
    return fortuneSets[fortuneNumber];
}

// 별점 생성
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// 운세 보기 함수
function showFortune() {
    const year = birthYear.value;
    const month = birthMonth.value;
    const day = birthDay.value;
    
    // 유효성 검사
    if (!year || !month || !day) {
        alert('생년월일을 모두 선택해주세요!');
        return;
    }
    
    // 십이지 계산
    const zodiac = getZodiac(parseInt(year));
    
    // 운세 계산
    const fortune = calculateFortune(year, month, day);
    
    // 결과 화면에 데이터 설정
    document.querySelector('.zodiac-symbol').textContent = zodiac.symbol;
    document.getElementById('user-zodiac').textContent = zodiac.name + '띠';
    document.getElementById('user-birthdate').textContent = `${year}년 ${month}월 ${day}일`;
    
    // 운세 내용 설정
    document.getElementById('overall-text').textContent = fortune.overall;
    document.getElementById('love-stars').textContent = generateStars(fortune.love.stars);
    document.getElementById('love-text').textContent = fortune.love.description;
    document.getElementById('business-stars').textContent = generateStars(fortune.business.stars);
    document.getElementById('business-text').textContent = fortune.business.description;
    document.getElementById('health-stars').textContent = generateStars(fortune.health.stars);
    document.getElementById('health-text').textContent = fortune.health.description;
    document.getElementById('money-stars').textContent = generateStars(fortune.money.stars);
    document.getElementById('money-text').textContent = fortune.money.description;
    document.getElementById('lucky-number').textContent = fortune.lucky_number;
    document.getElementById('lucky-color').textContent = fortune.lucky_color;
    
    // 화면 전환
    switchScreen(resultScreen);
}

// 메인 화면으로 돌아가기
function resetToMain() {
    // 폼 리셋
    birthYear.value = '';
    birthMonth.value = '';
    birthDay.value = '';
    
    // 일 옵션 초기화
    while (birthDay.children.length > 1) {
        birthDay.removeChild(birthDay.lastChild);
    }
    
    // 화면 전환
    switchScreen(mainScreen);
}

// 화면 전환 함수
function switchScreen(targetScreen) {
    // 현재 활성화된 화면 비활성화
    const currentScreen = document.querySelector('.screen.active');
    if (currentScreen) {
        currentScreen.classList.remove('active');
    }
    
    // 약간의 딜레이 후 새 화면 활성화
    setTimeout(() => {
        targetScreen.classList.add('active');
        
        // 결과 화면인 경우 애니메이션 클래스들 다시 트리거
        if (targetScreen === resultScreen) {
            const animatedElements = targetScreen.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
            animatedElements.forEach(el => {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            });
        }
    }, 100);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);