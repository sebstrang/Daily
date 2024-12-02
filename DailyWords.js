// Array of quotes
const quotes = [
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Out of the night that covers me, Black as the Pit from pole to pole, I thank whatever gods may be For my unconquerable soul. In the fell clutch of circumstance I have not winced nor cried aloud. Under the bludgeonings of chance My head is bloody, but unbowed. Beyond this place of wrath and tears Looms but the Horror of the shade, And yet the menace of the years Finds, and shall find, me unafraid. It matters not how strait the gate, How charged with punishments the scroll, I am the master of my fate, I am the captain of my soul.",
    author: "William Ernest Henley"
  },
  {
    text: "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.",
    author: "Dylan Thomas"
  },
    { text: "Hope is the thing with feathers That perches in the soul, And sings the tune without the words, And never stops at all, And sweetest in the gale is heard; And sore must be the storm That could abash the little bird That kept so many warm. I’ve heard it in the chillest land, And on the strangest sea; Yet, never, in extremity, It asked a crumb of me.", author: "Hope is the Thing with Feathers by Emily Dickinson" },
    { text: "If you can keep your head when all about you Are losing theirs and blaming it on you, If you can trust yourself when all men doubt you, But make allowance for their doubting too; If you can wait and not be tired by waiting, Or being lied about, don’t deal in lies, Or being hated, don’t give way to hating, And yet don’t look too good, nor talk too wise: If you can dream—and not make dreams your master; If you can think—and not make thoughts your aim; If you can meet with Triumph and Disaster And treat those two impostors just the same; If you can bear to hear the truth you’ve spoken Twisted by knaves to make a trap for fools, Or watch the things you gave your life to, broken, And stoop and build ’em up with worn-out tools: If you can make one heap of all your winnings And risk it on one turn of pitch-and-toss, And lose, and start again at your beginnings And never breathe a word about your loss; If you can force your heart and nerve and sinew To serve your turn long after they are gone, And so hold on when there is nothing in you Except the Will which says to them: ‘Hold on!’ If you can talk with crowds and keep your virtue, Or walk with Kings—nor lose the common touch, If neither foes nor loving friends can hurt you, If all men count with you, but none too much; If you can fill the unforgiving minute With sixty seconds’ worth of distance run, Yours is the Earth and everything that’s in it, And—which is more—you’ll be a Man, my son!", author: "If— by Rudyard Kipling" },
    { text: "Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood And looked down one as far as I could To where it bent in the undergrowth; Then took the other, as just as fair, And having perhaps the better claim, Because it was grassy and wanted wear; Though as for that the passing there Had worn them really about the same, And both that morning equally lay In leaves no step had trodden black. Oh, I kept the first for another day! Yet knowing how way leads on to way, I doubted if I should ever come back. I shall be telling this with a sigh Somewhere ages and ages hence: Two roads diverged in a wood, and I- I took the one less traveled by, And that has made all the difference.", author: "The Road Not Taken by Robert Frost" },
    { text: "The Road Not Taken:\nTwo roads diverged in a yellow wood,\nAnd sorry I could not travel both...", author: "Robert Frost" },
    { 
    text: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", 
    author: "James Baldwin" 
  },
  { 
    text: "To love and be loved is to feel the sun from both sides.", 
    author: "David Viscott" 
  },
  { 
    text: "Hope is the thing with feathers that perches in the soul,\nAnd sings the tune without the words...", 
    author: "Emily Dickinson" 
  },
  { 
    text: "In the middle of every difficulty lies opportunity.", 
    author: "Albert Einstein" 
  },
  { 
    text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", 
    author: "Langston Hughes" 
  },
  { 
    text: "We are all in the gutter, but some of us are looking at the stars.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    author: "Winston Churchill" 
  },
  { 
    text: "Do what you can, with what you have, where you are.", 
    author: "Theodore Roosevelt" 
  },
  { 
    text: "Life isn’t about finding yourself. Life is about creating yourself.", 
    author: "George Bernard Shaw" 
  },
  { 
    text: "The journey of a thousand miles begins with one step.", 
    author: "Lao Tzu" 
  },
  { 
    text: "If you want to go fast, go alone. If you want to go far, go together.", 
    author: "African Proverb" 
  },
{ 
    text: "Be yourself; everyone else is already taken.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "It is during our darkest moments that we must focus to see the light.", 
    author: "Aristotle" 
  },
  { 
    text: "Life is what happens when you're busy making other plans.", 
    author: "John Lennon" 
  },
  { 
    text: "To know even one life has breathed easier because you have lived. This is to have succeeded.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "I dwell in possibility.", 
    author: "Emily Dickinson" 
  },
  { 
    text: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs" 
  },
  { 
    text: "It does not matter how slowly you go as long as you do not stop.", 
    author: "Confucius" 
  },
  { 
    text: "Our greatest glory is not in never falling, but in rising every time we fall.", 
    author: "Confucius" 
  },
  { 
    text: "Dream big and dare to fail.", 
    author: "Norman Vaughan" 
  },
  { 
    text: "Everything you’ve ever wanted is on the other side of fear.", 
    author: "George Addair" 
  },
  { 
    text: "Turn your wounds into wisdom.", 
    author: "Oprah Winfrey" 
  },
{ 
    text: "Do not let what you cannot do interfere with what you can do.", 
    author: "John Wooden" 
  },
  { 
    text: "It always seems impossible until it is done.", 
    author: "Nelson Mandela" 
  },
  { 
    text: "In three words I can sum up everything I've learned about life: It goes on.", 
    author: "Robert Frost" 
  },
  { 
    text: "You miss 100% of the shots you don't take.", 
    author: "Wayne Gretzky" 
  },
  { 
    text: "The purpose of our lives is to be happy.", 
    author: "Dalai Lama" 
  },
  { 
    text: "Success is how high you bounce when you hit bottom.", 
    author: "George S. Patton" 
  },
  { 
    text: "You only live once, but if you do it right, once is enough.", 
    author: "Mae West" 
  },
  { 
    text: "Tough times never last, but tough people do.", 
    author: "Robert H. Schuller" 
  },
  { 
    text: "I have not failed. I've just found 10,000 ways that won't work.", 
    author: "Thomas A. Edison" 
  },
  { 
    text: "Strive not to be a success, but rather to be of value.", 
    author: "Albert Einstein" 
  },
  { 
    text: "When you reach the end of your rope, tie a knot in it and hang on.", 
    author: "Franklin D. Roosevelt" 
  },
  { 
    text: "Whether you think you can or you think you can’t, you’re right.", 
    author: "Henry Ford" 
  },
  { 
    text: "Believe you can and you're halfway there.", 
    author: "Theodore Roosevelt" 
  },
  { 
    text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "The best way to predict the future is to create it.", 
    author: "Peter Drucker" 
  },
  { 
    text: "I am the master of my fate, I am the captain of my soul.", 
    author: "William Ernest Henley" 
  },
  { 
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
    author: "Albert Einstein" 
  },
  { 
    text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination encircles the world.", 
    author: "Albert Einstein" 
  },
  { 
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", 
    author: "Albert Einstein" 
  },
  { 
    text: "If opportunity doesn’t knock, build a door.", 
    author: "Milton Berle" 
  },
  { 
    text: "Act as if what you do makes a difference. It does.", 
    author: "William James" 
  },
{ 
    text: "Happiness is not something ready made. It comes from your own actions.", 
    author: "Dalai Lama" 
  },
  { 
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
    author: "Zig Ziglar" 
  },
  { 
    text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils...", 
    author: "William Wordsworth" 
  },
  { 
    text: "No man is an island entire of itself; every man is a piece of the continent, a part of the main...", 
    author: "John Donne" 
  },
  { 
    text: "We must not allow the clock and the calendar to blind us to the fact that each moment of life is a miracle and a mystery.", 
    author: "H. G. Wells" 
  },
  { 
    text: "You cannot swim for new horizons until you have courage to lose sight of the shore.", 
    author: "William Faulkner" 
  },
  { 
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "A single sunbeam is enough to drive away many shadows.", 
    author: "Francis of Assisi" 
  },
  { 
    text: "Happiness is when what you think, what you say, and what you do are in harmony.", 
    author: "Mahatma Gandhi" 
  },
  { 
    text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", 
    author: "Winston Churchill" 
  },
  { 
    text: "Do what you feel in your heart to be right—for you’ll be criticized anyway.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.", 
    author: "Albert Camus" 
  },
  { 
    text: "To live is the rarest thing in the world. Most people exist, that is all.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "There is nothing permanent except change.", 
    author: "Heraclitus" 
  },
  { 
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", 
    author: "Aristotle" 
  },
  { 
    text: "There is no greater agony than bearing an untold story inside you.", 
    author: "Maya Angelou" 
  },
  { 
    text: "The weak can never forgive. Forgiveness is the attribute of the strong.", 
    author: "Mahatma Gandhi" 
  },
  { 
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "Not all those who wander are lost.", 
    author: "J.R.R. Tolkien" 
  },
  { 
    text: "Life is either a daring adventure or nothing at all.", 
    author: "Helen Keller" 
  },
  { 
    text: "Life is made of ever so many partings welded together.", 
    author: "Charles Dickens" 
  },
  { 
    text: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", 
    author: "Benjamin Franklin" 
  },
  { 
    text: "It’s not what we have in life but who we have in our life that matters.", 
    author: "Unknown" 
  },
  { 
    text: "Life is a flower of which love is the honey.", 
    author: "Victor Hugo" 
  },
  { 
    text: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", 
    author: "Marilyn Monroe" 
  },
  { 
    text: "Life would be tragic if it weren’t funny.", 
    author: "Stephen Hawking" 
  },
  { 
    text: "May you live all the days of your life.", 
    author: "Jonathan Swift" 
  },
  { 
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "Turn your face to the sun and the shadows fall behind you.", 
    author: "Maori Proverb" 
  },
  { 
    text: "What we achieve inwardly will change outer reality.", 
    author: "Plutarch" 
  },
  { 
    text: "Whoever is happy will make others happy too.", 
    author: "Anne Frank" 
  },
  { 
    text: "When I let go of what I am, I become what I might be.", 
    author: "Lao Tzu" 
  },
  { 
    text: "You must be the change you wish to see in the world.", 
    author: "Mahatma Gandhi" 
  },
  { 
    text: "Do what you can, with what you have, where you are.", 
    author: "Theodore Roosevelt" 
  },
  { 
    text: "And still, like dust, I’ll rise.", 
    author: "Maya Angelou" 
  },
  { 
    text: "Life is really simple, but we insist on making it complicated.", 
    author: "Confucius" 
  },
  { 
    text: "Happiness depends upon ourselves.", 
    author: "Aristotle" 
  },
  { 
    text: "You only live once, but if you do it right, once is enough.", 
    author: "Mae West" 
  },
  { 
    text: "The best way to predict your future is to create it.", 
    author: "Abraham Lincoln" 
  },
  { 
    text: "To live is to suffer, to survive is to find some meaning in the suffering.", 
    author: "Friedrich Nietzsche" 
  },
  { 
    text: "Do not fear death so much, but rather the inadequate life.", 
    author: "Bertolt Brecht" 
  },
  { 
    text: "Life is a succession of lessons which must be lived to be understood.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "Life’s under no obligation to give us what we expect.", 
    author: "Margaret Mitchell" 
  },
  { 
    text: "Life is short, and truth works far and lives long: let us then speak the truth.", 
    author: "Arthur Schopenhauer" 
  },
  { 
    text: "The truth is rarely pure and never simple.", 
    author: "Oscar Wilde" 
  },
  { 
    text: "The secret of life, though, is to fall seven times and to get up eight times.", 
    author: "Paulo Coelho" 
  },
  { 
    text: "Life is ten percent what happens to you and ninety percent how you respond to it.", 
    author: "Charles Swindoll" 
  },
  { 
    text: "My life is my message.", 
    author: "Mahatma Gandhi" 
  },
  { 
    text: "Life is not a problem to be solved, but a reality to be experienced.", 
    author: "Soren Kierkegaard" 
  },
  { 
    text: "Because I could not stop for Death –\nHe kindly stopped for me –\nThe Carriage held but just Ourselves –\nAnd Immortality.",
    author: "Emily Dickinson" 
  },
  { 
    text: "Shall I compare thee to a summer’s day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer’s lease hath all too short a date...",
    author: "William Shakespeare" 
  },
  { 
    text: "I hear America singing, the varied carols I hear,\nThose of mechanics, each one singing his as it should be blithe and strong,\nThe carpenter singing his as he measures his plank or beam...",
    author: "Walt Whitman" 
  },
  { 
    text: "I met a traveller from an antique land\nWho said: Two vast and trunkless legs of stone\nStand in the desert. Near them, on the sand,\nHalf sunk, a shattered visage lies...",
    author: "Percy Bysshe Shelley" 
  },
  { 
    text: "Stopping by Woods on a Snowy Evening:\nWhose woods these are I think I know.\nHis house is in the village, though;\nHe will not see me stopping here\nTo watch his woods fill up with snow.",
    author: "Robert Frost" 
  },
  { 
    text: "When you are old and grey and full of sleep,\nAnd nodding by the fire, take down this book,\nAnd slowly read, and dream of the soft look\nYour eyes had once, and of their shadows deep...",
    author: "William Butler Yeats" 
  },
  { 
    text: "A thing of beauty is a joy for ever:\nIts loveliness increases; it will never\nPass into nothingness; but still will keep\nA bower quiet for us, and a sleep\nFull of sweet dreams...",
    author: "John Keats" 
  },
  { 
    text: "In Xanadu did Kubla Khan\nA stately pleasure-dome decree:\nWhere Alph, the sacred river, ran\nThrough caverns measureless to man\nDown to a sunless sea...",
    author: "Samuel Taylor Coleridge" 
  },
  { 
    text: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all...",
    author: "Emily Dickinson" 
  },
  { 
    text: "The world is too much with us; late and soon,\nGetting and spending, we lay waste our powers;\nLittle we see in Nature that is ours;\nWe have given our hearts away, a sordid boon!",
    author: "William Wordsworth" 
  },
  { 
    text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?",
    author: "William Blake" 
  },
  { 
    text: "And death shall have no dominion.\nDead men naked they shall be one\nWith the man in the wind and the west moon;\nWhen their bones are picked clean and the clean bones gone...",
    author: "Dylan Thomas" 
  },
  { 
    text: "The Second Coming:\nTurning and turning in the widening gyre\nThe falcon cannot hear the falconer;\nThings fall apart; the centre cannot hold;\nMere anarchy is loosed upon the world...",
    author: "William Butler Yeats" 
  },
  { 
    text: "She walks in beauty, like the night\nOf cloudless climes and starry skies;\nAnd all that's best of dark and bright\nMeet in her aspect and her eyes...",
    author: "Lord Byron" 
  },
  { 
    text: "Do not stand at my grave and weep;\nI am not there. I do not sleep.\nI am a thousand winds that blow.\nI am the diamond glints on snow...",
    author: "Mary Elizabeth Frye" 
  },
  { 
    text: "Beneath the milk-white thorn that scents the evening gale\nWas Nature's bounteous boon to simple swains;\nBeneath its shade, the pensive lover's tale...",
    author: "Robert Burns" 
  },
  { 
    text: "If ever two were one, then surely we.\nIf ever man were loved by wife, then thee;\nIf ever wife was happy in a man,\nCompare with me, ye women, if you can.",
    author: "Anne Bradstreet" 
  },
  { 
    text: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.",
    author: "Dylan Thomas" 
  },
  { 
    text: "I celebrate myself, and sing myself,\nAnd what I assume you shall assume,\nFor every atom belonging to me as good belongs to you.",
    author: "Walt Whitman" 
  },
  { 
    text: "O Captain! my Captain! our fearful trip is done,\nThe ship has weather’d every rack, the prize we sought is won,\nThe port is near, the bells I hear, the people all exulting...",
    author: "Walt Whitman" 
  },
  { 
    text: "The Owl and the Pussy-cat went to sea\nIn a beautiful pea-green boat,\nThey took some honey, and plenty of money,\nWrapped up in a five-pound note...",
    author: "Edward Lear" 
  },
  { 
    text: "To see a World in a Grain of Sand\nAnd a Heaven in a Wild Flower,\nHold Infinity in the palm of your hand\nAnd Eternity in an hour...",
    author: "William Blake" 
  },
  { 
    text: "A bird came down the walk:\nHe did not know I saw;\nHe bit an angleworm in halves\nAnd ate the fellow, raw...",
    author: "Emily Dickinson" 
  },
  { 
    text: "Come live with me and be my love,\nAnd we will all the pleasures prove\nThat hills and valleys, dales and fields,\nOr woods or steepy mountain yields.",
    author: "Christopher Marlowe" 
  },
  { 
    text: "A Red, Red Rose:\nO my Luve is like a red, red rose\nThat's newly sprung in June;\nO my Luve is like the melody\nThat's sweetly played in tune.",
    author: "Robert Burns" 
  },
  { 
    text: "When icicles hang by the wall\nAnd Dick the shepherd blows his nail,\nAnd Tom bears logs into the hall,\nAnd milk comes frozen home in pail...",
    author: "William Shakespeare" 
  },
  { 
    text: "Had we but world enough and time,\nThis coyness, lady, were no crime.\nWe would sit down and think which way\nTo walk, and pass our long love’s day.",
    author: "Andrew Marvell" 
  },
  { 
    text: "Batter my heart, three-person'd God; for you\nAs yet but knock, breathe, shine, and seek to mend;\nThat I may rise, and stand, o'erthrow me, and bend\nYour force, to break, blow, burn, and make me new.",
    author: "John Donne" 
  },
  { 
    text: "Let me not to the marriage of true minds\nAdmit impediments. Love is not love\nWhich alters when it alteration finds,\nOr bends with the remover to remove...",
    author: "William Shakespeare" 
  },
  { 
    text: "The only way to deal with fear is to face it head-on.", 
    author: "Unknown" 
  },
  { 
    text: "How do I love thee? Let me count the ways.\nI love thee to the depth and breadth and height\nMy soul can reach, when feeling out of sight\nFor the ends of being and ideal grace.", 
    author: "Elizabeth Barrett Browning" 
  },
  { 
    text: "Give me the splendid, silent sun with all his beams full-dazzling,\nGive me juicy autumnal fruit, ripe and red from the orchard,\nGive me a field where the unmowed grass grows...", 
    author: "Walt Whitman" 
  },
  { 
    text: "It matters not what someone is born, but what they grow to be.", 
    author: "J.K. Rowling" 
  },
  { 
    text: "Love all, trust a few, do wrong to none.", 
    author: "William Shakespeare" 
  },
  { 
    text: "And in the end, it's not the years in your life that count. It's the life in your years.", 
    author: "Abraham Lincoln" 
  },
  { 
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", 
    author: "Albert Schweitzer" 
  },
  { 
    text: "Alone we can do so little; together we can do so much.", 
    author: "Helen Keller" 
  },
  { 
    text: "I have spread my dreams under your feet;\nTread softly because you tread on my dreams.", 
    author: "W.B. Yeats" 
  },
  { 
    text: "What you do speaks so loudly that I cannot hear what you say.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "Life appears to me too short to be spent in nursing animosity or registering wrongs.", 
    author: "Charlotte Brontë" 
  },
  { 
    text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", 
    author: "Mahatma Gandhi" 
  },
  { 
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", 
    author: "Buddha" 
  },
  { 
    text: "Out beyond ideas of wrongdoing and rightdoing, there is a field. I’ll meet you there.", 
    author: "Rumi" 
  },
  { 
    text: "Let us then be up and doing, with a heart for any fate;\nStill achieving, still pursuing, learn to labor and to wait.", 
    author: "Henry Wadsworth Longfellow" 
  },
  { 
    text: "He who has a why to live can bear almost any how.", 
    author: "Friedrich Nietzsche" 
  },
  { 
    text: "No legacy is so rich as honesty.", 
    author: "William Shakespeare" 
  },
  { 
    text: "We loved with a love that was more than love...", 
    author: "Edgar Allan Poe" 
  },
  { 
    text: "At the touch of love, everyone becomes a poet.", 
    author: "Plato" 
  },
  { 
    text: "What we once enjoyed and deeply loved we can never lose, for all that we love deeply becomes a part of us.", 
    author: "Helen Keller" 
  },
  { 
    text: "We do not remember days; we remember moments.", 
    author: "Cesare Pavese" 
  },
  { 
    text: "Happiness is not something ready-made. It comes from your own actions.", 
    author: "Dalai Lama" 
  },
  { 
    text: "There is no greater agony than bearing an untold story inside you.", 
    author: "Maya Angelou" 
  },
  { 
    text: "Hitch your wagon to a star.", 
    author: "Ralph Waldo Emerson" 
  },
  { 
    text: "A friend is someone who knows all about you and still loves you.", 
    author: "Elbert Hubbard" 
  },
  { 
    text: "No one can make you feel inferior without your consent.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "Hope smiles from the threshold of the year to come, whispering, ‘It will be happier.’", 
    author: "Alfred Lord Tennyson" 
  },
  { 
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.", 
    author: "Walt Whitman" 
  },
  { 
    text: "Do I contradict myself? Very well, then I contradict myself, I am large, I contain multitudes.", 
    author: "Walt Whitman" 
  },
  { 
    text: "All that is gold does not glitter,\nNot all those who wander are lost;\nThe old that is strong does not wither,\nDeep roots are not reached by the frost.", 
    author: "J.R.R. Tolkien" 
  },
  { 
    text: "Ring the bells that still can ring\nForget your perfect offering\nThere is a crack in everything\nThat’s how the light gets in.", 
    author: "Leonard Cohen" 
  },
  { 
    text: "Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.", 
    author: "Albert Camus" 
  },
  { 
    text: "The future belongs to those who believe in the beauty of their dreams.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "If you judge people, you have no time to love them.", 
    author: "Mother Teresa" 
  },
  { 
    text: "To handle yourself, use your head; to handle others, use your heart.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "Tell me, what is it you plan to do\nwith your one wild and precious life?", 
    author: "Mary Oliver" 
  },
  { 
    text: "Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain.", 
    author: "Vivian Greene" 
  },
  { 
    text: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.", 
    author: "Helen Keller" 
  },
  { 
    text: "Success is stumbling from failure to failure with no loss of enthusiasm.", 
    author: "Winston Churchill" 
  },
  { 
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", 
    author: "Brian Tracy" 
  },
  { 
    text: "Don’t cry because it’s over, smile because it happened.", 
    author: "Dr. Seuss" 
  },
  { 
    text: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.", 
    author: "Eleanor Roosevelt" 
  },
  { 
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.", 
    author: "Henry David Thoreau" 
  },
  { 
    text: "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.", 
    author: "William Shakespeare" 
  },

];

// Sound effect
const flipSound = new Audio("https://www.soundjay.com/button/beep-07.wav");

// Get the current day in AEST
function getDayInAEST() {
  const nowUTC = new Date();
  const offsetAEST = 10 * 60; // AEST is UTC+10
  const nowAEST = new Date(nowUTC.getTime() + offsetAEST * 60000);
  return nowAEST.getDate() + nowAEST.getMonth() * 31 + nowAEST.getFullYear() * 366; // Unique key for the day
}

// Get the quote of the day
function getQuoteOfTheDay() {
  const index = getDayInAEST() % quotes.length;
  return quotes[index];
}

// Generate a random letter
function getRandomLetter() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return chars[Math.floor(Math.random() * chars.length)];
}

// Render blank split-flap boxes
function renderBlankBoxes(text, container) {
  container.innerHTML = ''; // Clear container

  const words = text.split(' ');
  words.forEach((word, wordIndex) => {
    const wordContainer = document.createElement('div');
    wordContainer.className = 'word-container';

    // Add boxes for each character in the word
    for (const char of word) {
      const flap = document.createElement('div');
      flap.className = 'split-flap';
      flap.textContent = ''; // Initially blank
      flap.style.margin = '2px'; // Uniform spacing for all flaps
      wordContainer.appendChild(flap);
    }

    // Add space boxes after each word (except the last one)
    if (wordIndex < words.length - 1) {
      const spaceFlap = document.createElement('div');
      spaceFlap.className = 'split-flap space-flap';
      spaceFlap.style.margin = '2px'; // Uniform spacing for spaces
      wordContainer.appendChild(spaceFlap);
    }

    container.appendChild(wordContainer);
  });
}

// Animate a single character reveal
function animateCharacter(flap, char, delay) {
  let flips = 0;
  const totalFlips = 10; // Total flips before revealing the final letter

  const interval = setInterval(() => {
    if (flips < totalFlips) {
      flap.textContent = getRandomLetter(); // Show a random letter
      flap.style.transform = `rotateX(${360 * (flips + 1)}deg)`; // Flip the flap
      flips++;
    } else {
      clearInterval(interval); // Stop flipping
      setTimeout(() => {
        flap.style.transform = `rotateX(${360 * (flips + 1)}deg)`; // Final flip
        flap.textContent = char; // Reveal the final character
        flipSound.currentTime = 0; // Reset sound
        flipSound.play();
      }, delay);
    }
  }, 100); // Flip every 100ms (slower flipping)
}

// Animate the split-flap reveal for all characters
async function splitFlapRevealCharacters(text, container, delayBetween = 150) {
  const flaps = container.querySelectorAll('.split-flap');

  for (let i = 0; i < flaps.length; i++) {
    const char = text[i] || ' '; // Handle spaces
    animateCharacter(flaps[i], char, delayBetween); // Animate each character
    await new Promise((resolve) => setTimeout(resolve, delayBetween)); // Delay between characters
  }
}

// Display the quote and author
async function displayQuote() {
  const quote = getQuoteOfTheDay();
  const quoteContainer = document.getElementById('quote-display');

  // Clear previous content
  quoteContainer.innerHTML = '';

  // Add blank boxes for the quote
  const quoteLine = document.createElement('div');
  quoteLine.className = 'quote-line';
  renderBlankBoxes(quote.text, quoteLine); // Render blank boxes for the quote
  quoteContainer.appendChild(quoteLine);

  // Add blank boxes for the author
  const authorLine = document.createElement('div');
  authorLine.className = 'author-line';
  renderBlankBoxes(`~ ${quote.author}`, authorLine); // Render blank boxes for the author
  quoteContainer.appendChild(authorLine);

  // Reveal quote characters
  await splitFlapRevealCharacters(quote.text, quoteLine);

  // Reveal author characters after the quote
  await new Promise((resolve) => setTimeout(resolve, 500)); // Small delay before revealing the author
  await splitFlapRevealCharacters(`~ ${quote.author}`, authorLine);
}

// Refresh at midnight
setInterval(() => {
  const nowAEST = new Date(new Date().getTime() + 10 * 60 * 60000); // AEST time
  if (nowAEST.getHours() === 0 && nowAEST.getMinutes() === 0) {
    displayQuote();
  }
}, 60000); // Check every minute

// Initial display
displayQuote();
