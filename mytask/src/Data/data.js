const data =  [
        {
            "id": 0,
            "name": "Platform Launch",
            "columns": [
                {
                    "id": 0,
                    "name": "Todo",
                    "tasks": [
                        {
                            "id": 0,
                            "title": "Build UI for onboarding flow",
                            "description": "",
                            "subtasks": [
                                {
                                    "title": "Sign up page",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Sign in page",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Welcome page",
                                    "isCompleted": false
                                }
                            ],
                            "status": "Todo"
                        },
                        {
                            "id": 1,
                            "title": "Build UI for search",
                            "description": "",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Search page",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "title": "Build settings UI",
                            "description": "",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Account page",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Billing page",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 3,
                            "title": "QA and test all major user journeys",
                            "description": "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Internal testing",
                                    "isCompleted": false
                                },
                                {
                                    "title": "External testing",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "Doing",
                    "tasks": [
                        {
                            "id": 4,
                            "title": "Design settings and search pages",
                            "description": "",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Settings - Account page",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Settings - Billing page",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Search page",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "title": "Add account management endpoints",
                            "description": "",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Upgrade plan",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Cancel plan",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Update payment method",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 6,
                            "title": "Design onboarding flow",
                            "description": "",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Sign up page",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Sign in page",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Welcome page",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 7,
                            "title": "Add search enpoints",
                            "description": "",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Add search endpoint",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Define search filters",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 8,
                            "title": "Add authentication endpoints",
                            "description": "",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Define user model",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Add auth endpoints",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "title": "Research pricing points of various competitors and trial different business models",
                            "description": "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            "status": "Doing",
                            "statusId": 1,
                            "subtasks": [
                                {
                                    "title": "Research competitor pricing and business models",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Outline a business model that works for our solution",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Done",
                    "tasks": [
                        {
                            "id": 10,
                            "title": "Conduct 5 wireframe tests",
                            "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Complete 5 wireframe prototype tests",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 11,
                            "title": "Create wireframe prototype",
                            "description": "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Create clickable wireframe prototype in Balsamiq",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 12,
                            "title": "Review results of usability tests and iterate",
                            "description": "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Meet to review notes from previous tests and plan changes",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Make changes to paper prototypes",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Conduct 5 usability tests",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "title": "Create paper prototypes and conduct 10 usability tests with potential customers",
                            "description": "",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Create paper prototypes for version one",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Complete 10 usability tests",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 14,
                            "title": "Market discovery",
                            "description": "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Interview 10 prospective customers",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 15,
                            "title": "Competitor analysis",
                            "description": "",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Find direct and indirect competitors",
                                    "isCompleted": true
                                },
                                {
                                    "title": "SWOT analysis for each competitor",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": 16,
                            "title": "Research the market",
                            "description": "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
                            "status": "Done",
                            "statusId": 2,
                            "subtasks": [
                                {
                                    "title": "Write up research analysis",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Calculate TAM",
                                    "isCompleted": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": 1,
            "name": "Marketing Plan",
            "columns": [
                {
                    "id": 0,
                    "name": "Todo",
                    "tasks": [
                        {
                            "id": 17,
                            "title": "Plan Product Hunt launch",
                            "description": "11",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Find hunter",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Gather assets",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Draft product page",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Notify customers",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Notify network",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Launch!",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 18,
                            "title": "Share on Show HN",
                            "description": "",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Draft out HN post",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Get feedback and refine",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Publish post",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 19,
                            "title": "Write launch article to publish on multiple channels",
                            "description": "",
                            "status": "Todo",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Write article",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Publish on LinkedIn",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Publish on Inndie Hackers",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Publish on Medium",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "Doing",
                    "tasks": []
                }
            ]
        },
        {
            "id": 2,
            "name": "Roadmap",
            "columns": [
                {
                    "name": "Now",
                    "id": 0,
                    "tasks": [
                        {
                            "id": 20,
                            "title": "Launch version one",
                            "description": "",
                            "status": "Now",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Launch privately to our waitlist",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Launch publicly on PH, HN, etc.",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": 21,
                            "title": "Review early feedback and plan next steps for roadmap",
                            "description": "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                            "status": "Now",
                            "statusId": 0,
                            "subtasks": [
                                {
                                    "title": "Interview 10 customers",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Review common customer pain points and suggestions",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Outline next steps for our roadmap",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "Next",
                    "tasks": []
                },
                {
                    "id": 2,
                    "name": "Later",
                    "tasks": []
                }
            ]
        }
    ]

export const getboards= ()=> {
    // let boards = JSON.parse(localStorage.getItem("data"))
    // if(boards == null ||  boards.length== 0 ){
    //     localStorage.setItem('data' , JSON.stringify(data))
    //     return data
    // }
    let Newboards = data.map((board)=> {
        let Newboard = {...board , id:'B'+board.id.toString()}
        let NewColumns = Newboard.columns.map((column)=> {
            let NewColumn = {...column, id:'C'+column.id.toString()}
            let NewTasks = NewColumn.tasks.map((task)=> {
                let NewTask = {...task , id:'T'+task.id.toString()}
                return NewTask
            })
            return {...NewColumn , tasks:NewTasks}
        } )
        return {...Newboard , columns:NewColumns}
    })
    return Newboards ;
}