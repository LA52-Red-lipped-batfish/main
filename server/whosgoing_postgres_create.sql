
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.userDetails (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
  "name" varchar NOT NULL
	CONSTRAINT "userDetails_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.events (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar,
	"img" varchar,
	CONSTRAINT "events_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE  public.user_events (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"event_id" int NOT NULL,
	CONSTRAINT "user_events_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.user_events ADD CONSTRAINT "user_events_fk0" FOREIGN KEY ("user_id") REFERENCES  public.userDetails("_id");
ALTER TABLE public.user_events ADD CONSTRAINT "user_events_fk1" FOREIGN KEY ("event_id") REFERENCES  public.events("_id");


-- Test data for testing
-- userDetails

INSERT INTO public.userDetails VALUES (1, 'test1', 'test1', 'test1')
INSERT INTO public.userDetails VALUES (2, 'test2', 'test2', 'test2')
INSERT INTO public.userDetails VALUES (3, 'test3', 'test3', 'test3')
INSERT INTO public.userDetails VALUES (4, 'test4', 'test4', 'test4')

-- Test data for events
-- events

INSERT INTO public.events VALUES (1, 'Test 1 Birthday Party', 'Get litty with test 1', 'https://cdn.musicfeeds.com.au/assets/uploads/2021/02/Rick-roll-2021.png')
INSERT INTO public.events VALUES (2, 'Coachella', 'the best music festival with the hottest weather', 'https://vickyflipfloptravels.com/wp-content/uploads/2015/02/19-Things-You-16.jpg.webp')
INSERT INTO public.events VALUES (3, 'Bad example of event')

-- Test 1 birthday party
-- all 4 users
INSERT INTO public.user_events VALUES (1, 1, 1)
INSERT INTO public.user_events VALUES (2, 2, 1)
INSERT INTO public.user_events VALUES (3, 3, 1)
INSERT INTO public.user_events VALUES (4, 4, 1)

-- Test 2 Coachella
-- no users

-- Bad example of event
-- 2 users
INSERT INTO public.user_events VALUES (5, 3, 3)
INSERT INTO public.user_events VALUES (6, 4, 3)
