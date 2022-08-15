
INSERT INTO userDetails VALUES (3, 'test3', 'test3', 'test3');
INSERT INTO userDetails VALUES (4, 'test4', 'test4', 'test4');

-- Test data for events
-- events

INSERT INTO events VALUES (1, 'Test 1 Birthday Party', 'Get litty with test 1', 'https://cdn.musicfeeds.com.au/assets/uploads/2021/02/Rick-roll-2021.png');
INSERT INTO events VALUES (2, 'Coachella', 'the best music festival with the hottest weather', 'https://vickyflipfloptravels.com/wp-content/uploads/2015/02/19-Things-You-16.jpg.webp');
INSERT INTO events VALUES (3, 'Bad example of event');

-- Test 1 birthday party
-- all 4 users
INSERT INTO user_events VALUES (1, 1, 1);
INSERT INTO user_events VALUES (2, 2, 1);
INSERT INTO user_events VALUES (3, 3, 1);
INSERT INTO user_events VALUES (4, 4, 1);

-- Test 2 Coachella
-- no users

-- Bad example of event
-- 2 users
INSERT INTO user_events VALUES (5, 3, 3);
INSERT INTO user_events VALUES (6, 4, 3);
