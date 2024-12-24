const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "מצגות אינטרקטיביות",
            "img": "1.jpg",
            "content": "מצגות המשלבות תוכן אינטראקטיבי, כמו שאלונים, סימולציות וסקרים בזמן אמת, להעלאת מעורבות המשתתפים.",
            
        },
        {
            "id": 2,
            "title": "סרטוני למידה",
            "img": "2.jpg",
            "content": "שימוש בווידאו להדרכה, כולל סרטונים קצרי מועד (microlearning), סרטוני הדרכה מפורטים, או וידאו אינטראקטיבי עם בחירות והשפעות על התוצאה.",
        },
        {
            "id": 3,
            "title":"משחקים לימודיים",
            "img": "3.jpg",
            "content": "למידה דרך משחקים מאפשרת למשתתפים ללמוד בצורה חווייתית ואינטראקטיבית, תוך אתגרים ושיתוף פעולה, ומעודדת מוטיבציה והנאה. ",
            
        },
        {
            "id": 4,
            "title": "סימולציות וירטואליות",
            "img": "4.jpg",
            "content": "יצירת מצבים מעשיים בסביבה וירטואלית, המאפשרת למשתתפים להתנסות בתרחישים שונים מבלי לפגוע במציאות.",
            
        },
        {
            "id": 5,
            "title": "קורסיים מכוונים",
            "img": "5.jpg",
            "content": "חלוקת התוכן ליחידות קצרות ותמציתיות הממוקדות בנושא אחד, המתאימות ללמידה מהירה ויעילה בזמני הפסקה קצרים.",
            
        },
        {
            "id": 6,
            "title": "סדנאות מכוונות",
            "img": "6.jpg",
            "content": "הדרכות חיות באמצעות פלטפורמות שיחות וידאו, שמאפשרות אינטראקציה בזמן אמת בין המשתתפים והמדריך.",
            
        },
        {"id": 7,
            "title": "לומדות",
            "img": "7.png",
            "content": "הדרכות חיות באמצעות פלטפורמות שיחות וידאו, שמאפשרות אינטראקציה בזמן אמת בין המשתתפים והמדריך.",
           

        },
        {
            "id": 8,
            "title": "ספרים דיגיטליים ",
            "img": "8.jpg",
            "content": "חומרים דיגיטליים המשלבים טקסט, גרפיקה, קטעי וידאו ושאלות למעקב אחר ההתקדמות.",
           
        },
        {
            "id": 9,
            "title": "פלטפורמות למידה שיתופיות",
            "img": "9.jpg",
            "content": "שימוש בכלים כמו לוחות שיתופיים (למשל Miro או Jamboard) שמאפשרים שיתוף רעיונות, עבודה משותפת ודיונים במהלך הלמידה.",
           
        },
        {
            "id": 10,
            "title": "פודקאסטים",
            "img": "10.jpg",
            "content": "הדרכה דרך קובצי שמע או פודקאסטים שמאפשרים למידה בדרכים, למשל במהלך נסיעה או פעילות גופנית.",
          
        }
    ]
};
//יוצר את הכרטיסיות בצורה רספונסיבית ולוקח מהדטא
document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById('itemsContainer');

    jsonData.generators.forEach(g => {
        const myCard = document.createElement("div");
        myCard.classList.add("card");

        const myImg = document.createElement("img");
        myImg.setAttribute("src", "img/" + g.img);
        myImg.setAttribute("alt", g.title);

        const myHTitle = document.createElement("h6");
        myHTitle.classList.add("card-title");
        myHTitle.textContent = g.title;

        const myPText = document.createElement("p");
        myPText.textContent = g.content;

        // יצירת כפתור "קרא עוד"
        const readMoreButton = document.createElement("button");
        readMoreButton.classList.add("read-more-btn");
        readMoreButton.textContent = "קרא עוד";
        readMoreButton.addEventListener("click", () => {
            alert(`כפתור "קרא עוד" נלחץ עבור: ${g.title}`);
        });

        // הוספת אלמנטים לכרטיס
        myCard.appendChild(myImg);
        myCard.appendChild(myHTitle);
        myCard.appendChild(myPText);
        myCard.appendChild(readMoreButton);

        itemsContainer.appendChild(myCard);
    });
});

function searchCards() {
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase(); // ערך החיפוש
    const cards = document.querySelectorAll('#itemsContainer .card'); // כל הכרטיסיות

    if (searchValue === '') {
        cards.forEach(card => {
            card.style.display = ''; // הצגת כל הכרטיסיות
        });
        return;
    }

    let matchFound = false; // דגל לבדוק אם נמצאה התאמה

    cards.forEach(card => {
        const title = card.querySelector('h6.card-title').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = '';
            matchFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!matchFound) {
        alert("אין התאמה לתוצאות החיפוש");
    }
}
