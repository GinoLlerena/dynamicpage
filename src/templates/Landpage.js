
const landingPage = {
  id: 1,
  content: {
    element: null,
    children : [
      {
        element: 'nav',
        props: {
          className: 'w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b h-14 px-4 flex items-center justify-between', // compact, modern navbar
        },
        children: [
          {
            element: 'a',
            props: {
              className: 'text-xl font-semibold'
            },
            children: 'Home'
          },
          {
            element: 'button',
            props: {
              className: 'md:hidden text-gray-700',
              type: 'button'
            },
            children: {
              element: 'span',
              props: {
                className: 'block w-6 h-6 bg-gray-700'
              }
            }
          },
          {
            element: 'div',
            props: {
              className: 'w-full md:flex md:items-center md:justify-end',
            },
            children: {
              element: 'ul',
              props: {
                className: 'flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 ml-auto'
              },
              children: [
                {
                  element: 'li',
                  props: {},
                  children: {
                    element: 'a',
                    props: {
                      className:'text-gray-700 hover:text-accent-600'
                    },
                    children: 'About'
                  }
                },
                {
                  element: 'li',
                  props: {},
                  children: {
                    element: 'a',
                    props: {
                      className:'text-gray-700 hover:text-accent-600'
                    },
                    children: 'Portfolio'
                  }
                },
                {
                  element: 'li',
                  props: {},
                  children: {
                    element: 'a',
                    props: {
                      className:'text-gray-700 hover:text-accent-600'
                    },
                    children: 'Blog'
                  }
                },
                {
                  element: 'li',
                  props: {},
                  children: {
                    element: 'a',
                    props: {
                      className:'text-gray-700 hover:text-accent-600'
                    },
                    children: 'Team'
                  }
                },
                {
                  element: 'li',
                  props: {},
                  children: {
                    element: 'a',
                    props: {
                      className:'text-gray-700 hover:text-accent-600'
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
          className: 'relative bg-cover bg-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]',
          style: { backgroundImage: "url('/images/headerback.jpg')" }
        },
        children: [
          {
            element: 'div',
            props: {
              className: 'absolute inset-0 bg-black/40'
            },
          },
          {
            element: 'div',
            props: {
              className: 'mx-auto max-w-7xl px-4 flex items-center min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]'
            },
            children: {
              element: 'div',
              props: {
                className: 'relative z-10 p-6 md:p-8'
              },
              children: {
                element: 'h1',
                props: {
                  className: 'text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow text-center md:text-left'
                },
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
          className: 'my-16'
        },
        children: {
          element: 'div',
          props: {
            className: 'mx-auto max-w-7xl px-4'
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
                className: 'grid grid-cols-12 gap-6'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: [
                    {
                      element: 'img',
                      props: {
                        src: "/images/team-3.jpg",
                        className: 'max-w-full h-auto rounded'
                      }
                    },
                    {
                      element: 'span',
                      props: {
                        className: 'text-justify text-gray-500'
                      },
                      children: 'S.Web Developer'
                    }
                  ]
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-8 border-l-4 border-accent-600 p-6'
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
          className: 'py-16'
        },
        children: [
          {
            element: 'h1',
            props: {
              className: 'text-center text-3xl font-semibold mb-10'
            },
            children: 'Portfolio'
          },
          {
            element: 'div',
            props: {
              className: 'mx-auto max-w-7xl px-4'
            },
            children: {
              element: 'div',
              props: {
                className: 'grid grid-cols-12 gap-4 sm:gap-6'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port13.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 654,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port1.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 4076,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port6.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1312,
                        height: 654,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port3.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 1512,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port11.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 2067,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/electric.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 3308,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/Classic.jpg",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1600,
                        height: 3391,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port1.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 4076,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
                    }
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: { className: 'aspect-[4/3] overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow' },
                    children: {
                      element: 'img',
                      props: {
                        className: 'w-full h-full object-cover',
                        src: "/images/portfolio/port8.png",
                        alt: 'Portfolio item',
                        loading: 'lazy',
                        decoding: 'async',
                        width: 1319,
                        height: 863,
                        sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                      }
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
          className: 'py-16'
        },
        children: {
          element: 'div',
          props: {
            className: 'mx-auto max-w-7xl px-4'
          },
          children: [
            {
              element: 'h1',
              props: {
                className: 'text-center text-3xl font-semibold mb-10'
              },
              children: 'Blog'
            },
            {
              element: 'div',
              props: {
                className: 'grid grid-cols-12 gap-6 items-stretch'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'shadow rounded overflow-hidden bg-white h-full flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: ''
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "/images/posts/polit.jpg",
                            className: 'w-full h-48 object-cover',
                            width: 387,
                            height: 130,
                            loading: 'lazy',
                            decoding: 'async',
                            sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 flex-grow'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                            className: 'text-accent-600 font-semibold'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'text-gray-600'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 border-t mt-auto'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'link'
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
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'shadow rounded overflow-hidden bg-white h-full flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: ''
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "/images/posts/images.jpg",
                            className: 'w-full h-48 object-cover',
                            width: 194,
                            height: 259,
                            loading: 'lazy',
                            decoding: 'async',
                            sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 flex-grow'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                            className: 'text-accent-600 font-semibold'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'text-gray-600'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 border-t mt-auto'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'link'
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
                    className: 'col-span-12 md:col-span-6 lg:col-span-4'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'shadow rounded overflow-hidden bg-white h-full flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: {
                          className: ''
                        },
                        children: {
                          element: 'img',
                          props: {
                            src: "/images/posts/imag2.jpg",
                            className: 'w-full h-48 object-cover',
                            width: 205,
                            height: 246,
                            loading: 'lazy',
                            decoding: 'async',
                            sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
                          }
                        }
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 flex-grow'
                        },
                        children: [
                          {
                            element: 'h4',
                            props: {
                            className: 'text-accent-600 font-semibold'
                            },
                            children: 'Post Title'
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'text-gray-600'
                            },
                            children: 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-4 border-t mt-auto'
                        },
                        children: {
                          element: 'a',
                          props: {
                            className: 'link'
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
          className: 'py-16'
        },
        children: {
          element: 'div',
          props: {
            className: 'mx-auto max-w-7xl px-4'
          },
          children: [
            {
              element: 'h1',
              props: {
                className: 'text-center text-3xl font-semibold mb-10'
              },
              children: 'Our Team'
            },
            {
              element: 'div',
              props: {
                className: 'grid grid-cols-12 gap-6 items-stretch'
              },
              children: [
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-3'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'h-full bg-white rounded shadow overflow-hidden flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: { className: 'relative' },
                        children: [
                          {
                            element: 'img',
                            props: {
                              src:"/images/team-2.jpg",
                              className: 'w-full h-64 object-cover',
                              alt: "team",
                              loading: 'lazy'
                            }
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'bg-accent-600 text-white text-center px-2 py-1 absolute bottom-2 w-11/12 left-1/2 -translate-x-1/2 rounded'
                            },
                            children: 'Sara'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-3 border-t mt-auto text-center text-gray-500'
                        },
                        children: 'Manager'
                      }
                    ]
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-3'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'h-full bg-white rounded shadow overflow-hidden flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: { className: 'relative' },
                        children: [
                          {
                            element: 'img',
                            props: {
                              src:"/images/team-3.jpg",
                              className: 'w-full h-64 object-cover',
                              alt: "team",
                              loading: 'lazy'
                            }
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'bg-accent-600 text-white text-center px-2 py-1 absolute bottom-2 w-11/12 left-1/2 -translate-x-1/2 rounded'
                            },
                            children: 'Sara'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-3 border-t mt-auto text-center text-gray-500'
                        },
                        children: 'Manager'
                      }
                    ]
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-3'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'h-full bg-white rounded shadow overflow-hidden flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: { className: 'relative' },
                        children: [
                          {
                            element: 'img',
                            props: {
                              src:"/images/team-2.jpg",
                              className: 'w-full h-64 object-cover',
                              alt: "team",
                              loading: 'lazy'
                            }
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'bg-accent-600 text-white text-center px-2 py-1 absolute bottom-2 w-11/12 left-1/2 -translate-x-1/2 rounded'
                            },
                            children: 'Sara'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-3 border-t mt-auto text-center text-gray-500'
                        },
                        children: 'Manager'
                      }
                    ]
                  }
                },
                {
                  element: 'div',
                  props: {
                    className: 'col-span-12 md:col-span-6 lg:col-span-3'
                  },
                  children: {
                    element: 'div',
                    props: {
                      className: 'h-full bg-white rounded shadow overflow-hidden flex flex-col'
                    },
                    children: [
                      {
                        element: 'div',
                        props: { className: 'relative' },
                        children: [
                          {
                            element: 'img',
                            props: {
                              src:"/images/team-3.jpg",
                              className: 'w-full h-64 object-cover',
                              alt: "team",
                              loading: 'lazy'
                            }
                          },
                          {
                            element: 'div',
                            props: {
                              className: 'bg-accent-600 text-white text-center px-2 py-1 absolute bottom-2 w-11/12 left-1/2 -translate-x-1/2 rounded'
                            },
                            children: 'Sara'
                          }
                        ]
                      },
                      {
                        element: 'div',
                        props: {
                          className: 'p-3 border-t mt-auto text-center text-gray-500'
                        },
                        children: 'Manager'
                      }
                    ]
                  }
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
