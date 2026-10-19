document.addEventListener('DOMContentLoaded', () => {
    const stageStart = document.getElementById('stageStart');
    const stageBloom = document.getElementById('stageBloom');
    const stageWishSuccess = document.getElementById('stageWishSuccess');
    const giftBox = document.getElementById('giftBox');
    const resetBtn = document.getElementById('resetBtn');
    const shockwave = document.getElementById('shockwave');

    const fireworkBtn = document.getElementById('fireworkBtn');
    const photoAlbumBtn = document.getElementById('photoAlbumBtn');
    const fortuneBtn = document.getElementById('fortuneBtn');
    const flowerGardenBtn = document.getElementById('flowerGardenBtn');
    const changeQuoteBtn = document.getElementById('changeQuoteBtn');

    const galaxyModal = document.getElementById('galaxyModal');
    const closeGalaxyModal = document.getElementById('closeGalaxyModal');
    const photoModal = document.getElementById('photoModal');
    const closePhotoModal = document.getElementById('closePhotoModal');
    const fortuneModal = document.getElementById('fortuneModal');
    const closeFortuneModal = document.getElementById('closeFortuneModal');
    const gardenModal = document.getElementById('gardenModal');
    const closeGardenModal = document.getElementById('closeGardenModal');
    const letterModal = document.getElementById('letterModal');
    const closeLetterModal = document.getElementById('closeLetterModal');

    const backHomeFromFortuneBtn = document.getElementById('backHomeFromFortuneBtn');
    const backHomeFromGardenBtn = document.getElementById('backHomeFromGardenBtn');

    const shootingStar = document.getElementById('shootingStar');
    const pageWishDisplayText = document.getElementById('pageWishDisplayText');
    const backToMainFromWish = document.getElementById('backToMainFromWish');

    const planetItems = document.querySelectorAll('.planet-item');
    const galaxyMainView = document.getElementById('galaxyMainView');
    const starDetailView = document.getElementById('starDetailView');
    const realmIcon = document.getElementById('realmIcon');
    const realmTitle = document.getElementById('realmTitle');
    const realmMessage = document.getElementById('realmMessage');
    const backToStarsBtn = document.getElementById('backToStarsBtn');

    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const soundIcon = document.getElementById('soundIcon');
    const soundTooltip = soundToggleBtn.querySelector('.sound-tooltip');
    const bgMusic = document.getElementById('bgMusic');
    const fallingPetalsContainer = document.getElementById('fallingPetalsContainer');

    const magicDustContainer = document.getElementById('magicDustContainer');
    const gardenPetalsContainer = document.getElementById('gardenPetalsContainer');

    const userWishInput = document.getElementById('userWishInput');
    const sendWishBtn = document.getElementById('sendWishBtn');

    let isMusicPlaying = false;

    // --- XỬ LÝ NHẠC NỀN ---
    soundToggleBtn.addEventListener('click', () => {
        if (!isMusicPlaying) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                soundIcon.className = "fa-solid fa-volume-high";
                soundTooltip.textContent = "Đang phát nhạc 🎶";
            }).catch(e => console.log(e));
        } else {
            bgMusic.pause();
            isMusicPlaying = false;
            soundIcon.className = "fa-solid fa-music";
            soundTooltip.textContent = "Bật nhạc nền 🎵";
        }
    });

    // --- CÁNH HOA RƠI CHUNG ---
    const petalSymbols = ['🌸', '🌹', '✨', '💎', '💮'];
    function createFallingPetal() {
        const petal = document.createElement('div');
        petal.className = 'falling-petal';
        petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
        petal.style.left = `${Math.random() * window.innerWidth}px`;
        petal.style.fontSize = `${Math.random() * 14 + 14}px`;
        petal.style.animationDuration = `${Math.random() * 5 + 4}s`;
        fallingPetalsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), 8000);
    }
    setInterval(createFallingPetal, 350);

    // --- HIỆU ỨNG BỤI PHÉP THUẬT (QUẺ BÓI) ---
    function createMagicSparkle() {
        if (!fortuneModal.classList.contains('show')) return;
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        const size = Math.random() * 12 + 6;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.animationDuration = `${Math.random() * 2 + 2}s`;
        magicDustContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 4000);
    }
    setInterval(createMagicSparkle, 120);

    // --- HIỆU ỨNG CÁNH HOA & LÁ BAY (VƯỜN HOA) ---
    const gardenIcons = ['🌸', '🌷', '🌺', '🍃', '🌿', '✨'];
    function createGardenPetal() {
        if (!gardenModal.classList.contains('show')) return;
        const petal = document.createElement('div');
        petal.className = 'garden-leaf-petal';
        petal.textContent = gardenIcons[Math.floor(Math.random() * gardenIcons.length)];
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.top = `-20px`;
        petal.style.fontSize = `${Math.random() * 18 + 16}px`;
        petal.style.animationDuration = `${Math.random() * 3 + 3}s`;
        gardenPetalsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), 6000);
    }
    setInterval(createGardenPetal, 180);

    // --- DATA CÁC TINH CẦU ---
    const starRealms = [
        { icon: "🌹", title: "Tinh Cầu Tình Yêu & Sắc Đẹp", message: "✨ Chúc bạn luôn rạng rỡ, tự tin và tỏa sáng như đóa hồng kiêu sa nhất!" },
        { icon: "💖", title: "Tinh Cầu Hạnh Phúc & Bình An", message: "🌟 Chúc bạn luôn được yêu thương vô điều kiện và ngập tràn nụ cười ấm áp!" },
        { icon: "💎", title: "Tinh Cầu Thành Công Rực Rỡ", message: "🌷 Mong mọi ước mơ và dự định của bạn đều thuận buồm xuôi gió!" },
        { icon: "🌙", title: "Tinh Cầu Phép Màu & May Mắn", message: "💫 Chúc bạn một đời bình an, mỗi bước chân đi qua đều là hoa ngập lối!" },
        { icon: "⭐", title: "Tinh Cầu Thanh Xuân Tươi Trẻ", message: "🎉 Chúc bạn mãi giữ được năng lượng tích cực và luôn hạnh phúc trọn vẹn!" }
    ];

    // --- DATA RÚT QUẺ VÀ HIỆU ỨNG LẮC QUẺ ---
   const fortunes = [
        "🔮 Quẻ Đại Cát: Trong 24h tới, bạn sẽ nhận được một tin vui ngọt ngào khiến bạn mỉm cười cả ngày!",
        "✨ Quẻ Sắc Đẹp: Vẻ đẹp và sự rạng rỡ của bạn đang ở thời điểm tỏa sáng nhất, thu hút mọi điều tốt đẹp!",
        "💖 Quẻ Tình Yêu: Người luôn yêu thương và trân trọng bạn đang chuẩn bị một bất ngờ dành riêng cho bạn!",
        "🌟 Quẻ May Mắn: Mọi ước mơ và dự định sắp tới của bạn đều sẽ gặt hái thành công ngoài mong đợi!",
        "💰 Quẻ Tài Lộc: Viễn cảnh tài chính tươi sáng đang đến gần, chuẩn bị đón nhận những món quà bất ngờ nhé!",
        "🎓 Quẻ Trí Tuệ: Mọi quyết định và lựa chọn của bạn trong thời gian tới đều vô cùng sáng suốt và đúng đắn!",
        "🌸 Quẻ An Yên: Bình an và sự dịu dàng sẽ bao bọc lấy bạn, giúp tâm hồn bạn luôn thư thái và hạnh phúc!",
        "🚀 Quẻ Thăng Tiến: Công việc và học tập của bạn sắp tới sẽ có bước đột phá rực rỡ, ai cũng phải ngưỡng mộ!",
        "💌 Quẻ Bức Thư Mật: Sẽ có một lời tỏ tình hoặc một lời cảm ơn chân thành từ người quan trọng gửi đến bạn!",
        "🎉 Quẻ Niềm Vui: Tuần mới của bạn sẽ ngập tràn những buổi gặp gỡ vui vẻ, tiếng cười và năng lượng tích cực!",
        "👑 Quẻ Nữ Vương: Bạn sinh ra để tỏa sáng và xứng đáng với tất cả những điều tuyệt vời nhất trên đời này!",
        "🍀 Quẻ Cát Tường: Mọi muộn phiền sẽ tan biến, nhường chỗ cho may mắn ngọt ngào tràn ngập trong tim!"
    ];

    const spinFortuneBtn = document.getElementById('spinFortuneBtn');
    const fortuneResultText = document.getElementById('fortuneResultText');
    const crystalBall = document.getElementById('crystalBall');
    let isShakingFortune = false;
    let lastFortuneIndex = -1; // Lưu vị trí quẻ vừa rút để tránh lặp lại lân kế tiếp

    function shakeAndDrawFortune() {
        if (isShakingFortune) return;
        isShakingFortune = true;

        crystalBall.classList.add('shaking');
        spinFortuneBtn.disabled = true;
        spinFortuneBtn.style.opacity = '0.6';
        fortuneResultText.textContent = "🔮 Đang lắc quẻ... Xin hãy đợi phép màu!";
        
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 40);

        setTimeout(() => {
            crystalBall.classList.remove('shaking');
            
            // Lựa chọn chỉ số ngẫu nhiên mới khác hẳn với lần trước
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * fortunes.length);
            } while (randomIndex === lastFortuneIndex && fortunes.length > 1);
            
            lastFortuneIndex = randomIndex;
            
            fortuneResultText.textContent = fortunes[randomIndex];
            
            createBurst(window.innerWidth / 2, window.innerHeight / 2, 70);
            spinFortuneBtn.disabled = false;
            spinFortuneBtn.style.opacity = '1';
            isShakingFortune = false;
        }, 1200);
    }

    spinFortuneBtn.addEventListener('click', shakeAndDrawFortune);
    crystalBall.addEventListener('click', shakeAndDrawFortune);

    // --- DATA HÁI HOA NHẬN MẬT THƯ ---
    const flowerMessages = [
        "🌹 Hoa Hồng: 'Tình yêu và niềm vui sẽ luôn ngập tràn trong từng khoảnh khắc cuộc sống của bạn!'",
        "🌻 Hướng Dương: 'Luôn hướng về phía ánh mặt trời, rạng rỡ, tự tin và kiêu hãnh nhé!'",
        "🌷 Hoa Tulip: 'Một tình yêu thuần khiết, dịu dàng và bình an nhất sẽ luôn đồng hành cùng bạn!'",
        "💐 Cẩm Tú Cầu: 'Cảm ơn vì đã luôn mang lại sự ấm áp và hạnh phúc cho mọi người xung quanh!'"
    ];

    const flowerCards = document.querySelectorAll('.flower-card-item');
    const flowerSecretMsg = document.getElementById('flowerSecretMsg');

    flowerCards.forEach(card => {
        card.addEventListener('click', () => {
            const idx = card.getAttribute('data-flower');
            flowerSecretMsg.textContent = flowerMessages[idx];
            const rect = card.getBoundingClientRect();
            createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);
        });
    });

    // --- ALBUM ẢNH KỶ NIỆM (ĐÃ THAY BẰNG DẠNG FILE JPG CỦA BẠN) ---
   const photoList = [
        { 
            url: "anh1.jpg", 
            caption: "Đóa hoa rực rỡ nhất 🌸" 
        },
        { 
            url: "anh2.jpg", 
            caption: "Nụ cười tỏa nắng ✨" 
        },
        { 
            url: "anh3.jpg", 
            caption: "Khoảnh khắc ngọt ngào ❤️" 
        },
        { 
            url: "anh4.jpg", 
            caption: "Kỷ niệm đáng quý  💖" 
        }
    ];

    let currentPhotoIdx = 0;
    const sliderImage = document.getElementById('sliderImage');
    const photoCaption = document.getElementById('photoCaption');
    const prevPhotoBtn = document.getElementById('prevPhotoBtn');
    const nextPhotoBtn = document.getElementById('nextPhotoBtn');

    function updatePhoto() {
        sliderImage.src = photoList[currentPhotoIdx].url;
        photoCaption.textContent = photoList[currentPhotoIdx].caption;
    }

    prevPhotoBtn.addEventListener('click', () => {
        currentPhotoIdx = (currentPhotoIdx - 1 + photoList.length) % photoList.length;
        updatePhoto();
    });

    nextPhotoBtn.addEventListener('click', () => {
        currentPhotoIdx = (currentPhotoIdx + 1) % photoList.length;
        updatePhoto();
    });

    // Khởi tạo ảnh đầu tiên khi load
    updatePhoto();

    // --- TILT CARD 3D ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 20;
        const y = (window.innerHeight / 2 - e.clientY) / 20;
        tiltCards.forEach(card => card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`);
    });

    window.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') return;
        createBurst(e.clientX, e.clientY);
    });

    fireworkBtn.addEventListener('click', () => {
        galaxyMainView.classList.add('active');
        starDetailView.classList.remove('active');
        galaxyModal.classList.add('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
    });
    closeGalaxyModal.addEventListener('click', () => galaxyModal.classList.remove('show'));

    photoAlbumBtn.addEventListener('click', () => {
        photoModal.classList.add('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
    });
    closePhotoModal.addEventListener('click', () => photoModal.classList.remove('show'));

    fortuneBtn.addEventListener('click', () => {
        fortuneModal.classList.add('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
    });
    closeFortuneModal.addEventListener('click', () => fortuneModal.classList.remove('show'));
    
    backHomeFromFortuneBtn.addEventListener('click', () => {
        fortuneModal.classList.remove('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 40);
    });

    flowerGardenBtn.addEventListener('click', () => {
        gardenModal.classList.add('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
    });
    closeGardenModal.addEventListener('click', () => gardenModal.classList.remove('show'));

    backHomeFromGardenBtn.addEventListener('click', () => {
        gardenModal.classList.remove('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 40);
    });

    changeQuoteBtn.addEventListener('click', () => {
        letterModal.classList.add('show');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 50);
    });
    closeLetterModal.addEventListener('click', () => letterModal.classList.remove('show'));

    planetItems.forEach(planet => {
        planet.addEventListener('click', () => {
            const index = planet.getAttribute('data-index');
            const realm = starRealms[index];
            realmIcon.textContent = realm.icon;
            realmTitle.textContent = realm.title;
            realmMessage.textContent = realm.message;
            galaxyMainView.classList.remove('active');
            starDetailView.classList.add('active');
            const rect = planet.getBoundingClientRect();
            createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 60);
        });
    });

    backToStarsBtn.addEventListener('click', () => {
        starDetailView.classList.remove('active');
        galaxyMainView.classList.add('active');
    });

    // --- HIỆU ỨNG SAO BĂNG BAY QUA & CHUYỂN SANG TRANG CHÚC MỚI ---
    sendWishBtn.addEventListener('click', () => {
        const wishText = userWishInput.value.trim();
        if (wishText) {
            letterModal.classList.remove('show');
            userWishInput.value = '';

            shootingStar.classList.remove('active');
            void shootingStar.offsetWidth;
            shootingStar.classList.add('active');

            createBurst(window.innerWidth / 2, window.innerHeight / 3, 90);

            setTimeout(() => {
                pageWishDisplayText.textContent = `"${wishText}"`;
                stageBloom.classList.remove('active');
                stageWishSuccess.classList.add('active');
                createBurst(window.innerWidth / 2, window.innerHeight / 2, 70);
            }, 1000);
        }
    });

    backToMainFromWish.addEventListener('click', () => {
        stageWishSuccess.classList.remove('active');
        stageBloom.classList.add('active');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 40);
    });

    function triggerMagic() {
        giftBox.classList.add('opened');
        shockwave.classList.add('active');
        createBurst(window.innerWidth / 2, window.innerHeight / 2, 80);
        
        if (!isMusicPlaying) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                soundIcon.className = "fa-solid fa-volume-high";
                soundTooltip.textContent = "Đang phát nhạc 🎶";
            }).catch(e => console.log(e));
        }

        setTimeout(() => {
            stageStart.classList.remove('active');
            stageBloom.classList.add('active');
            shockwave.classList.remove('active');
            giftBox.classList.remove('opened');
        }, 700);
    }

    giftBox.addEventListener('click', triggerMagic);
    resetBtn.addEventListener('click', () => {
        stageBloom.classList.remove('active');
        stageStart.classList.add('active');
    });

    // --- THREE.JS BACKGROUND ---
    const container = document.getElementById('webgl3dCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const particlesCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 25;
        positions[i + 1] = (Math.random() - 0.5) * 25;
        positions[i + 2] = (Math.random() - 0.5) * 25;
        colors[i] = 1.0;
        colors[i + 1] = Math.random() * 0.5 + 0.4;
        colors[i + 2] = Math.random() * 0.8 + 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.09, vertexColors: true, transparent: true, opacity: 0.85 });
    const starField = new THREE.Points(geometry, material);
    scene.add(starField);
    camera.position.z = 5;

    function animate3D() {
        requestAnimationFrame(animate3D);
        starField.rotation.x += 0.0012;
        starField.rotation.y += 0.0018;
        renderer.render(scene, camera);
    }
    animate3D();

    function createBurst(x, y, count = 40) {
        const colorsList = ['#ffd700', '#ff4081', '#ff80ab', '#ffffff', '#ff1744'];
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.style.position = 'fixed';
            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.width = `${Math.random() * 8 + 6}px`;
            p.style.height = p.style.width;
            p.style.backgroundColor = colorsList[Math.floor(Math.random() * colorsList.length)];
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            p.style.zIndex = '999';
            p.style.boxShadow = '0 0 12px #ffd700';
            document.body.appendChild(p);

            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 180 + 30;

            p.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0)`, opacity: 0 }
            ], {
                duration: Math.random() * 800 + 400,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => p.remove();
        }
    }
});