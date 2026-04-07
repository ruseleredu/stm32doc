---
id: vs-code-cube-cli
title: Cube CLI
description: Command line tool integrated with STM32CubeIDE for Visual Studio Code.
slug: /vs-code-cube-cli
---



## CLI integrated with STM32CubeIDE for Visual Studio Code. 

- [API Manual](https://dev.st.com/stm32cube-docs/stm32cubeide-vscode/1.0.0/en/docs/markup/development/cli_toolbox.html) 

## cube 

`cube [FLAGS] [COMMAND | RUNTIME] [OPTIONS]`

### Prints this help

```bash
cube --help
```

```bash
cube [FLAGS] [COMMAND | RUNTIME] [OPTIONS]
Copyright (C) 2026 STMicroelectronics.

Flags: 
        --help                          Prints this help
        --help-license                  Prints the license agreement for the 'cube' tool
        --json                          Print output as JSON (for certain flags only)
        --cwd      <arg1>               Run cube command in different working directory
        --resolve                       Print the resolved COMMAND/RUNTIME
        --list                          Lists loaded bundles
        --tool-paths                    Show the merged paths to Cube tools that will be prepended to PATH
        --show-settings                 Prints Cube configuration values
        --get-current-value <arg1>                      Prints the used values for the CLI environment, e.g. path to bundles or packs, use settings keys
        --set      <arg1> <arg2>        Sets a Cube configuration value, e.g. 'artifactory_api_key' or 'cmsis_pack_root'
        --unset    <arg1>               Removes a Cube configuration value
        --verbose                       Enables verbose output for the cube cli wrapper tool
        --no-detach                     Disables the use of 'detach' by any command or flag
        --detach                        Detaches the launched command.
        --dry-run                       For supporting commands run a command without performing any changes
        --version                       Prints the version
        --with     <arg1>               Specify a specific version or version range for a bundle to be used for the COMMAND/RUNTIME
        bundle     ...                  Install/uninstall bundles
        bundle-admin ...                        Admin tool for bundles

Environment variables:
        CUBE_BUNDLE_PATH                -- Override local bundle repository location (C:\Users\ruseler\AppData\Local\stm32cube\bundles)
        CUBE_BUNDLE_PATH_EXTRA          -- Include extra bundles in addition to installed ones (is searched recursively)
        CUBE_BUNDLE_REGISTRY            -- URL to the online cube bundle registry
        CMSIS_PACK_ROOT                 -- Path to CMSIS Pack storage (C:\Users\ruseler\AppData\Local\stm32cube\packs)
        CUBE_CACHE_PATH                 -- Path to cache storage (C:\Users\ruseler\AppData\Local\stm32cube)
        CUBE_LOG_PATH                   -- Path to log storage (C:\Users\ruseler\AppData\Roaming\stm32cube\logs)
        CUBE_NETWORK_MAX_REDIRECT       -- Max number of redirect to follow (10)
        CUBE_NETWORK_RETRY              -- Number of retry attempts (5)
        CUBE_NETWORK_TIMEOUT            -- Timeout for network accesses (7200000ms)

COMMANDS: Run '[COMMAND] --help' to get more details
        arm-none-eabi-gdb          
        cmake                      
        cmsis-scanner              
        ide-project-convert        
        java                       
        ninja                      
        node                       
        pack                       
        programmer                 
        rtos-proxy                 
        starm-clangd               
        stlink-gdbserver           
        stlink-gdbserver-pure      
        stlink-server-start        
        stlink-upgrade             
        stm32cubeide-osgi-export   
```

### Prints the version
```bash
cube --version
```

### Lists loaded bundles

```bash
cube --list
```                 


## arm-none-eabi-gdb    
```bash
cube arm-none-eabi-gdb --help
```

This is the GNU debugger.  

### Usage:

```bash
gdb [options] [executable-file [core-file or process-id]]
gdb [options] --args executable-file [inferior-arguments ...]
```

### Selection of debuggee and its files:

```bash
  --args             Arguments after executable-file are passed to inferior.
  --core=COREFILE    Analyze the core dump COREFILE.
  --exec=EXECFILE    Use EXECFILE as the executable.
  --pid=PID          Attach to running process PID.
  --directory=DIR    Search for source files in DIR.
  --se=FILE          Use FILE as symbol file and executable file.
  --symbols=SYMFILE  Read symbols from SYMFILE.
  --readnow          Fully read symbol files on first access.
  --readnever        Do not read symbol files.
  --write            Set writing into executable and core files.
```

### Initial commands and command files:

```bash
  --command=FILE, -x Execute GDB commands from FILE.
  --init-command=FILE, -ix
                     Like -x but execute commands before loading inferior.
  --eval-command=COMMAND, -ex
                     Execute a single GDB command.
                     May be used multiple times and in conjunction
                     with --command.
  --init-eval-command=COMMAND, -iex
                     Like -ex but before loading inferior.
  --nh               Do not read ~/.gdbinit.
  --nx               Do not read any .gdbinit files in any directory.
```

### Output and user interface control:

```bash
  --fullname         Output information used by emacs-GDB interface.
  --interpreter=INTERP
                     Select a specific interpreter / user interface.
  --tty=TTY          Use TTY for input/output by the program being debugged.
  -w                 Use the GUI interface.
  --nw               Do not use the GUI interface.
  -q, --quiet, --silent
                     Do not print version number on startup.
```

### Operating modes:

```bash
  --batch            Exit after processing options.
  --batch-silent     Like --batch, but suppress all gdb stdout output.
  --return-child-result
                     GDB exit code will be the child's exit code.
  --configuration    Print details about GDB configuration and then exit.
  --help             Print this message and then exit.
  --version          Print version information and then exit.
```

### Remote debugging options:

```bash
  -b BAUDRATE        Set serial port baud rate used for remote debugging.
  -l TIMEOUT         Set timeout in seconds for remote debugging.
```

### Other options:

```bash
  --cd=DIR           Change current directory to DIR.
  --data-directory=DIR, -D
                     Set GDB's data-directory to DIR.
```

- At startup, GDB reads the following early init files and executes their commands: None found.
- At startup, GDB reads the following init files and executes their commands: None found.
- For more information, type "help" from within GDB, or consult the GDB manual (available as on-line info or a printed manual).
- Report bugs to https://www.gnu.org/software/gdb/bugs/.
- You can ask GDB-related questions on the GDB users mailing list (gdb@sourceware.org) or on GDB's IRC channel (#gdb on Libera.Chat).


## cmake   
```bash
cube cmake --help
```
### Usage
```bash
Usage

  cmake [options] <path-to-source>
  cmake [options] <path-to-existing-build>
  cmake [options] -S <path-to-source> -B <path-to-build>

Specify a source directory to (re-)generate a build system for it in the
current working directory.  Specify an existing build directory to
re-generate its build system.
```

### Options

```bash
  -S <path-to-source>          = Explicitly specify a source directory.
  -B <path-to-build>           = Explicitly specify a build directory.
  -C <initial-cache>           = Pre-load a script to populate the cache.
  -D <var>[:<type>]=<value>    = Create or update a cmake cache entry.
  -U <globbing_expr>           = Remove matching entries from CMake cache.
  -G <generator-name>          = Specify a build system generator.
  -T <toolset-name>            = Specify toolset name if supported by
                                 generator.
  -A <platform-name>           = Specify platform name if supported by
                                 generator.
  --toolchain <file>           = Specify toolchain file
                                 [CMAKE_TOOLCHAIN_FILE].
  --install-prefix <directory> = Specify install directory
                                 [CMAKE_INSTALL_PREFIX].
  --project-file <project-file-name>
                               = Specify an alternate project file name.
  -Wdev                        = Enable developer warnings.
  -Wno-dev                     = Suppress developer warnings.
  -Werror=dev                  = Make developer warnings errors.
  -Wno-error=dev               = Make developer warnings not errors.
  -Wdeprecated                 = Enable deprecation warnings.
  -Wno-deprecated              = Suppress deprecation warnings.
  -Werror=deprecated           = Make deprecated macro and function warnings
                                 errors.
  -Wno-error=deprecated        = Make deprecated macro and function warnings
                                 not errors.
  --preset <preset>,--preset=<preset>
                               = Specify a configure preset.
  --list-presets[=<type>]      = List available presets.
  --workflow [<options>]       = Run a workflow preset.
  -E                           = CMake command mode.  Run "cmake -E" for a
                                 summary of commands.
  -L[A][H]                     = List non-advanced cached variables.
  -LR[A][H] <regex>            = Show cached variables that match the regex.
  --fresh                      = Configure a fresh build tree, removing any
                                 existing cache file.
  --build <dir>                = Build a CMake-generated project binary tree.
                                 Run "cmake --build" to see compatible
                                 options and a quick help.
  --install <dir>              = Install a CMake-generated project binary
                                 tree.  Run "cmake --install" to see
                                 compatible options and a quick help.
  --open <dir>                 = Open generated project in the associated
                                 application.
  -N                           = View mode only.
  -P <file>                    = Process script mode.
  --find-package               = Legacy pkg-config like mode.  Do not use.
  --graphviz=<file>            = Generate graphviz of dependencies, see
                                 CMakeGraphVizOptions.cmake for more.
  --system-information [file]  = Dump information about this system.
  --print-config-dir           = Print CMake config directory for user-wide
                                 FileAPI queries.
  --log-level=<ERROR|WARNING|NOTICE|STATUS|VERBOSE|DEBUG|TRACE>
                               = Set the verbosity of messages from CMake
                                 files.  --loglevel is also accepted for
                                 backward compatibility reasons.
  --log-context                = Prepend log messages with context, if given
  --debug-trycompile           = Do not delete the try_compile build tree.
                                 Only useful on one try_compile at a time.
  --debug-output               = Put cmake in a debug mode.
  --debug-find                 = Put cmake find in a debug mode.
  --debug-find-pkg=<pkg-name>[,...]
                               = Limit cmake debug-find to the
                                 comma-separated list of packages
  --debug-find-var=<var-name>[,...]
                               = Limit cmake debug-find to the
                                 comma-separated list of result variables
  --trace                      = Put cmake in trace mode.
  --trace-expand               = Put cmake in trace mode with variable
                                 expansion.
  --trace-format=<human|json-v1>
                               = Set the output format of the trace.
  --trace-source=<file>        = Trace only this CMake file/module.  Multiple
                                 options allowed.
  --trace-redirect=<file>      = Redirect trace output to a file instead of
                                 stderr.
  --warn-uninitialized         = Warn about uninitialized values.
  --no-warn-unused-cli         = Don't warn about command line options.
  --check-system-vars          = Find problems with variable usage in system
                                 files.
  --compile-no-warning-as-error= Ignore COMPILE_WARNING_AS_ERROR property and
                                 CMAKE_COMPILE_WARNING_AS_ERROR variable.
  --link-no-warning-as-error   = Ignore LINK_WARNING_AS_ERROR property and
                                 CMAKE_LINK_WARNING_AS_ERROR variable.
  --profiling-format=<fmt>     = Output data for profiling CMake scripts.
                                 Supported formats: google-trace
  --profiling-output=<file>    = Select an output path for the profiling data
                                 enabled through --profiling-format.
  -h,-H,--help,-help,-usage,/? = Print usage information and exit.
  --version,-version,/V [<file>]
                               = Print version number and exit.
  --help <keyword> [<file>]    = Print help for one keyword and exit.
  --help-full [<file>]         = Print all help manuals and exit.
  --help-manual <man> [<file>] = Print one help manual and exit.
  --help-manual-list [<file>]  = List help manuals available and exit.
  --help-command <cmd> [<file>]= Print help for one command and exit.
  --help-command-list [<file>] = List commands with help available and exit.
  --help-commands [<file>]     = Print cmake-commands manual and exit.
  --help-module <mod> [<file>] = Print help for one module and exit.
  --help-module-list [<file>]  = List modules with help available and exit.
  --help-modules [<file>]      = Print cmake-modules manual and exit.
  --help-policy <cmp> [<file>] = Print help for one policy and exit.
  --help-policy-list [<file>]  = List policies with help available and exit.
  --help-policies [<file>]     = Print cmake-policies manual and exit.
  --help-property <prop> [<file>]
                               = Print help for one property and exit.
  --help-property-list [<file>]= List properties with help available and
                                 exit.
  --help-properties [<file>]   = Print cmake-properties manual and exit.
  --help-variable var [<file>] = Print help for one variable and exit.
  --help-variable-list [<file>]= List variables with help available and exit.
  --help-variables [<file>]    = Print cmake-variables manual and exit.
```

### Generators

```bash
The following generators are available on this platform (* marks default):
  Visual Studio 17 2022        = Generates Visual Studio 2022 project files.
                                 Use -A option to specify architecture.
  Visual Studio 16 2019        = Generates Visual Studio 2019 project files.
                                 Use -A option to specify architecture.
  Visual Studio 15 2017 [arch] = Generates Visual Studio 2017 project files.
                                 Optional [arch] can be "Win64" or "ARM".
  Visual Studio 14 2015 [arch] = Generates Visual Studio 2015 project files.
                                 Optional [arch] can be "Win64" or "ARM".
  Borland Makefiles            = Generates Borland makefiles.
* NMake Makefiles              = Generates NMake makefiles.
  NMake Makefiles JOM          = Generates JOM makefiles.
  MSYS Makefiles               = Generates MSYS makefiles.
  MinGW Makefiles              = Generates a make file for use with
                                 mingw32-make.
  Green Hills MULTI            = Generates Green Hills MULTI files
                                 (experimental, work-in-progress).
  Unix Makefiles               = Generates standard UNIX makefiles.
  Ninja                        = Generates build.ninja files.
  Ninja Multi-Config           = Generates build-<Config>.ninja files.
  Watcom WMake                 = Generates Watcom WMake makefiles.
  CodeBlocks - MinGW Makefiles = Generates CodeBlocks project files
                                 (deprecated).
  CodeBlocks - NMake Makefiles = Generates CodeBlocks project files
                                 (deprecated).
  CodeBlocks - NMake Makefiles JOM
                               = Generates CodeBlocks project files
                                 (deprecated).
  CodeBlocks - Ninja           = Generates CodeBlocks project files
                                 (deprecated).
  CodeBlocks - Unix Makefiles  = Generates CodeBlocks project files
                                 (deprecated).
  CodeLite - MinGW Makefiles   = Generates CodeLite project files
                                 (deprecated).
  CodeLite - NMake Makefiles   = Generates CodeLite project files
                                 (deprecated).
  CodeLite - Ninja             = Generates CodeLite project files
                                 (deprecated).
  CodeLite - Unix Makefiles    = Generates CodeLite project files
                                 (deprecated).
  Eclipse CDT4 - NMake Makefiles
                               = Generates Eclipse CDT 4.0 project files
                                 (deprecated).
  Eclipse CDT4 - MinGW Makefiles
                               = Generates Eclipse CDT 4.0 project files
                                 (deprecated).
  Eclipse CDT4 - Ninja         = Generates Eclipse CDT 4.0 project files
                                 (deprecated).
  Eclipse CDT4 - Unix Makefiles= Generates Eclipse CDT 4.0 project files
                                 (deprecated).
  Kate - MinGW Makefiles       = Generates Kate project files (deprecated).
  Kate - NMake Makefiles       = Generates Kate project files (deprecated).
  Kate - Ninja                 = Generates Kate project files (deprecated).
  Kate - Ninja Multi-Config    = Generates Kate project files (deprecated).
  Kate - Unix Makefiles        = Generates Kate project files (deprecated).
  Sublime Text 2 - MinGW Makefiles
                               = Generates Sublime Text 2 project files
                                 (deprecated).
  Sublime Text 2 - NMake Makefiles
                               = Generates Sublime Text 2 project files
                                 (deprecated).
  Sublime Text 2 - Ninja       = Generates Sublime Text 2 project files
                                 (deprecated).
  Sublime Text 2 - Unix Makefiles
                               = Generates Sublime Text 2 project files
                                 (deprecated).
```

## cmsis-scanner    

```bash
cube cmsis-scanner --help
```
### USAGE:

```bash
cube-cmsis-scanner [FLAGS] [OPTIONS]
```
### FLAGS:
```bash
        --debug                                Enable debug output, for performance and troubleshooting
        --debug-all-conditions-are-valid       Debug: Assume when testing conditions that all are valid
        --force-cache-check                    Ensure cache is up to date
    -h, --help                                 Prints help information
        --json                                 Output answer as JSON
        --launch-service                       Launch as a service, listens to tcp port 32125
        --list-all                             Include all CMSIS information in the reply
        --list-boards                          Include boards in the reply
        --list-components                      Include components in the reply (Big)
        --list-conditions                      Include conditions in the reply (Big)
        --list-devices                         Include devices in the reply
        --list-examples                        Include examples in the reply
        --list-extra-information               Include extra information in the reply
        --list-feature-sets                    Include feature sets in the reply (Big)
        --list-filter-item-compute-quickfix    Include quickfixes computed on the items returned in the result, only
                                               applicable to searched components
        --list-filter-item-limit-to-latest     Filter items only to the latest packs from the pack root. If combined
                                               with --list-filter-item-limit-to-project, both project and latest packs
                                               are used
        --list-filter-item-limit-to-project    Filter items only to the project context. I.e. only from packs used in
                                               the project. If combined with --list-filter-item-limit-to-latest, both
                                               project and latest packs are used
        --list-filter-item-project-shadow      Combine with --list-filter-item-limit-to-project and --list-filter-item-
                                               limit-to-latest to get the shadowed set of project-
                                               packs + latest packs
        --list-packs                           Include packs in the reply
        --list-parse-status                    Include status information about the parsing
        --list-parts                           Include parts in the reply
        --no-cache-file                        Disable the use of $CMSIS_PACK_ROOT/.Download/cache/scanner_$NUM.cache
                                               file
        --no-service                           Don't use any service, parse and reply immediately
        --pretty                               Pretty-print JSON
        --quiet                                Disable stdout except for json
        --shutdown-service                     Shuts down any running service, without returning any other data. All
                                               other flags will be ignored
        --verbose                              Show extra information
        --version                              
```
### OPTIONS:
```bash
        --auto-shutdown <autoshutdown>
            Autoshutdown after this time in ms after last connection closed (20 minutes default)

        --cmsis-pack-root <cmsis-pack-root>
            Path to CMSIS_PACK_ROOT

        --json-file <json-file>
            Store JSON reply to file

        --list-filter-item-exact-ids <list-filter-item-exact-ids>...
            Filter items using exact id strings, this is applied before any other filters

        --list-filter-item-limit <list-filter-item-limit>
            Limit each list query to the first N items, this is applied after any regex filter

        --list-filter-item-limit-minimum-score-percent <list-filter-item-minimum-score-percent>
            (deprecated) Filter items below certain scoring percentage of the maximum score. Used for removing items
            that score too low from the queries from --list-filter-item-search <search-terms>
        --list-filter-item-regex <list-filter-item-regex>
            Filter items using regex, this is applied before any other filters

        --list-filter-item-search <list-filter-item-search>
            Filter items using text search, this is applied after regex and before item limit filters. Items scoring 0
            points are not returned. All search words needs to match somewhere inside the item
        --list-filter-item-search-score-threshold <list-filter-item-search-score-threshold>
            Filter items below certain scoring percentage of the maximum score. Used for removing items that score too
            low from the queries from --list-filter-item-search <search-terms>
        --list-filter-item-skip <list-filter-item-skip>
            Skip the first N items in each list query, this is applied after any regex filter [default: 0]

        --project-resolve-state <project-resolve-state>
            Calculate component state using this project resolve state (JSON input)
```

## ide-project-convert

Create a project from specified source format to given format

```bash
cube ide-project-convert --help
```

```bash
Usage: ide-project-convert [options]
```

### Options:
```bash
  -V, --version                   output the version number
  --source-project <PATH>         set the source project path.
  --source-format [stm32cubeide]  set the source format (only stm32cubeide is supported for now)
  --destination <PATH>            set the destination path for the generated project.
  --format [cmake]                set the format for the generated project (only cmake is supported for now).
  --overwrite                     overwrite the destination folder if it exists.
  --verbose                       enable verbose output.
  -h, --help                      display help for command
```


## java     

```bash
cube java --help
```

```bash
Uso: java [options] <mainclass> [args...]
           (para executar uma classe)
   ou  java [options] -jar <jarfile> [args...]
           (para executar um arquivo jar)
   ou  java [options] -m <module>[/<mainclass>] [args...]
       java [options] --module <module>[/<mainclass>] [args...]
           (para executar a classe principal em um módulo)

 Os argumentos após a classe principal, -jar <jarfile>, -m ou --module
 <module>/<mainclass> são especificados como os argumentos para a classe principal.

 em que as opções incluem:

    -cp <caminho de pesquisa de classe de diretórios e arquivos zip/jar>
    -classpath <caminho de pesquisa de classe de diretórios e arquivos zip/jar>
    --class-path <caminho de pesquisa de classe de diretórios e arquivos zip/jar>
                  Uma lista separada por ; de diretórios, arquivos compactados JAR
                  e arquivos compactados ZIP para procurar arquivos de classe.
    -p <caminho do módulo>
    --module-path <caminho do módulo>...
                  Uma lista separada por ; de diretórios, cada um
                  sendo um diretório de módulos.
    --upgrade-module-path <caminho do módulo>...
                  Uma lista separada por ; de diretórios, cada um
                  sendo um diretório de módulos que substituem módulos
                  passíveis de upgrade na imagem de runtime
    --add-modules <nome do módulo>[,<nome do módulo>...]
                  módulos-raiz a serem resolvidos além do módulo inicial.
                  <nome do módulo> também pode ser ALL-DEFAULT, ALL-SYSTEM,
                  ALL-MODULE-PATH.
    --list-modules
                  lista os módulos observáveis e sai
    -d <nome do módulo>
    --describe-module <nome do módulo>
                  descreve um módulo e sai
    --dry-run     cria VM e carrega classe principal, mas não executa o método principal.
                  A opção --dry-run pode ser útil para validar as
                  opções de linha de comando como a configuração do sistema do módulo.
    --validate-modules
                  valida todos os módulos e sai
                  A opção --validate-modules pode ser útil para localizar
                  conflitos e outros erros com módulos no caminho do módulo.
    -D<name>=<value>
                  define uma propriedade de sistema
    -verbose:[class|module|gc|jni]
                  ativar saída verbosa
    -version      imprime a versão do produto no fluxo de erros e sai
    -version      imprime a versão do produto no fluxo de saída e sai
    -showversion  imprime a versão do produto no fluxo de erros e continua
    --show-version
                  imprime a versão do produto no fluxo de saída e continua
    --show-module-resolution
                  mostra a saída da resolução do módulo durante a inicialização
    -? -h -help
                  imprime esta mensagem de ajuda no fluxo de erros
    --help        imprime esta mensagem de ajuda no fluxo de saída
    -X            imprime ajuda sobre opções extras no fluxo de erros
    --help-extra  imprime ajuda sobre opções extras no fluxo de saída
    -ea[:<packagename>...|:<classname>]
    -enableassertions[:<packagename>...|:<classname>]
                  ativa asserções com granularidade especificada
    -da[:<packagename>...|:<classname>]
    -disableassertions[:<packagename>...|:<classname>]
                  desativa asserções com granularidade especificada
    -esa | -enablesystemassertions
                  ativa asserções de sistema
    -dsa | -disablesystemassertions
                  desativa asserções de sistema
    -agentlib:<libname>[=<options>]
                  carrega biblioteca de agente nativo <libname>, por exemplo, -agentlib:jdwp
                  consulte também -agentlib:jdwp=help
    -agentpath:<pathname>[=<options>]
                  carrega biblioteca de agente nativo por nome do caminho completo
    -javaagent:<jarpath>[=<options>]
                  carrega agente de linguagem de programação Java, consulte java.lang.instrument
    -splash:<imagepath>
                  mostra a tela inicial com a imagem especificada
                  Imagens HiDPI dimensionadas são suportadas automaticamente e utilizadas,
                  se disponíveis. O nome do arquivo de imagem não dimensionada, por exemplo, image.ext,
                  deve ser informado sempre como argumento para a opção -splash.
                  A imagem dimensionada mais apropriada fornecida será selecionada
                  automaticamente.
                  Consulte a documentação da API de Tela Inicial para obter mais informações
    @arquivos de argumento
                  Um ou mais arquivos de argumentos que contêm opções
    --disable-@files
                  impede expansão adicional de arquivo de argumentos
nPara especificar um argumento para uma opção longa, você pode usar --<name>=<value> ou
--<name> <value>.
```

## ninja    
```bash
cube ninja --help
```

### Usage: 
```bash
ninja [options] [targets...]
```
if targets are unspecified, builds the 'default' target (see manual).

### options:

```bash
  --version      print ninja version ("1.13.1")
  -v, --verbose  show all command lines while building
  --quiet        don't show progress status, just command output

  -C DIR   change to DIR before doing anything else
  -f FILE  specify input build file [default=build.ninja]

  -j N     run N jobs in parallel (0 means infinity) [default=26 on this system]
  -k N     keep going until N jobs fail (0 means infinity) [default=1]
  -l N     do not start new jobs if the load average is greater than N
  -n       dry run (don't run commands but act like they succeeded)

  -d MODE  enable debugging (use '-d list' to list modes)
  -t TOOL  run a subtool (use '-t list' to list subtools)
    terminates toplevel options; further flags are passed to the tool
  -w FLAG  adjust warnings (use '-w list' to list warnings)
```

## node     
```bash
cube node --help
```

## pack     
```bash
cube pack --help
```           

### Usage: 

```bash
pack [options] [command]
```

### Options:

```bash
  -V, --version                       output the version number
  -h, --help                          display help for command
```

### Commands:

```bash
  sync [options]                      Downloads all available .PDSC metadata into $CMSIS_PACK_ROOT/.Download/cache
  install [options] <identifiers...>  Install one or multiple packs using either URL or VENDOR.NAME.VERSION identifier
  remove [options] <identifiers...>   Remove one or multiple packs using the format "VENDOR.NAME.VERSION"
  detect [options] <path>             Search and add local references to found .PDSCs
  remote                              Manage remote indexes to use for finding and downloading packs and pack information
  list                                List of available elements
  help [command]                      display help for command
```

## [programmer](/docs/stm32cubeprg#stm32-programmer-cli)
```bash
cube programmer --help
```

## rtos-proxy    
```bash
cube rtos-proxy --help
```

```bash 
STMicroelectronics RTOS Proxy. Version 0.18.1
Copyright (c) 2026, STMicroelectronics. All rights reserved.

Usage:
RtosProxy [options]

Where [options]:
-v, --version: Displays version information and exits.
-h, --help: Displays usage information and exits.
-f <options file>: Path to file containing options.
--rtos: RTOS driver to use.
--rtos_variant: RTOS port layer used by the executable.
--port: TCP/IP port number for GDB connections.
--server_connection: <Host:Port> Host and port number of the RSP-server (GDB-server) to connect to.
--file: Path to the RTOS executable (ELF object).
--gdbserver_connect_timeout: RSP-server (GDB-server) connection timeout. Default is 15s.
--loglevel: Logging level. Value between 0-15.
```
Note. Various RTOS drivers might provide additional properties for customization. Please consult respective RTOS driver documentation for details. 

## starm-clangd  

OVERVIEW: clangd is a language server that provides IDE-like features to editors.

It should be used via an editor plugin rather than invoked directly. For more information, see:
- https://clangd.llvm.org/
- https://microsoft.github.io/language-server-protocol/

clangd accepts flags on the commandline, and in the CLANGD_FLAGS environment variable.

USAGE: `starm-clangd.exe [options]`

```bash
cube starm-clangd --help
```

### Generic Options:
```bash
  --help                              - Display available options (--help-hidden for more)
  --help-list                         - Display list of available options (--help-list-hidden for more)
  --version                           - Display the version of this program
```

### clangd compilation flags options:
```bash
  --compile-commands-dir=<string>     - Specify a path to look for compile_commands.json. If path is invalid, clangd will look in the current directory and parent paths of each source file
  --query-driver=<string>             - Comma separated list of globs for white-listing gcc-compatible drivers that are safe to execute. Drivers matching any of these globs will be used to extract system includes. e.g. /usr/bin/**/clang-*,/path/to/repo/**/g++-*
```

### clangd feature options:

```bash
  --all-scopes-completion             - If set to true, code completion will include index symbols that are not defined in the scopes (e.g. namespaces) visible from the code completion point. Such completions can insert scope qualifiers
  --background-index                  - Index project code in the background and persist index on disk.
  --background-index-priority=<value> - Thread priority for building the background index. The effect of this flag is OS-specific.
    =background                       -   Minimum priority, runs on idle CPUs. May leave 'performance' cores unused.
    =low                              -   Reduced priority compared to interactive work.
    =normal                           -   Same priority as other clangd work.
  --clang-tidy                        - Enable clang-tidy diagnostics
  --completion-style=<value>          - Granularity of code completion suggestions
    =detailed                         -   One completion item for each semantically distinct completion, with full type information
    =bundled                          -   Similar completion items (e.g. function overloads) are combined. Type information shown where possible
  --experimental-modules-support      - Experimental support for standard c++ modules
  --fallback-style=<string>           - clang-format style to apply by default when no .clang-format file is found
  --function-arg-placeholders         - When disabled, completions contain only parentheses for function calls. When enabled, completions also contain placeholders for method parameters
  --header-insertion=<value>          - Add #include directives when accepting code completions
    =iwyu                             -   Include what you use. Insert the owning header for top-level symbols, unless the header is already directly included or the symbol is forward-declared
    =never                            -   Never insert #include directives as part of code completion
  --header-insertion-decorators       - Prepend a circular dot or space before the completion label, depending on whether an include line will be inserted or not
  --import-insertions                 - If header insertion is enabled, add #import directives when accepting code completions or fixing includes in Objective-C code
  --limit-references=<int>            - Limit the number of references returned by clangd. 0 means no limit (default=1000)
  --limit-results=<int>               - Limit the number of results returned by clangd. 0 means no limit (default=100)
  --project-root=<string>             - Path to the project root. Requires remote-index-address to be set.
  --remote-index-address=<string>     - Address of the remote index server
  --rename-file-limit=<int>           - Limit the number of files to be affected by symbol renaming. 0 means no limit (default=50)
```

### clangd miscellaneous options:

```bash
  --check[=<string>]                    - Parse one file in isolation instead of acting as a language server. Useful to investigate/reproduce crashes or configuration problems. With --check=<filename>, attempts to parse a particular file.
  --enable-config                     - Read user and project configuration from YAML files.
                                        Project config is from a .clangd file in the project directory.
                                        User config is from clangd/config.yaml in the following directories:
                                                Windows: %USERPROFILE%\AppData\Local
                                                Mac OS: ~/Library/Preferences/
                                                Others: $XDG_CONFIG_HOME, usually ~/.config
                                        Configuration is documented at https://clangd.llvm.org/config.html
  -j <uint>                           - Number of async workers used by clangd. Background index also uses this many workers.
  --pch-storage=<value>               - Storing PCHs in memory increases memory usages, but may improve performance
    =disk                             -   store PCHs on disk
    =memory                           -   store PCHs in memory
``` 

## stlink-gdbserver   
ST-LINK GDB server

```bash
cube stlink-gdbserver --help
```       
### Usage: 

```bash
cube stlink-gdbserver  [--semihost-console-port <port
                                        number>] [--semihosting <semihost
                                        level>] [--external-init]
                                        [--pend-halt-timeout <Pending halt
                                        timeout>] [--halt] [-c <config
                                        file>] [-e] [-f <log file>] [-l
                                        <log level>] [-p <port number>]
                                        [-v] [-r <refresh delay>]
                                        [--target-sel <SWD multidrop target
                                        sel>] [--pcm-pm-force]
                                        [--incremental] [-s] [-d] [-z <port
                                        number>] [-a <cpu clock>] [-b <SWO
                                        CLOCKDIV>] [-k] [-q] [-i <ST-LINK
                                        S/N>] [-m <apID>] [-g] [-t]
                                        [--erase-all] [--memory-map <device
                                        id>] [--ext-memory-loaders] [-ei
                                        <file_path>] ...  [-el <file_path>]
                                        ...  [-cp <path>] [--temp-path
                                        <path>] [--preserve-temps]
                                        [--frequency <max freq kHz>]
                                        [--licenses] [--] [--version] [-h]
```

### Where: 

```bash
   --semihost-console-port <port number>
     Port number for semihost console clients

   --semihosting <semihost level>
     Select semihosting mode

   --external-init
     Run Init() from external loader after reset

   --pend-halt-timeout <Pending halt timeout>
     Maximum time to wait for core to halt

   --halt
     Halt all cores during reset

   -c <config file>,  --config-file <config file>
     Read the config params from config file

   -e,  --persistent
     Enable persistent mode

   -f <log file>,  --log-file <log file>
     Path to log file

   -l <log level>,  --log-level <log level>
     Logging level between 0 to 31

   -p <port number>,  --port-number <port number>
     TCP port number for GDB client

   -v,  --verbose
     Turn ON verbose mode

   -r <refresh delay>,  --refresh-delay <refresh delay>
     Minimum delay in seconds for hardware status refresh

   --target-sel <SWD multidrop target sel>
     Enable SWD multidrop mode with target selection

   --pcm-pm-force
     Force flash programming if PCM PM bit set

   --incremental
     Turn ON incremental flash programming

   -s,  --verify
     Turn ON flash download verify

   -d,  --swd
     Enable SWD debug mode      [use for SWV]

   -z <port number>,  --swo-port <port number>
     SWO output port number     [use for SWV]

   -a <cpu clock>,  --cpu-clock <cpu clock>
     CPU clock speed in Hz      [use for SWV]

   -b <SWO CLOCKDIV>,  --swo-clock-div <SWO CLOCKDIV>
     Divide CPU clock by SWO CLOCKDIV

   -k,  --initialize-reset
     Initialize the device under reset condition

   -q,  --debuggers
     List serial number for connected ST-LINK devices

   -i <ST-LINK S/N>,  --serial-number <ST-LINK S/N>
     ST-LINK serial number

   -m <apID>,  --apid <apID>
     Select core on multi-core devices

   -g,  --attach
     Attach to running target

   -t,  --shared
     Shareable ST-LINK  [using ST-LINK server]

   --erase-all
     Erase all memories

   --memory-map <device id>
     Show memory map for device id

   --ext-memory-loaders
     List of available external memory-loaders

   -ei <file_path>,  --extload_init <file_path>  (accepted multiple times)
     Custom external memory-loader with initialization after reset

   -el <file_path>,  --extload <file_path>  (accepted multiple times)
     Custom external memory-loader

   -cp <path>,  --stm32cubeprogrammer-path <path>
     Path to STM32CubeProgrammer installation

   --temp-path <path>
     Temporary files for starting a debug session are stored in the
     provided path

   --preserve-temps
     Will not remove used temporary files

   --frequency <max freq kHz>
     Select com frequency in kHz

   --licenses
     List of used tools and licenses

   --,  --ignore-rest
     Ignores the rest of the labeled arguments following this flag

   --version
     Displays version information and exits

   -h,  --help
     Displays usage information and exits   
```

## stlink-gdbserver-pure 
```bash
cube stlink-gdbserver-pure --help
```     

## stlink-server-start   
```bash
cube stlink-server-start --help
```   

```bash
Debug: 1 0 : Parse param : 97
Debug: 2 1 : --auto_exit 
Debug: 3 2 : Parse param : 0
stlink-server
--help       | -h       display this help
--version    | -v       display STLinkserver version
--port       | -p       set tcp listening port
--debug      | -d       set debug level <0-5> (incremental, 0: Error, 1:Info, 2:Warning, 3:STlink, 4:Debug, 5:Usb)
--auto-exit  | -a       exit() when there is no more client
--log_output | -l       redirect log output to file <name>
```

## stlink-upgrade      
```bash
cube stlink-upgrade
```

## stm32cubeide-osgi-export
```bash
cube stm32cubeide-osgi-export --help
``` 

if you need to run this application in standalone mode, please enter the following two arguments: STM32CubeIDE project path, and the output json file path