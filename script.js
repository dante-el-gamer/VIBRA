// Base de datos de palabras
const dictionary = [
    { word: "Aesthetic", definition: "Algo que es estéticamente agradable o muy visual.", example: "Tu cuarto está muy aesthetic, bro." },
    { word: "ASMR", definition: "Sensaciones placenteras por estímulos auditivos suaves.", example: "Me duermo escuchando ASMR de lluvia." },
    { word: "Aura", definition: "El nivel de respeto o energía 'cool' que emana alguien.", example: "-1000 aura por tropezarte frente a todos." },
    { word: "BB", definition: "Forma cariñosa de llamar a amigos o gente cercana.", example: "¿Qué onda bb? ¿Todo bien?" },
    { word: "Boomer", definition: "Gente mayor con ideas anticuadas o cerradas.", example: "Ok boomer, sigue usando Facebook." },
    { word: "Brain Rot", definition: "Sentir el cerebro 'podrido' por ver demasiado contenido basura.", example: "Tengo brain rot de tanto ver TikToks." },
    { word: "Bro", definition: "Hermano, amigo. Se usa para todo el mundo.", example: "Bro, eso estuvo increíble." },
    { word: "Bug", definition: "Cuando algo falla o alguien se queda bloqueado.", example: "Me dio un bug y olvidé lo que iba a decir." },
    { word: "Chill", definition: "Relajado, tranquilo, sin preocupaciones.", example: "Estamos de chill en la piscina." },
    { word: "Cringe", definition: "Vergüenza ajena extrema.", example: "Ese chiste dio mucho cringe." },
    { word: "Crush", definition: "Amor platónico o persona que te gusta mucho.", example: "Mi crush me dejó en visto, F." },
    { word: "Delulu", definition: "Estar delirante, creer que algo imposible va a pasar.", example: "Ella cree que se casará con su idol, está delulu." },
    { word: "F", definition: "Presentar respetos cuando algo sale mal.", example: "F por tu celular, se rompió la pantalla." },
    { word: "Facto", definition: "Decir una verdad absoluta. Hechos.", example: "Ese álbum es el mejor del año, factos." },
    { word: "Fail", definition: "Un error, fracaso o cuando algo no sale bien.", example: "Vaya fail, me caí de la silla." },
    { word: "Fanum Tax", definition: "Robarle un poco de comida a un amigo.", example: "Cuidado con el Fanum Tax si pides papas." },
    { word: "Farmear", definition: "Recolectar recursos o puntos repetitivamente.", example: "Estoy farmeando oro en el juego." },
    { word: "Flamer", definition: "Persona que insulta o critica de forma tóxica en internet.", example: "No seas flamer, solo es un juego." },
    { word: "Funar", definition: "Exponer públicamente a alguien por algo malo que hizo.", example: "Lo funaron por mentiroso." },
    { word: "Gamer", definition: "Fan de los videojuegos.", example: "Es un gamer de corazón." },
    { word: "GG", definition: "Good Game. Se dice al terminar una partida.", example: "GG, bien jugado a todos." },
    { word: "Goat", definition: "Greatest Of All Time. El mejor de todos los tiempos.", example: "Messi es el GOAT." },
    { word: "Gyatt", definition: "Exclamación al ver a alguien con buen físico.", example: "¡Gyatt! ¿Viste eso?" },
    { word: "Hater", definition: "Persona que se dedica a odiar y criticar en redes.", example: "Ignora a los haters, solo quieren atención." },
    { word: "Hype", definition: "Mucha emoción o expectativa por algo.", example: "Tengo mucho hype por el nuevo juego." },
    { word: "Kawaii", definition: "Algo lindo, tierno o mono (término japonés).", example: "Qué gatito tan kawaii." },
    { word: "Living", definition: "Estar extremadamente emocionado o feliz.", example: "Estoy living con este viaje." },
    { word: "LOL", definition: "Reírse a carcajadas.", example: "LOL, no puedo creer que pasó eso." },
    { word: "Looser", definition: "Perdedor o fracasado (escrito con doble 'o').", example: "No seas looser y ven a la fiesta." },
    { word: "Lore", definition: "La historia de trasfondo de un personaje o mundo.", example: "El lore de este juego es muy profundo." },
    { word: "Me renta", definition: "Me gusta, me parece un buen plan o me conviene.", example: "Me renta mucho ir al cine hoy." },
    { word: "Meh", definition: "Indiferencia, algo que no te importa o te aburre.", example: "La película estuvo meh." },
    { word: "Meme", definition: "Chiste gráfico de internet.", example: "Pásame ese meme por WhatsApp." },
    { word: "Mewing", definition: "Gesto para marcar mandíbula y no hablar.", example: "No puedo contestar, estoy haciendo mewing." },
    { word: "Migajero", definition: "Alguien que se conforma con poca atención.", example: "No seas migajero, mereces alguien que te valore." },
    { word: "Mood", definition: "Estado de ánimo o 'me representa'.", example: "Ese gato durmiendo es mi mood hoy." },
    { word: "Niño rata", definition: "Persona (generalmente joven) tóxica en videojuegos.", example: "Había un niño rata gritando por el micro." },
    { word: "Noob", definition: "Novato o principiante que juega mal.", example: "Perdimos porque el equipo era puro noob." },
    { word: "NPC", definition: "Persona sin opinión propia que actúa por inercia.", example: "Ese tipo se mueve como un NPC." },
    { word: "OP", definition: "Overpowered. Algo que está demasiado roto o fuerte.", example: "Esa espada está muy OP." },
    { word: "Papu", definition: "Sinónimo de Bro o amigo (muy usado en memes).", example: "Hola papu, ¿cómo va todo?" },
    { word: "POV", definition: "Point of View. Ver algo desde una perspectiva.", example: "POV: Eres el último pedazo de pizza." },
    { word: "Prime", definition: "Estar en tu mejor momento.", example: "Ese jugador está en su prime." },
    { word: "Random", definition: "Algo aleatorio, inesperado o sin sentido.", example: "Pasó algo muy random en la calle." },
    { word: "Red Flag", definition: "Señal de alerta de que alguien es problemático.", example: "Que mienta en cosas pequeñas es una red flag." },
    { word: "Rizz", definition: "Habilidad o carisma para ligar.", example: "Tiene un rizz increíble, los enamora a todos." },
    { word: "Shippear", definition: "Querer que dos personas sean pareja.", example: "Yo los shippeo, hacen buena pareja." },
    { word: "Sigma", definition: "Líder solitario, exitoso y frío.", example: "Qué sigma es ese tipo, no le importa nada." },
    { word: "Simp", definition: "Alguien que hace demasiado por quien le gusta sin ser correspondido.", example: "Deja de ser tan simp, ella no te quiere." },
    { word: "Skibidi", definition: "Término sin sentido usado para algo raro o malo.", example: "Eso estuvo muy skibidi." },
    { word: "SOS", definition: "Se usa para expresar drama o necesidad de ayuda.", example: "SOS, me quedé sin batería." },
    { word: "Stalkear", definition: "Espiar o mirar el perfil de alguien obsesivamente.", example: "No dejes de stalkear a tu ex, te hace daño." },
    { word: "Sus", definition: "Sospechoso. Viene de Among Us.", example: "Mmm, ese comportamiento está muy sus." },
    { word: "Trolear", definition: "Molestar o tomar el pelo a alguien.", example: "Me trolearon con una noticia falsa." },
    { word: "XD", definition: "Risa (cara con ojos cerrados).", example: "Se cayó y me reí XD." },
    { word: "67 (Six-Seven)", definition: "Sin significado claro pero es de un chico en un partido de un juego y dice hacia una camara ¨SIX-SEVEN¨", example: "Mira ese cartel dice... SIX-SEVEN" },
    { word: "Facto", definition: "Hechos, verdades que no se pueden negar.", example: "Lo que dijiste son puros factos." }
];

const grid = document.getElementById('dictionaryGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

// Función para mostrar las palabras
function displayWords(words) {
    grid.innerHTML = "";
    
    if (words.length === 0) {
        noResults.classList.remove('hidden');
        grid.style.display = "none";
        return;
    }

    noResults.classList.add('hidden');
    grid.style.display = "grid";

    words.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${item.word}</h3>
            <p>${item.definition}</p>
            <span class="example">"${item.example}"</span>
        `;
        grid.appendChild(card);
    });
}

// Lógica del buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = dictionary.filter(item => 
        item.word.toLowerCase().includes(term) || 
        item.definition.toLowerCase().includes(term)
    );
    displayWords(filtered);
});

// Carga inicial de todas las palabras
displayWords(dictionary);
