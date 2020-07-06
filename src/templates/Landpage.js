
const landingPage = {
  id: 1,
  content: {
    element: null,
    children : [
      {
        element: 'nav',
        props: {
          className: 'navbar navbar-expand-lg', // fixed-top',
        },
        children: [
          {
            element: 'a',
            props: {
              className: 'navbar-brand'
            },
            children: 'Home'
          },
          {
            element: 'button',
            props: {
              className: 'navbar-toggler',
              type: 'button'
            },
            children: {
              element: 'span',
              props: {
                className: "navbar-toggler-icon"
              }
            }
          },
          {
            element: 'div',
            props: {
              className: "collapse navbar-collapse ",
            },
            children: {
              element: 'ul',
              props: {
                className: "navbar-nav mr-4"
              },
              children: [
                {
                  element: 'li',
                  props: {
                    className: "nav-item"
                  },
                  children: {
                    element: 'a',
                    props: {
                      className:"nav-link"
                    },
                    children: 'About'
                  }
                },
                {
                  element: 'li',
                  props: {
                    className: "nav-item"
                  },
                  children: {
                    element: 'a',
                    props: {
                      className:"nav-link"
                    },
                    children: 'Portfolio'
                  }
                },
                {
                  element: 'li',
                  props: {
                    className: "nav-item"
                  },
                  children: {
                    element: 'a',
                    props: {
                      className:"nav-link"
                    },
                    children: 'Blog'
                  }
                },
                {
                  element: 'li',
                  props: {
                    className: "nav-item"
                  },
                  children: {
                    element: 'a',
                    props: {
                      className:"nav-link"
                    },
                    children: 'Team'
                  }
                },
                {
                  element: 'li',
                  props: {
                    className: "nav-item"
                  },
                  children: {
                    element: 'a',
                    props: {
                      className:"nav-link"
                    },
                    children: 'Contact'
                  }
                }
              ]
            }
          }
        ]
      },
      {
        element: 'header',
        props: {
          className: 'header',
          style: { height: '100vh' }
        },
        children: [
          {
            element: 'div',
            props: {
              className: 'overlay'
            },
          },
          {
            element: 'div',
            props: {
              className: 'container'
            },
            children: {
              element: 'div',
              props: {
                className: 'description'
              },
              children: {
                element: 'h1',
                children: {
                    element: 'p',
                    children: 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              }
            }
          }
        ]
      },
      {
        element: 'div',
        props: {
          className: 'about'
        },
        children: {
          element: 'div',
          props: {
            className: 'container'
          },
          children: [
            {
              element: 'h1',
              props: {
                className: 'text-center'
              }
            },
            {
              element: 'div',
              props: {
                className: 'row'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: "col-lg-4 col-md-4 col-sm-12"
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src: "images/team-3.jpg",
                        className: 'img-fluid'
                      }
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-justify'
                      },
                      children: 'S.Web Developer'
                    }
                  ]
                },
                {
                  element: 'div',
                  props: {
                    className: "col-lg-8 col-md-8 col-sm-12 desc"
                  },
                  children: [
                    {
                      element: 'h3',
                      children: 'D.John'
                    },
                    {
                      element: 'p',
                      children: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                        '                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
                        '                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                        '                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
                        '                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n' +
                        '                proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        element: 'div',
        props: {
          className: 'portfolio'
        },
        children: [
          {
            element: 'h1',
            props: {
              className: 'text-center'
            },
            children: 'Portfolio'
          },
          {
            element: 'div',
            props: {
              className: 'container'
            },
            children: {
              element: 'div',
              props: {
                className: 'row'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port13.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port1.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port6.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port3.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port11.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/electric.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/classic.jpg"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port1.png"
                    },
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'img',
                    props: {
                      className: 'img-fluid',
                      src: "images/portfolio/port8.png"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      {
        element: 'div',
        props: {
          className: 'blog'
        },
        children: {
          element: 'div',
          props: {
            className: 'container'
          },
          children: [
            {
              element: 'h1',
              props: {
                className: 'text-center'
              },
              children: 'Blog'
            },
            {
              element: 'div',
              props: {
                className: 'row'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-md-4 col-lg-4 col-sm-12'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'card'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: 'card-img'
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "images/posts/polit.jpg",
                            className: "img-fluid"
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-body'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                              className: 'card-title'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'card-text'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-footer'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'card-link'
                          },
                          children: 'Read more'
                        }
                      }
                    ]
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-md-4 col-lg-4 col-sm-12'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'card'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: 'card-img'
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "images/posts/images.jpg",
                            className: "img-fluid"
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-body'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                              className: 'card-title'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'card-text'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-footer'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'card-link'
                          },
                          children: 'Read more'
                        }
                      }
                    ]
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-md-4 col-lg-4 col-sm-12'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'card'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: 'card-img'
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "images/posts/imag2.jpg",
                            className: "img-fluid"
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-body'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                              className: 'card-title'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'card-text'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'card-footer'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'card-link'
                          },
                          children: 'Read more'
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        element: 'div',
        props: {
          className: 'team'
        },
        children: {
          element: 'div',
          props: {
            className: 'container'
          },
          children: [
            {
              element: 'h1',
              props: {
                className: 'text-center'
              },
              children: 'Our Team'
            },
            {
              element: 'div',
              props: {
                className: 'row'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-3 col-md-3 col-sm-12 item'
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src:"images/team-2.jpg",
                        className: "img-fluid",
                        alt: "team"
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'des'
                      },
                      children: 'Sara'
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-muted'
                      },
                      children: 'Manager'
                    }
                  ]
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-3 col-md-3 col-sm-12 item'
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src:"images/team-3.jpg",
                        className: "img-fluid",
                        alt: "team"
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'des'
                      },
                      children: 'Sara'
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-muted'
                      },
                      children: 'Manager'
                    }
                  ]
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-3 col-md-3 col-sm-12 item'
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src:"images/team-2.jpg",
                        className: "img-fluid",
                        alt: "team"
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'des'
                      },
                      children: 'Sara'
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-muted'
                      },
                      children: 'Manager'
                    }
                  ]
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-3 col-md-3 col-sm-12 item'
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src:"images/team-3.jpg",
                        className: "img-fluid",
                        alt: "team"
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'des'
                      },
                      children: 'Sara'
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-muted'
                      },
                      children: 'Manager'
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {element: 'ContactForm'}
     /* {
        element: 'div',
        props: {
          className: 'contact-form'
        },
        children: {
          element: 'div',
          props: {
            className: 'container'
          },
          children: {
            element: 'form',
            children: {
              element: 'div',
              props: {
                className: 'row'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-4 col-md-4 col-sm-12'
                  },
                  children: {
                    element: 'h1',
                    children: 'Get in Touch'
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-lg-8 col-md-8 col-sm-12 right'
                  },
                  children: [
                    {
                      element: 'div',
                      props: {
                        className: 'form-group'
                      },
                      children: {
                        element: 'input',
                        props: {
                          type: "text",
                          className: "form-control form-control-lg",
                          placeholder: "Your Name"
                        }
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'form-group'
                      },
                      children: {
                        element: 'input',
                        props: {
                          type: "email",
                          className: "form-control form-control-lg",
                          placeholder: "YourEmail@email.com"
                        }
                      }
                    },
                    {
                      element: 'div',
                      props: {
                        className: 'form-group'
                      },
                      children: {
                        element: 'textarea',
                        props: {
                          className: "form-control form-control-lg"
                        }
                      }
                    },
                    {
                      element: 'input',
                      props: {
                        type: 'submit',
                        className: 'btn btn-secondary btn-block',
                        value: "Send"
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      }*/
    ]
  }
}

export default landingPage
