
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();
    
  
  
  var objd4e210 = { label: "DITA Open Toolkit 1.7.5", href:"DITA-OTProjectHome.html", target:"contentwin" };
    var d4e210 = new YAHOO.widget.TextNode(objd4e210, root, false);
  var objd4e224 = { label: "Getting Started", href:"quickstartguide/exploring-the-dita-ot.html", target:"contentwin" };
    var d4e224 = new YAHOO.widget.TextNode(objd4e224, root, false);var objd4e238 = { label: "Installing the full-easy-install package", href:"readme/installing-full-easy.html", target:"contentwin" };
    var d4e238 = new YAHOO.widget.TextNode(objd4e238, d4e224, false);var objd4e248 = { label: "Running the demo build", href:"quickstartguide/rundemo.html", target:"contentwin" };
    var d4e248 = new YAHOO.widget.TextNode(objd4e248, d4e224, false);var objd4e258 = { label: "Building your own content using the demo build", href:"quickstartguide/runmore.html", target:"contentwin" };
    var d4e258 = new YAHOO.widget.TextNode(objd4e258, d4e224, false);
  var objd4e269 = { label: "User Guide", href:"readme/DITA-readme.html", target:"contentwin" };
    var d4e269 = new YAHOO.widget.TextNode(objd4e269, root, false);var objd4e283 = { label: "Overview of the DITA Open Toolkit", href:"readme/overview-of-dita-ot.html", target:"contentwin" };
    var d4e283 = new YAHOO.widget.TextNode(objd4e283, d4e269, false);var objd4e293 = { label: "Release notes", href:"readme/changes/rel1.7.html", target:"contentwin" };
    var d4e293 = new YAHOO.widget.TextNode(objd4e293, d4e283, false);var objd4e300 = { label: "DITA 1.2 Specification Support", href:"specification/DITA1-2.html", target:"contentwin" };
    var d4e300 = new YAHOO.widget.TextNode(objd4e300, d4e283, false);var objd4e313 = { label: "Tested platforms and tools", href:"readme/DITA-tested.html", target:"contentwin" };
    var d4e313 = new YAHOO.widget.TextNode(objd4e313, d4e283, false);var objd4e323 = { label: "Installing the DITA-OT", href:"readme/DITA-installation.html", target:"contentwin" };
    var d4e323 = new YAHOO.widget.TextNode(objd4e323, d4e269, false);var objd4e333 = { label: "Distribution packages", href:"readme/distribution_packages.html", target:"contentwin" };
    var d4e333 = new YAHOO.widget.TextNode(objd4e333, d4e323, false);var objd4e343 = { label: "Prerequisite software", href:"readme/prerequisite-software.html", target:"contentwin" };
    var d4e343 = new YAHOO.widget.TextNode(objd4e343, d4e323, false);var objd4e353 = { label: "Installing the full-easy-install package", href:"readme/installing-full-easy.html", target:"contentwin" };
    var d4e353 = new YAHOO.widget.TextNode(objd4e353, d4e323, false);var objd4e363 = { label: "Installing the minimal or standard package on Linux or Mac OSX", href:"readme/installing-minimal-package-on-linux.html", target:"contentwin" };
    var d4e363 = new YAHOO.widget.TextNode(objd4e363, d4e323, false);var objd4e373 = { label: "Installing the minimal or standard package on Windows", href:"readme/installing-minimal-package-windows.html", target:"contentwin" };
    var d4e373 = new YAHOO.widget.TextNode(objd4e373, d4e323, false);var objd4e383 = { label: "Publishing DITA content", href:"readme/tranforming-dita-content.html", target:"contentwin" };
    var d4e383 = new YAHOO.widget.TextNode(objd4e383, d4e269, false);var objd4e393 = { label: "DITA-OT transformations", href:"readme/AvailableTransforms.html", target:"contentwin" };
    var d4e393 = new YAHOO.widget.TextNode(objd4e393, d4e383, false);var objd4e403 = { label: "DITA to Docbook", href:"readme/dita2docbook.html", target:"contentwin" };
    var d4e403 = new YAHOO.widget.TextNode(objd4e403, d4e393, false);var objd4e416 = { label: "DITA to Eclipse Content", href:"readme/dita2eclipsecontent.html", target:"contentwin" };
    var d4e416 = new YAHOO.widget.TextNode(objd4e416, d4e393, false);var objd4e429 = { label: "DITA to Eclipse help", href:"readme/dita2eclipsehelp.html", target:"contentwin" };
    var d4e429 = new YAHOO.widget.TextNode(objd4e429, d4e393, false);var objd4e442 = { label: "DITA to HTML Help (CHM)", href:"readme/dita2htmlhelp.html", target:"contentwin" };
    var d4e442 = new YAHOO.widget.TextNode(objd4e442, d4e393, false);var objd4e455 = { label: "DITA to legacy PDF", href:"readme/dita2legacypdf.html", target:"contentwin" };
    var d4e455 = new YAHOO.widget.TextNode(objd4e455, d4e393, false);var objd4e468 = { label: "DITA to ODT", href:"readme/dita2odt.html", target:"contentwin" };
    var d4e468 = new YAHOO.widget.TextNode(objd4e468, d4e393, false);var objd4e481 = { label: "DITA to PDF (PDF2)", href:"readme/dita2pdf.html", target:"contentwin" };
    var d4e481 = new YAHOO.widget.TextNode(objd4e481, d4e393, false);var objd4e497 = { label: "DITA to RTF", href:"readme/dita2word.html", target:"contentwin" };
    var d4e497 = new YAHOO.widget.TextNode(objd4e497, d4e393, false);var objd4e510 = { label: "DITA to TocJS", href:"readme/dita2tocjs.html", target:"contentwin" };
    var d4e510 = new YAHOO.widget.TextNode(objd4e510, d4e393, false);var objd4e523 = { label: "DITA to Troff", href:"readme/dita2troff.html", target:"contentwin" };
    var d4e523 = new YAHOO.widget.TextNode(objd4e523, d4e393, false);var objd4e537 = { label: "DITA to XHTML", href:"readme/dita2xhtml.html", target:"contentwin" };
    var d4e537 = new YAHOO.widget.TextNode(objd4e537, d4e393, false);var objd4e550 = { label: "Publishing DITA content from Ant", href:"readme/DITA-ant.html", target:"contentwin" };
    var d4e550 = new YAHOO.widget.TextNode(objd4e550, d4e383, false);var objd4e560 = { label: "Ant", href:"readme/ant.html", target:"contentwin" };
    var d4e560 = new YAHOO.widget.TextNode(objd4e560, d4e550, false);var objd4e570 = { label: "Building output using Ant", href:"readme/DITA-antuse.html", target:"contentwin" };
    var d4e570 = new YAHOO.widget.TextNode(objd4e570, d4e550, false);var objd4e583 = { label: "Creating an Ant build script", href:"readme/creating-an-ant-build-script.html", target:"contentwin" };
    var d4e583 = new YAHOO.widget.TextNode(objd4e583, d4e550, false);var objd4e593 = { label: "Publishing DITA content from the command-line tool", href:"readme/DITA-javacmd.html", target:"contentwin" };
    var d4e593 = new YAHOO.widget.TextNode(objd4e593, d4e383, false);var objd4e603 = { label: "Command-line tool", href:"readme/command-line-tool.html", target:"contentwin" };
    var d4e603 = new YAHOO.widget.TextNode(objd4e603, d4e593, false);var objd4e613 = { label: "Building output using the command-line tool", href:"readme/building-output-using-cl-tool.html", target:"contentwin" };
    var d4e613 = new YAHOO.widget.TextNode(objd4e613, d4e593, false);var objd4e623 = { label: "Globalizing DITA content", href:"readme/DITA-globalization.html", target:"contentwin" };
    var d4e623 = new YAHOO.widget.TextNode(objd4e623, d4e269, false);var objd4e633 = { label: "Globalization support offered by the DITA-OT", href:"readme/globalization-supported-in-dita-ot.html", target:"contentwin" };
    var d4e633 = new YAHOO.widget.TextNode(objd4e633, d4e623, false);var objd4e643 = { label: "Supported languages: HTML-based transformations", href:"readme/DITA-globalization-xhtml.html", target:"contentwin" };
    var d4e643 = new YAHOO.widget.TextNode(objd4e643, d4e623, false);var objd4e653 = { label: "Supported languages: PDF transformations", href:"readme/DITA-globalization-pdf.html", target:"contentwin" };
    var d4e653 = new YAHOO.widget.TextNode(objd4e653, d4e623, false);var objd4e663 = { label: "Error messages and troubleshooting", href:"readme/troubleshooting-overview.html", target:"contentwin" };
    var d4e663 = new YAHOO.widget.TextNode(objd4e663, d4e269, false);var objd4e673 = { label: "DITA-OT error messages", href:"readme/DITA-messages.html", target:"contentwin" };
    var d4e673 = new YAHOO.widget.TextNode(objd4e673, d4e663, false);var objd4e693 = { label: "Other error messages", href:"readme/DITA-troubleshooting.html", target:"contentwin" };
    var d4e693 = new YAHOO.widget.TextNode(objd4e693, d4e663, false);var objd4e703 = { label: "Log files", href:"readme/DITA-log.html", target:"contentwin" };
    var d4e703 = new YAHOO.widget.TextNode(objd4e703, d4e663, false);var objd4e713 = { label: "Accessing help from the command-line tool", href:"readme/accessing-help-from-the-cl-tool.html", target:"contentwin" };
    var d4e713 = new YAHOO.widget.TextNode(objd4e713, d4e663, false);var objd4e726 = { label: "Determing the version of the DITA Open Toolkit", href:"readme/determining-version-of-ditaot.html", target:"contentwin" };
    var d4e726 = new YAHOO.widget.TextNode(objd4e726, d4e663, false);var objd4e736 = { label: "Enabling debug mode", href:"readme/enabling-debug-mode.html", target:"contentwin" };
    var d4e736 = new YAHOO.widget.TextNode(objd4e736, d4e663, false);var objd4e746 = { label: "Increasing Java memory allocation", href:"readme/increasing-the-jvm.html", target:"contentwin" };
    var d4e746 = new YAHOO.widget.TextNode(objd4e746, d4e663, false);var objd4e756 = { label: "Reference", href:"readme/reference.html", target:"contentwin" };
    var d4e756 = new YAHOO.widget.TextNode(objd4e756, d4e269, false);var objd4e766 = { label: "Ant parameters", href:"readme/dita-ot_ant_properties.html", target:"contentwin" };
    var d4e766 = new YAHOO.widget.TextNode(objd4e766, d4e756, false);var objd4e776 = { label: "All transformations", href:"readme/ant-parameters-all-transformation-types.html", target:"contentwin" };
    var d4e776 = new YAHOO.widget.TextNode(objd4e776, d4e766, false);var objd4e786 = { label: "All HTML-based transformations", href:"readme/ant-parameters-common-html-transtypes.html", target:"contentwin" };
    var d4e786 = new YAHOO.widget.TextNode(objd4e786, d4e766, false);var objd4e811 = { label: "Eclipse content", href:"readme/ant-parameters-eclipse-content-transformation.html", target:"contentwin" };
    var d4e811 = new YAHOO.widget.TextNode(objd4e811, d4e766, false);var objd4e821 = { label: "Eclipse help", href:"readme/ant-parameters-eclipse-help-transformation.html", target:"contentwin" };
    var d4e821 = new YAHOO.widget.TextNode(objd4e821, d4e766, false);var objd4e831 = { label: "HTML Help", href:"readme/ant-parameters-html-help-transformation.html", target:"contentwin" };
    var d4e831 = new YAHOO.widget.TextNode(objd4e831, d4e766, false);var objd4e841 = { label: "JavaHelp", href:"readme/ant-parameters-javahelp-transformation.html", target:"contentwin" };
    var d4e841 = new YAHOO.widget.TextNode(objd4e841, d4e766, false);var objd4e851 = { label: "Legacy PDF", href:"readme/ant-parameters-legacypdf-transformation.html", target:"contentwin" };
    var d4e851 = new YAHOO.widget.TextNode(objd4e851, d4e766, false);var objd4e861 = { label: "ODT", href:"readme/ant-parameters-odt-transformation.html", target:"contentwin" };
    var d4e861 = new YAHOO.widget.TextNode(objd4e861, d4e766, false);var objd4e871 = { label: "Other", href:"readme/ant-parameters-other.html", target:"contentwin" };
    var d4e871 = new YAHOO.widget.TextNode(objd4e871, d4e766, false);var objd4e878 = { label: "PDF", href:"readme/ant-parameters-pdf2-transformation.html", target:"contentwin" };
    var d4e878 = new YAHOO.widget.TextNode(objd4e878, d4e766, false);var objd4e889 = { label: "XHTML", href:"readme/ant-parameters-xhtml-transformation.html", target:"contentwin" };
    var d4e889 = new YAHOO.widget.TextNode(objd4e889, d4e766, false);var objd4e899 = { label: "Command-line tool parameters", href:"readme/dita-ot_java_properties.html", target:"contentwin" };
    var d4e899 = new YAHOO.widget.TextNode(objd4e899, d4e756, false);var objd4e909 = { label: "All transformations", href:"readme/tool-parameters-all-transformation.html", target:"contentwin" };
    var d4e909 = new YAHOO.widget.TextNode(objd4e909, d4e899, false);var objd4e919 = { label: "All HTML-based transformations", href:"readme/tool-parameters-common-html-transformation.html", target:"contentwin" };
    var d4e919 = new YAHOO.widget.TextNode(objd4e919, d4e899, false);var objd4e929 = { label: "Eclipse content", href:"readme/tool-parameters-eclipsecontent-transformation.html", target:"contentwin" };
    var d4e929 = new YAHOO.widget.TextNode(objd4e929, d4e899, false);var objd4e939 = { label: "Eclipse help", href:"readme/tool-parameters-eclipsehelp-transformation.html", target:"contentwin" };
    var d4e939 = new YAHOO.widget.TextNode(objd4e939, d4e899, false);var objd4e949 = { label: "HTML help", href:"readme/tool-parameters-htmlhelp-transformation.html", target:"contentwin" };
    var d4e949 = new YAHOO.widget.TextNode(objd4e949, d4e899, false);var objd4e959 = { label: "JavaHelp", href:"readme/tool-parameters-javahelp-transformation.html", target:"contentwin" };
    var d4e959 = new YAHOO.widget.TextNode(objd4e959, d4e899, false);var objd4e969 = { label: "ODT", href:"readme/tool-parameters-odt-transformation.html", target:"contentwin" };
    var d4e969 = new YAHOO.widget.TextNode(objd4e969, d4e899, false);var objd4e979 = { label: "PDF transformation", href:"readme/tool-parameters-pdf-transformation.html", target:"contentwin" };
    var d4e979 = new YAHOO.widget.TextNode(objd4e979, d4e899, false);var objd4e989 = { label: "XHTML", href:"readme/tool-parameters-xhtml-transformation.html", target:"contentwin" };
    var d4e989 = new YAHOO.widget.TextNode(objd4e989, d4e899, false);var objd4e999 = { label: "lib/configuration.properties file", href:"readme/configuration.html", target:"contentwin" };
    var d4e999 = new YAHOO.widget.TextNode(objd4e999, d4e756, false);
  var objd4e1015 = { label: "Developer Reference", href:"dev_ref/developer-reference.html", target:"contentwin" };
    var d4e1015 = new YAHOO.widget.TextNode(objd4e1015, root, false);var objd4e1029 = { label: "DITA Open Toolkit Architecture", href:"dev_ref/DITA-OTArchitecture.html", target:"contentwin" };
    var d4e1029 = new YAHOO.widget.TextNode(objd4e1029, d4e1015, false);var objd4e1039 = { label: "Processing modules in the DITA-OT", href:"dev_ref/processing-pipeline-modules.html", target:"contentwin" };
    var d4e1039 = new YAHOO.widget.TextNode(objd4e1039, d4e1029, false);var objd4e1049 = { label: "Processing order within the DITA-OT", href:"dev_ref/processing-order.html", target:"contentwin" };
    var d4e1049 = new YAHOO.widget.TextNode(objd4e1049, d4e1029, false);var objd4e1059 = { label: "DITA-OT pre-processing architecture", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1059 = new YAHOO.widget.TextNode(objd4e1059, d4e1029, false);var objd4e1069 = { label: "Generate lists (gen-list)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1069 = new YAHOO.widget.TextNode(objd4e1069, d4e1059, false);var objd4e1082 = { label: "Debug and filter (debug-filter)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1082 = new YAHOO.widget.TextNode(objd4e1082, d4e1059, false);var objd4e1095 = { label: "Copy related files (copy-files)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1095 = new YAHOO.widget.TextNode(objd4e1095, d4e1059, false);var objd4e1108 = { label: "Conref push (conrefpush)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1108 = new YAHOO.widget.TextNode(objd4e1108, d4e1059, false);var objd4e1121 = { label: "Conref (conref)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1121 = new YAHOO.widget.TextNode(objd4e1121, d4e1059, false);var objd4e1134 = { label: "Move metadata (move-meta-entries)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1134 = new YAHOO.widget.TextNode(objd4e1134, d4e1059, false);var objd4e1147 = { label: "Resolve keyref (keyref)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1147 = new YAHOO.widget.TextNode(objd4e1147, d4e1059, false);var objd4e1160 = { label: "Resolve code references (codref)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1160 = new YAHOO.widget.TextNode(objd4e1160, d4e1059, false);var objd4e1176 = { label: "Resolve map references (mapref)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1176 = new YAHOO.widget.TextNode(objd4e1176, d4e1059, false);var objd4e1189 = { label: "Pull content into maps (mappull)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1189 = new YAHOO.widget.TextNode(objd4e1189, d4e1059, false);var objd4e1203 = { label: "Chunk topics (chunk)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1203 = new YAHOO.widget.TextNode(objd4e1203, d4e1059, false);var objd4e1216 = { label: "Map based linking (maplink and move-links)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1216 = new YAHOO.widget.TextNode(objd4e1216, d4e1059, false);var objd4e1226 = { label: "Pull content into topics (topicpull)", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1226 = new YAHOO.widget.TextNode(objd4e1226, d4e1059, false);var objd4e1245 = { label: "Flagging in the toolkit", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1245 = new YAHOO.widget.TextNode(objd4e1245, d4e1059, false);var objd4e1255 = { label: "XHTML migration for flagging updates in DITA-OT 1.7", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1255 = new YAHOO.widget.TextNode(objd4e1255, d4e1245, false);var objd4e1265 = { label: "Generating XHTML with navigation", href:"dev_ref/XhtmlWithNavigation.html", target:"contentwin" };
    var d4e1265 = new YAHOO.widget.TextNode(objd4e1265, d4e1029, false);var objd4e1275 = { label: "Default XHTML output", href:"dev_ref/XhtmlDefault.html", target:"contentwin" };
    var d4e1275 = new YAHOO.widget.TextNode(objd4e1275, d4e1265, false);var objd4e1288 = { label: "Eclipse help output (transform type \"eclipsehelp\")", href:"dev_ref/XhtmlEclipse.html", target:"contentwin" };
    var d4e1288 = new YAHOO.widget.TextNode(objd4e1288, d4e1265, false);var objd4e1301 = { label: "TocJS output path", href:"dev_ref/XhtmlTocjs.html", target:"contentwin" };
    var d4e1301 = new YAHOO.widget.TextNode(objd4e1301, d4e1265, false);var objd4e1311 = { label: "Compiled Help (CHM) output", href:"dev_ref/XhtmlCHM.html", target:"contentwin" };
    var d4e1311 = new YAHOO.widget.TextNode(objd4e1311, d4e1265, false);var objd4e1321 = { label: "Javahelp output", href:"dev_ref/XhtmlJavahelp.html", target:"contentwin" };
    var d4e1321 = new YAHOO.widget.TextNode(objd4e1321, d4e1265, false);var objd4e1331 = { label: "PDF output pipeline", href:"dev_ref/PdfDefault.html", target:"contentwin" };
    var d4e1331 = new YAHOO.widget.TextNode(objd4e1331, d4e1029, false);var objd4e1341 = { label: "ODT Transform type (Open Document Format)", href:"dev_ref/OdtDefault.html", target:"contentwin" };
    var d4e1341 = new YAHOO.widget.TextNode(objd4e1341, d4e1029, false);var objd4e1351 = { label: "Extending the DITA Open Toolkit", href:"dev_ref/extending-the-ot.html", target:"contentwin" };
    var d4e1351 = new YAHOO.widget.TextNode(objd4e1351, d4e1015, false);var objd4e1361 = { label: "Installing plug-ins", href:"dev_ref/plugins-installing.html", target:"contentwin" };
    var d4e1361 = new YAHOO.widget.TextNode(objd4e1361, d4e1351, false);var objd4e1371 = { label: "Removing plug-ins", href:"dev_ref/plugins-removing.html", target:"contentwin" };
    var d4e1371 = new YAHOO.widget.TextNode(objd4e1371, d4e1351, false);var objd4e1381 = { label: "Rebuilding the DITA-OT documentation", href:"dev_ref/rebuilding-the-dita-ot-documentation.html", target:"contentwin" };
    var d4e1381 = new YAHOO.widget.TextNode(objd4e1381, d4e1351, false);var objd4e1391 = { label: "Configuring the DITA Open Toolkit", href:"dev_ref/configuring-the-dita-ot.html", target:"contentwin" };
    var d4e1391 = new YAHOO.widget.TextNode(objd4e1391, d4e1015, false);var objd4e1404 = { label: "integrator.properties file", href:"dev_ref/integrators-properties-file.html", target:"contentwin" };
    var d4e1404 = new YAHOO.widget.TextNode(objd4e1404, d4e1391, false);var objd4e1419 = { label: "lib/org.dita.dost.platform/plugin.properties file", href:"dev_ref/lib-org.html", target:"contentwin" };
    var d4e1419 = new YAHOO.widget.TextNode(objd4e1419, d4e1391, false);var objd4e1435 = { label: "Creating DITA-OT plug-ins", href:"dev_ref/plugins-overview.html", target:"contentwin" };
    var d4e1435 = new YAHOO.widget.TextNode(objd4e1435, d4e1015, false);var objd4e1445 = { label: "Plug-in configuration file", href:"dev_ref/plugin-configfile.html", target:"contentwin" };
    var d4e1445 = new YAHOO.widget.TextNode(objd4e1445, d4e1435, false);var objd4e1458 = { label: "Extending the XML Catalog", href:"dev_ref/plugin-xmlcatalog.html", target:"contentwin" };
    var d4e1458 = new YAHOO.widget.TextNode(objd4e1458, d4e1435, false);var objd4e1468 = { label: "Adding new targets to the Ant build process", href:"dev_ref/plugin-anttarget.html", target:"contentwin" };
    var d4e1468 = new YAHOO.widget.TextNode(objd4e1468, d4e1435, false);var objd4e1478 = { label: "Adding Ant targets to the pre-process pipeline", href:"dev_ref/plugin-antpreprocess.html", target:"contentwin" };
    var d4e1478 = new YAHOO.widget.TextNode(objd4e1478, d4e1435, false);var objd4e1488 = { label: "Integrating a new transform type", href:"dev_ref/plugin-newtranstype.html", target:"contentwin" };
    var d4e1488 = new YAHOO.widget.TextNode(objd4e1488, d4e1435, false);var objd4e1498 = { label: "Override styles with XSLT", href:"dev_ref/plugin-overridestyle.html", target:"contentwin" };
    var d4e1498 = new YAHOO.widget.TextNode(objd4e1498, d4e1435, false);var objd4e1511 = { label: "Modifying or adding generated text", href:"dev_ref/plugin-addgeneratedtext.html", target:"contentwin" };
    var d4e1511 = new YAHOO.widget.TextNode(objd4e1511, d4e1435, false);var objd4e1521 = { label: "Passing parameters to existing XSLT steps", href:"dev_ref/plugin-xsltparams.html", target:"contentwin" };
    var d4e1521 = new YAHOO.widget.TextNode(objd4e1521, d4e1435, false);var objd4e1534 = { label: "Adding Java libraries to the classpath", href:"dev_ref/plugin-javalib.html", target:"contentwin" };
    var d4e1534 = new YAHOO.widget.TextNode(objd4e1534, d4e1435, false);var objd4e1544 = { label: "Adding diagnostic messages", href:"dev_ref/plugin-messages.html", target:"contentwin" };
    var d4e1544 = new YAHOO.widget.TextNode(objd4e1544, d4e1435, false);var objd4e1555 = { label: "Managing plug-in dependencies", href:"dev_ref/plugin-dependencies.html", target:"contentwin" };
    var d4e1555 = new YAHOO.widget.TextNode(objd4e1555, d4e1435, false);var objd4e1577 = { label: "Version and support information", href:"dev_ref/plugin-support.html", target:"contentwin" };
    var d4e1577 = new YAHOO.widget.TextNode(objd4e1577, d4e1435, false);var objd4e1587 = { label: "Creating a new plug-in extension point", href:"dev_ref/plugin-newextensions.html", target:"contentwin" };
    var d4e1587 = new YAHOO.widget.TextNode(objd4e1587, d4e1435, false);var objd4e1600 = { label: "Example plugin.xml file", href:"dev_ref/plugin-sample.html", target:"contentwin" };
    var d4e1600 = new YAHOO.widget.TextNode(objd4e1600, d4e1435, false);var objd4e1613 = { label: "Customizing PDF output", href:"readme/dita2pdf-customization.html", target:"contentwin" };
    var d4e1613 = new YAHOO.widget.TextNode(objd4e1613, d4e1015, false);var objd4e1623 = { label: "Internal Ant properties", href:"dev_ref/ant-properties.html", target:"contentwin" };
    var d4e1623 = new YAHOO.widget.TextNode(objd4e1623, d4e1015, false);var objd4e1633 = { label: "Implementation dependent features", href:"dev_ref/DITA1.2-implementation-dependent-features.html", target:"contentwin" };
    var d4e1633 = new YAHOO.widget.TextNode(objd4e1633, d4e1015, false);var objd4e1640 = { label: "Extended functionality", href:"dev_ref/extended-functionality.html", target:"contentwin" };
    var d4e1640 = new YAHOO.widget.TextNode(objd4e1640, d4e1015, false);var objd4e1647 = { label: "Topic merge", href:"dev_ref/topicmerge.html", target:"contentwin" };
    var d4e1647 = new YAHOO.widget.TextNode(objd4e1647, d4e1015, false);var objd4e1654 = { label: "Creating Eclipse help from within Eclipse", href:"dev_ref/workingwithdocplugin.html", target:"contentwin" };
    var d4e1654 = new YAHOO.widget.TextNode(objd4e1654, d4e1015, false);
  var objd4e1665 = { label: "Project Management Guidelines", href:"admin/DITA-OTProjectManagement.html", target:"contentwin" };
    var d4e1665 = new YAHOO.widget.TextNode(objd4e1665, root, false);var objd4e1679 = { label: "Goals and objectives", href:"admin/DITA-OTProjectGoals.html", target:"contentwin" };
    var d4e1679 = new YAHOO.widget.TextNode(objd4e1679, d4e1665, false);var objd4e1689 = { label: "Development process", href:"admin/DevelopmentProcess.html", target:"contentwin" };
    var d4e1689 = new YAHOO.widget.TextNode(objd4e1689, d4e1665, false);var objd4e1699 = { label: "Project roles", href:"admin/ProjectRoles.html", target:"contentwin" };
    var d4e1699 = new YAHOO.widget.TextNode(objd4e1699, d4e1689, false);var objd4e1709 = { label: "Release management", href:"admin/ReleaseLifeCycle.html", target:"contentwin" };
    var d4e1709 = new YAHOO.widget.TextNode(objd4e1709, d4e1689, false);var objd4e1719 = { label: "Feature requests and defect reports", href:"admin/FixesAndFeatures.html", target:"contentwin" };
    var d4e1719 = new YAHOO.widget.TextNode(objd4e1719, d4e1689, false);var objd4e1729 = { label: "How to participate in the DITA Open Toolkit", href:"admin/HowToParticipate.html", target:"contentwin" };
    var d4e1729 = new YAHOO.widget.TextNode(objd4e1729, d4e1665, false);var objd4e1739 = { label: "Bug fix guidelines", href:"admin/BugFixGuidelines-NoCLA.html", target:"contentwin" };
    var d4e1739 = new YAHOO.widget.TextNode(objd4e1739, d4e1729, false);var objd4e1749 = { label: "Contribution policy", href:"admin/ContributionPolicy.html", target:"contentwin" };
    var d4e1749 = new YAHOO.widget.TextNode(objd4e1749, d4e1729, false);var objd4e1759 = { label: "Contribution Questionnaire Form", href:"admin/ContributionForm.html", target:"contentwin" };
    var d4e1759 = new YAHOO.widget.TextNode(objd4e1759, d4e1729, false);
  var objd4e1767 = { label: "DITA and DITA-OT resources", href:"articles/dita-and-dita-ot-resources.html", target:"contentwin" };
    var d4e1767 = new YAHOO.widget.TextNode(objd4e1767, root, false);var objd4e1777 = { label: "Project page at dita.xml.org", href:"http://dita.xml.org/wiki/the-dita-open-toolkit", target:"contentwin" };
    var d4e1777 = new YAHOO.widget.TextNode(objd4e1777, d4e1767, false);var objd4e1787 = { label: "Project news for the DITA Open Toolkit", href:"http://sourceforge.net/news/?group_id=132728", target:"contentwin" };
    var d4e1787 = new YAHOO.widget.TextNode(objd4e1787, d4e1767, false);var objd4e1797 = { label: "Yahoo! dita-users group", href:"http://groups.yahoo.com/group/dita-users/", target:"contentwin" };
    var d4e1797 = new YAHOO.widget.TextNode(objd4e1797, d4e1767, false);var objd4e1807 = { label: "OASIS DITA Technical Committee ", href:"http://www.oasis-open.org/committees/dita/", target:"contentwin" };
    var d4e1807 = new YAHOO.widget.TextNode(objd4e1807, d4e1767, false);var objd4e1817 = { label: "developerWorks articles", href:"articles/DITA-dWarticles.html", target:"contentwin" };
    var d4e1817 = new YAHOO.widget.TextNode(objd4e1817, d4e1767, false);
  
  

      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit); 
    