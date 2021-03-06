package com.team2.camel;

import org.apache.camel.main.Main;

import com.team2.routes.RestResponseFailureRoute;
import com.team2.routes.RestResponseSuccessRoute;
import com.team2.routes.GmailRoute;
import com.team2.routes.GoogleCalendarRoute;
import com.team2.routes.UetCoursesAuthRoute;
import com.team2.routes.UetCoursesCalendarRoute;
import com.team2.routes.WebServiceRoute;
import com.team2.routes.SchedulerRoute;

public class Launcher {
    /**
     * A main() so we can easily run these routing rules in our IDE
     */
    public static void main(String... args) throws Exception {
    	System.setProperty("net.fortuna.ical4j.timezone.cache.impl", "net.fortuna.ical4j.util.MapTimeZoneCache");

        Main main = new Main();
        main.addRouteBuilder(new UetCoursesCalendarRoute());
        main.addRouteBuilder(new UetCoursesAuthRoute());
        main.addRouteBuilder(new WebServiceRoute());
        main.addRouteBuilder(new RestResponseSuccessRoute());
        main.addRouteBuilder(new RestResponseFailureRoute());
        main.addRouteBuilder(new GmailRoute());
        main.addRouteBuilder(new GoogleCalendarRoute());
//        main.addRouteBuilder(new SchedulerRoute());
        main.run(args);
    }
}
