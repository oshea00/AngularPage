﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularPage.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddEvent()
        {
            return View();
        }


        public JsonResult GetEvent(int id)
        {
            var myevent = new Event { 
                name = "Angular Boot Camp",
                date = DateTime.Now,
                time = "10:30 am",
                rating = 3.2,
                location = new Location { 
                    address = "Google Headquarters",
                    city = "Mountain View",
                    province = "CA",
                },
                imageUrl = "/Content/images/russell_logo.gif",
                sessions = new List<Session> {
                    new Session { 
                        name = "Directives Masterclass Beginner",
                        creatorName = "Mike O'Shea",
                        duration = "1 hour",
                        level = "advanced",
                        description = "This is a sample description for the session abstract",
                        upVoteCount = 10,
                    },
                    new Session { 
                        name = "scopes for fun and profit",
                        level = "beginner",
                        upVoteCount = 0,
                    },
                    new Session { 
                        name = "well-behaved Controllers",
                        level = "advanced",
                        upVoteCount = 0,
                    },
                }
            };

            return Json(myevent,JsonRequestBehavior.AllowGet);

        }
    }
}
