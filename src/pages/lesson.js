import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaTwitter, FaFacebook, FaComments } from "react-icons/fa";

function PostContent() {

const code_a = `
#include &lt;epoxy/gl.h&gt;
#include &lt;epoxy/glx.h&gt;
#include &lt;gtk/gtk.h&gt;
<span>#include "DashGL/dashgl.h"</span>

static void on_realize(GtkGLArea *area);
static void on_render(GtkGLArea *area, GdkGLContext *context);

GLuint program;
GLuint vao, vbo_triangle;
GLint attribute_coord2d;

int main(int argc, char *argv[]) {

GtkWidget *window;
GtkWidget *glArea;

gtk_init(&amp;argc, &amp;argv);

// Initialize Window

window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
gtk_window_set_title(GTK_WINDOW(window), "Brickout Tutorial");
gtk_window_set_position(GTK_WINDOW(window), GTK_WIN_POS_CENTER);
gtk_window_set_default_size(GTK_WINDOW(window), 640, 480);
gtk_window_set_type_hint(GTK_WINDOW(window), GDK_WINDOW_TYPE_HINT_UTILITY);
g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

// Initialize GTK GL Area

glArea = gtk_gl_area_new();
gtk_widget_set_vexpand(glArea, TRUE);
gtk_widget_set_hexpand(glArea, TRUE);
g_signal_connect(glArea, "realize", G_CALLBACK(on_realize), NULL);
g_signal_connect(glArea, "render", G_CALLBACK(on_render), NULL);
gtk_container_add(GTK_CONTAINER(window), glArea);

// Show widgets

gtk_widget_show_all(window);
gtk_main();

return 0;

}

static void on_realize(GtkGLArea *area) {

// Debug Message

g_print("on realize\n");

gtk_gl_area_make_current(area);
if(gtk_gl_area_get_error(area) != NULL) {
fprintf(stderr, "Unknown error\n");
return;
}

const GLubyte *renderer = glGetString(GL_RENDER);
const GLubyte *version = glGetString(GL_VERSION);
const GLubyte *shader = glGetString(GL_SHADING_LANGUAGE_VERSION);

printf("Shader %s\n", shader);
printf("Renderer: %s\n", renderer);
printf("OpenGL version supported %s\n", version);

glClearColor(1.0f, 1.0f, 1.0f, 1.0f);

glGenVertexArrays(1, &amp;vao);
glBindVertexArray(vao);

GLfloat triangle_vertices[] = {
 0.0,  0.8,
-0.8, -0.8,
 0.8, -0.8
};

glGenBuffers(1, &amp;vbo_triangle);
glBindBuffer(GL_ARRAY_BUFFER, vbo_triangle);
glBufferData(
GL_ARRAY_BUFFER,
sizeof(triangle_vertices),
triangle_vertices,
GL_STATIC_DRAW
);

glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 0, 0);
glEnableVertexAttribArray(0);
glDisableVertexAttribArray(0);

GLint compile_ok = GL_FALSE;
GLint link_ok = GL_FALSE;
<span>
GLuint vs = shader_load_file("shader/vertex.glsl", GL_VERTEX_SHADER);
GLuint fs = shader_load_file("shader/fragment.glsl", GL_FRAGMENT_SHADER);
</span>
program = glCreateProgram();
glAttachShader(program, vs);
glAttachShader(program, fs);
glLinkProgram(program);
glGetProgramiv(program, GL_LINK_STATUS, &amp;link_ok);
if(!link_ok) {
fprintf(stderr, "Error when linking program\n");
return;
}

const char *attribute_name = "coord2d";
attribute_coord2d = glGetAttribLocation(program, attribute_name);
if(attribute_coord2d == -1) {
fprintf(stderr, "Could not bind attribute %s\n", attribute_name);
return;
}
}

static void on_render(GtkGLArea *area, GdkGLContext *context) {

g_print("on render\n");

glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

glUseProgram(program);

glBindVertexArray(vao);
glEnableVertexAttribArray(attribute_coord2d);

glBindBuffer(GL_ARRAY_BUFFER, vbo_triangle);
glVertexAttribPointer(
attribute_coord2d,
2,
GL_FLOAT,
GL_FALSE,
0,
0
);

glDrawArrays(GL_TRIANGLES, 0, 3);
glDisableVertexAttribArray(attribute_coord2d);

}
`

const code_b = `
<span>#version 120

attribute vec2 coord2d;
void main (void) {
gl_Position = vec4(coord2d, 0.0, 1.0);
}</span>
`

const code_c = `
<span>#version 120

void main(void) {

gl_FragColor[0] = 0.0;
gl_FragColor[1] = 0.0;
gl_FragColor[2] = 1.0;

}</span>
`

	return (
		<section>

        <p>
          Now that we have tested that GTK and OpenGL works,
          we're going to move our shader files out of our source
          code into separate files. We're going to clone DashGL
          into our project folder for this.
        </p>

        <pre>$ git clone https://github.com/kion-dgl/DashGL-Library.git DashGL
$ mkdir shader</pre>

        <p>
          Now we can simplify our main.c.
        </p>

        <pre data-file="main.c">{ code_a }</pre>

        <p>
          Vertex Shader
        </p>

        <pre data-file="shader/vertex.glsl">{ code_b }</pre>

        <p>
          Fragment Shader
        </p>

        <pre data-file="shader/fragment.glsl">{ code_c }</pre>

        <p>
          Compile with:
        </p>

        <pre>$ gcc -c -o DashGL/dashgl.o DashGL/dashgl.c -lepoxy -lpng -lm
$ gcc `pkg-config --cflags gtk+-3.0` main.c DashGL/dashgl.o `pkg-config --libs gtk+-3.0` \
-lepoxy -lm -lpng</pre>

        <p>
          Run with:
        </p>

        <pre>$ ./a.out</pre>

		</section>
	)

}

function Sidebar() {

	const TableOfContents = [
		"Introduction",
		"Open a Window",
		"Draw a Triangle",
		"Separate Shaders",
		"Shader Program",
		"Orthagonal Coordinates",
		"Draw a Ball",
		"Set Ball Position",
		"Move a Ball",
		"Bounce a Ball",
		"Define Ball Struct",
		"Draw a Paddle",
		"Paddle Uniform Color",
		"Keydown Callbacks",
		"Paddle Hit Detection",
		"Draw Row of Bricks",
		"Draw Grid of Bricks",
		"Break Some Bricks"
	]

	return (
		<div className="col-md-3 mb-4">
			<section>
				<ol class="list-group list-group-numbered">
		  		{TableOfContents.map( (lesson, index) => {
					if(index !== 3) {
						return <li class="list-group-item">{ lesson }</li>
					} else {
						return <li class="list-group-item active">{ lesson }</li>
					}
				})}
				</ol>
			</section>
		</div>
	)

}


function Post() {

	return (
  <main className="mt-4 mb-5">
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-md-8 mb-4">
          <section className="border-bottom mb-4">
            <img src="https://gtk.dashgl.com/img/bricks_003.png"
              className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

            <div className="row align-items-center mb-4">
              <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                <img src="https://avatars.githubusercontent.com/u/25621780?v=4" className="rounded-circle shadow-1-strong me-2"
                  height="35" alt="" loading="lazy" />
                <span> Published <u>Sept.  24, 2017</u> by</span>
                <a href="https://github.com/kion-dgl" className="text-dark">Kion</a>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <button type="button" className="btn btn-primary px-3 me-1" style={{ backgroundColor: "#3b5998"}}>
                  <FaFacebook/>
                </button>
                <button type="button" className="btn btn-primary px-3 me-1" style={{ backgroundColor: "#3b5998"}}>
                  <FaTwitter/>
                </button>
                <button type="button" className="btn btn-primary px-3 me-1">
                  <FaComments/>
                </button>
              </div>
            </div>
          </section>

         <PostContent/>

          <section className="border-bottom border-top pt-3 mb-3">
            <p className="text-center"><strong>Comments: 3</strong></p>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Marta Dolores</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Valeria Groove</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Antonia Velez</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-center"><strong>Leave a reply</strong></p>

            <form>
              <div className="form-outline mb-4">
                <input type="text" id="form4Example1" className="form-control" />
                <label className="form-label" htmlFor="form4Example1">Name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form4Example2" className="form-control" />
                <label className="form-label" htmlFor="form4Example2">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label className="form-label" htmlFor="form4Example3">Text</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this comment
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Publish
              </button>
            </form>
          </section>
        </div>

        <Sidebar/>

      </div>
    </div>
  </main>
	)

}

export default function Lesson() {

	return (
		<>
			<Navbar/>
			<Post/>
			<Footer/>
		</>
	)

}
