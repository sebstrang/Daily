/* ============================================================================
   Daily Words — curated collection
   ----------------------------------------------------------------------------
   One entry per day; the site rotates through them by day-of-year (AEST).
   To add your own: copy a block, keep the same shape:

     { text: "Your quote or poem...", author: "Name" }

   - Use \n inside text to force a line break (great for poems / stanzas).
   - The board displays in uppercase for the classic departure-board look,
     but tap-to-copy copies exactly what you type here (original casing).
   - Keep the list as long as you like — more entries = longer before any
     quote repeats.
   ========================================================================== */

const quotes = [

  /* ---- The marquee poems (full versions) ------------------------------- */

  {
    text: "Out of the night that covers me,\nBlack as the pit from pole to pole,\nI thank whatever gods may be\nFor my unconquerable soul.\n\nIn the fell clutch of circumstance\nI have not winced nor cried aloud.\nUnder the bludgeonings of chance\nMy head is bloody, but unbowed.\n\nBeyond this place of wrath and tears\nLooms but the Horror of the shade,\nAnd yet the menace of the years\nFinds, and shall find, me unafraid.\n\nIt matters not how strait the gate,\nHow charged with punishments the scroll,\nI am the master of my fate,\nI am the captain of my soul.",
    author: "Invictus — William Ernest Henley"
  },
  {
    text: "If you can keep your head when all about you\nAre losing theirs and blaming it on you;\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too;\nIf you can wait and not be tired by waiting,\nOr being lied about, don't deal in lies,\nOr being hated, don't give way to hating,\nAnd yet don't look too good, nor talk too wise;\n\nIf you can dream—and not make dreams your master;\nIf you can think—and not make thoughts your aim;\nIf you can meet with Triumph and Disaster\nAnd treat those two impostors just the same;\nIf you can bear to hear the truth you've spoken\nTwisted by knaves to make a trap for fools,\nOr watch the things you gave your life to, broken,\nAnd stoop and build 'em up with worn-out tools;\n\nIf you can make one heap of all your winnings\nAnd risk it on one turn of pitch-and-toss,\nAnd lose, and start again at your beginnings\nAnd never breathe a word about your loss;\nIf you can force your heart and nerve and sinew\nTo serve your turn long after they are gone,\nAnd so hold on when there is nothing in you\nExcept the Will which says to them: 'Hold on!';\n\nIf you can talk with crowds and keep your virtue,\nOr walk with Kings—nor lose the common touch,\nIf neither foes nor loving friends can hurt you,\nIf all men count with you, but none too much;\nIf you can fill the unforgiving minute\nWith sixty seconds' worth of distance run,\nYours is the Earth and everything that's in it,\nAnd—which is more—you'll be a Man, my son!",
    author: "If— — Rudyard Kipling"
  },
  {
    text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
    author: "The Road Not Taken — Robert Frost"
  },
  {
    text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n\nThough wise men at their end know dark is right,\nBecause their words had forked no lightning they\nDo not go gentle into that good night.\n\nGood men, the last wave by, crying how bright\nTheir frail deeds might have danced in a green bay,\nRage, rage against the dying of the light.\n\nWild men who caught and sang the sun in flight,\nAnd learn, too late, they grieved it on its way,\nDo not go gentle into that good night.\n\nGrave men, near death, who see with blinding sight\nBlind eyes could blaze like meteors and be gay,\nRage, rage against the dying of the light.\n\nAnd you, my father, there on the sad height,\nCurse, bless, me now with your fierce tears, I pray.\nDo not go gentle into that good night.\nRage, rage against the dying of the light.",
    author: "Do Not Go Gentle — Dylan Thomas"
  },
  {
    text: "I met a traveller from an antique land\nWho said: Two vast and trunkless legs of stone\nStand in the desert. Near them, on the sand,\nHalf sunk, a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal these words appear:\n'My name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!'\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.",
    author: "Ozymandias — Percy Bysshe Shelley"
  },
  {
    text: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all,\n\nAnd sweetest in the gale is heard;\nAnd sore must be the storm\nThat could abash the little bird\nThat kept so many warm.\n\nI've heard it in the chillest land,\nAnd on the strangest sea;\nYet, never, in extremity,\nIt asked a crumb of me.",
    author: "Emily Dickinson"
  },
  {
    text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies\nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?",
    author: "The Tyger — William Blake"
  },
  {
    text: "Whose woods these are I think I know.\nHis house is in the village though;\nHe will not see me stopping here\nTo watch his woods fill up with snow.\n\nThe woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.",
    author: "Stopping by Woods on a Snowy Evening — Robert Frost"
  },
  {
    text: "Do not stand at my grave and weep;\nI am not there. I do not sleep.\nI am a thousand winds that blow.\nI am the diamond glints on snow.\nI am the sunlight on ripened grain.\nI am the gentle autumn rain.\nWhen you awaken in the morning's hush\nI am the swift uplifting rush\nOf quiet birds in circled flight.\nI am the soft stars that shine at night.\nDo not stand at my grave and cry;\nI am not there. I did not die.",
    author: "Mary Elizabeth Frye"
  },
  {
    text: "She walks in beauty, like the night\nOf cloudless climes and starry skies;\nAnd all that's best of dark and bright\nMeet in her aspect and her eyes;\nThus mellowed to that tender light\nWhich heaven to gaudy day denies.",
    author: "She Walks in Beauty — Lord Byron"
  },
  {
    text: "To see a World in a Grain of Sand\nAnd a Heaven in a Wild Flower,\nHold Infinity in the palm of your hand\nAnd Eternity in an hour.",
    author: "Auguries of Innocence — William Blake"
  },
  {
    text: "Tell me, what is it you plan to do\nwith your one wild and precious life?",
    author: "The Summer Day — Mary Oliver"
  },
  {
    text: "All that is gold does not glitter,\nNot all those who wander are lost;\nThe old that is strong does not wither,\nDeep roots are not reached by the frost.\n\nFrom the ashes a fire shall be woken,\nA light from the shadows shall spring;\nRenewed shall be blade that was broken,\nThe crownless again shall be king.",
    author: "J.R.R. Tolkien"
  },
  {
    text: "Ring the bells that still can ring,\nForget your perfect offering.\nThere is a crack in everything,\nThat's how the light gets in.",
    author: "Anthem — Leonard Cohen"
  },
  {
    text: "Let us, then, be up and doing,\nWith a heart for any fate;\nStill achieving, still pursuing,\nLearn to labour and to wait.",
    author: "A Psalm of Life — Henry Wadsworth Longfellow"
  },
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
    author: "The Man in the Arena — Theodore Roosevelt"
  },

  /* ---- Shorter poems & fragments --------------------------------------- */

  { text: "I have spread my dreams under your feet;\nTread softly because you tread on my dreams.", author: "W. B. Yeats" },
  { text: "And still, like dust, I'll rise.", author: "Maya Angelou" },
  { text: "I am large, I contain multitudes.", author: "Walt Whitman" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "I celebrate myself, and sing myself,\nAnd what I assume you shall assume,\nFor every atom belonging to me as good belongs to you.", author: "Song of Myself — Walt Whitman" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Out beyond ideas of wrongdoing and rightdoing, there is a field.\nI'll meet you there.", author: "Rumi" },

  /* ---- Quotes ----------------------------------------------------------- */

  { text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", author: "James Baldwin" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", author: "Langston Hughes" },
  { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "To know even one life has breathed easier because you have lived. This is to have succeeded.", author: "Ralph Waldo Emerson" },
  { text: "I dwell in possibility.", author: "Emily Dickinson" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "I am the master of my fate, I am the captain of my soul.", author: "William Ernest Henley" },
  { text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination encircles the world.", author: "Albert Einstein" },
  { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
  { text: "If opportunity doesn't knock, build a door.", author: "Milton Berle" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "We must not allow the clock and the calendar to blind us to the fact that each moment of life is a miracle and a mystery.", author: "H. G. Wells" },
  { text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "A single sunbeam is enough to drive away many shadows.", author: "Francis of Assisi" },
  { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
  { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
  { text: "Do what you feel in your heart to be right—for you'll be criticized anyway.", author: "Eleanor Roosevelt" },
  { text: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "There is nothing permanent except change.", author: "Heraclitus" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
  { text: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Life is made of ever so many partings welded together.", author: "Charles Dickens" },
  { text: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin" },
  { text: "It's not what we have in life but who we have in our life that matters.", author: "Unknown" },
  { text: "Life is a flower of which love is the honey.", author: "Victor Hugo" },
  { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
  { text: "Life would be tragic if it weren't funny.", author: "Stephen Hawking" },
  { text: "May you live all the days of your life.", author: "Jonathan Swift" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
  { text: "Turn your face to the sun and the shadows fall behind you.", author: "Maori Proverb" },
  { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "To live is to suffer, to survive is to find some meaning in the suffering.", author: "Friedrich Nietzsche" },
  { text: "Do not fear death so much, but rather the inadequate life.", author: "Bertolt Brecht" },
  { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
  { text: "The truth is rarely pure and never simple.", author: "Oscar Wilde" },
  { text: "The secret of life is to fall seven times and to get up eight times.", author: "Paulo Coelho" },
  { text: "Life is ten percent what happens to you and ninety percent how you respond to it.", author: "Charles Swindoll" },
  { text: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "No legacy is so rich as honesty.", author: "William Shakespeare" },
  { text: "At the touch of love, everyone becomes a poet.", author: "Plato" },
  { text: "What we once enjoyed and deeply loved we can never lose, for all that we love deeply becomes a part of us.", author: "Helen Keller" },
  { text: "We do not remember days; we remember moments.", author: "Cesare Pavese" },
  { text: "Hitch your wagon to a star.", author: "Ralph Waldo Emerson" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { text: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { text: "Hope smiles from the threshold of the year to come, whispering, 'It will be happier.'", author: "Alfred, Lord Tennyson" },
  { text: "Do I contradict myself? Very well, then I contradict myself, I am large, I contain multitudes.", author: "Walt Whitman" },
  { text: "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.", author: "Albert Camus" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
  { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
  { text: "Life isn't about waiting for the storm to pass. It's about learning to dance in the rain.", author: "Vivian Greene" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.", author: "Helen Keller" },
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
  { text: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
  { text: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", author: "Eleanor Roosevelt" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "It matters not what someone is born, but what they grow to be.", author: "J.K. Rowling" },
  { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare" },
  { text: "And in the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Alone we can do so little; together we can do so much.", author: "Helen Keller" },
  { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
  { text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", author: "Mahatma Gandhi" },
  { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
  { text: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.", author: "William Shakespeare" },
  { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
  { text: "No man is an island entire of itself; every man is a piece of the continent, a part of the main.", author: "John Donne" },

  /* ---- A personal one --------------------------------------------------- */

  {
    text: "A trio of mysteries, fleeting, yet bright,\nMoments to follow the pulse of the night.\nA spark of fire, a soulful clue,\nFrom Mama herself, crafted just for you.\nBring what you need, perhaps something light,\nAnd maybe a hat, just for the sight.\nEarly next year, we'll share three nights,\nWith steps that lead to hidden delights.",
    author: "SS"
  }

];

// Make available to the page (and harmless under Node/module bundlers).
if (typeof window !== "undefined") window.quotes = quotes;
